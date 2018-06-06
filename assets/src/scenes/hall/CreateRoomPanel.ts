import { G } from "../../G";
import { CreateRoomEvent } from "../../events/CreateRoomEvent";

const {ccclass,property} = cc._decorator;

@ccclass
export class CreateRoomPanel extends cc.Component {
    @property(cc.Button)
    private confirmButton: cc.Button = null;
    @property(cc.Button)
    private closeButton: cc.Button = null;
    @property(cc.EditBox)
    private seatSumInputBox: cc.EditBox = null;
    @property(cc.EditBox)
    private gameSumInputBox: cc.EditBox = null;
    protected onLoad() {
        this.confirmButton.node.on(cc.Node.EventType.TOUCH_END,this.onBtnConfirm,this);
        this.closeButton.node.on(cc.Node.EventType.TOUCH_END,this.onBtnClose,this);
    }

    public show() {
        this.node.active = true;
    }

    public hide() {
        this.node.active = false;
    }

    private onBtnConfirm() {
        let gameSum,seatSum;
        if(this.seatSumInputBox.string === "") {
            seatSum = 0
        }else {
            seatSum = +this.seatSumInputBox.string;
        }
        if(this.gameSumInputBox.string === ""){
            gameSum = 0;
        }else{
            gameSum = +this.gameSumInputBox.string;
        }
        if (seatSum < 2 || seatSum > 6 || gameSum < 1) {
            G.gameRoot.showTip("输入参数不合法");
        } else{
            G.dispatchEvent(new CreateRoomEvent(seatSum,gameSum));
        }
    }

    private onBtnClose() {
        this.hide();
    }


}