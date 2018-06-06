import { G } from "../../../G";

const { ccclass, property } = cc._decorator;

@ccclass
export class AnswerPanel extends cc.Component {

    @property(cc.Label)
    private hintLabel: cc.Label = null;
    @property(cc.EditBox)
    private input: cc.EditBox = null;
    @property(cc.Button)
    private confirmButton: cc.Button = null;
    @property(cc.Button)
    private closeButton: cc.Button = null;

    protected onLoad() {
        this.addListeners();
    }

    public show() {
        this.node.active = true;
        this.hintLabel.string = G.room.getHint();
    }

    public hide() {
        this.node.active = false;
    }

    private onBtnConfirm() {
        let answer = this.input.string;
        if(answer !== ""){
            G.ws.emit("answer",answer);
            this.input.string = "";
            this.hide();
        }
    }

    private onBtnClose() {
        this.hide();
    }

    private addListeners() {
        this.confirmButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnConfirm, this);
        this.closeButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnClose, this);
    }
}