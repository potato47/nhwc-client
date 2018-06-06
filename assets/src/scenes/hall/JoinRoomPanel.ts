import { G } from "../../G";
import { JoinRoomEvent } from "../../events/JoinRoomEvent";

const {ccclass,property} = cc._decorator;

@ccclass
export class JoinRoomPanel extends cc.Component {
    @property(cc.Button)
    private confirmButton: cc.Button = null;
    @property(cc.Button)
    private closeButton: cc.Button = null;
    @property(cc.EditBox)
    private inputBox: cc.EditBox = null;

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
        let roomNum;
        if(this.inputBox.string === ""){
            roomNum = 1;
        }else{
            roomNum = +this.inputBox.string;
        }
        G.dispatchEvent(new JoinRoomEvent(roomNum));
    }

    private onBtnClose() {
        this.hide();
    }


}