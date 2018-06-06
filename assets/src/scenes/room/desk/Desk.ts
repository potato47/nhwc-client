import { GameSeat } from "./GameSeat";
import { AnswerPanel } from "./AnswerPanel";

const { ccclass, property } = cc._decorator;

@ccclass
export class Desk extends cc.Component {

    @property(AnswerPanel)
    private answerPanel: AnswerPanel = null;
    @property(cc.Button)
    private answerButton: cc.Button = null;
    @property(cc.Prefab)
    private gameSeatPrefab: cc.Prefab = null;
    @property(cc.Node)
    private seatLayout: cc.Node = null;

    private seatMap: any = {};

    protected onLoad() {
        this.addListeners();
    }
    
    public show() {
        this.node.active = true;
    }

    public hide() {
        this.node.active = false;
    }

    public showAnswerButton() {
        this.answerButton.node.active = true;
    }

    public hideAnswerButton() {
        this.answerButton.node.active = false;
        this.answerPanel.hide();
    }

    public onBtnAnswer() {
        this.answerPanel.show();
    }

    public updateSeatsInfo(seatMap) {
        this.removeAllUser();
        for(let i in seatMap) {
            if(seatMap[i] !== null) {
                this.addUser(seatMap[i]);
            }
        }
    }

    public answerRight(seat,score) {
        this.seatMap[seat].showTip("答对+"+score);
    }

    public answerWrong(seat) {
        this.seatMap[seat].showTip("答错");
    }

    public hideAllTip() {
        for(let i in this.seatMap){
            this.seatMap[i].hideTip();
        }
    }

    public addUser(user) {
        let seatNode = cc.instantiate(this.gameSeatPrefab);
        this.seatLayout.addChild(seatNode);
        let gameSeat:GameSeat = seatNode.getComponent(GameSeat);
        gameSeat.init(user);
        this.seatMap[user.seat] = gameSeat;
    }

    public leaveUser(seat) {
        this.seatMap[seat].node.destroy();
    }

    public removeAllUser() {
        this.seatMap = {};
        this.seatLayout.removeAllChildren();
    }

    private addListeners() {
        this.answerButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnAnswer, this);
    }

}