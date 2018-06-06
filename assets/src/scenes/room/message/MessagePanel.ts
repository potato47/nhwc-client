import { G } from "../../../G";
import { BulletMessage } from "./BulletMessage";

const { ccclass, property } = cc._decorator;

@ccclass
export class MessagePanel extends cc.Component {
    @property(cc.Label)
    private messageLabel: cc.Label = null;
    @property(cc.Button)
    private sendButton: cc.Button = null;
    @property(cc.EditBox)
    private inputBox: cc.EditBox = null;
    @property(cc.Button)
    private switchButton: cc.Button = null;
    @property(cc.Node)
    private content: cc.Node = null;
    @property(cc.Node)
    private bulletContainer: cc.Node = null;
    @property(cc.Prefab)
    private bulletMessagePrefab: cc.Prefab = null;

    private isOpen = false;

    protected onLoad() {
        this.addListeners();
    }

    public show() {
        this.switchButton.node.active = true;
    }

    public hide() {
        this.switchButton.node.active = false;
        this.close();
    }

    public switch() {
        this.isOpen?this.close():this.open();
    }
    
    public open() {
        this.switchButton.getComponent(cc.Animation).play("message_open");
        this.isOpen = true;
    }

    public close() {
        this.switchButton.getComponent(cc.Animation).play("message_close");
        this.isOpen = false;
    }

    private onBtnSend() {
        if (G.ws.isOpen) {
            let inputStr = this.inputBox.string;
            G.ws.emit("message", inputStr);
            this.inputBox.string = "";
        } else {
            this.pushMessage("ws没有连接...");
        }
    }

    private onWsMessage(data) {
        this.pushMessage(data);
    }

    public pushMessage(newMessage: string) {
        this.messageLabel.string += '\n' + newMessage;
        this.pushBulletMessage(newMessage);
    }

    public pushBulletMessage(message: string) {
        let bulletNode = cc.instantiate(this.bulletMessagePrefab);
        let bulletMessage: BulletMessage = bulletNode.getComponent(BulletMessage);
        bulletMessage.show(message);
        this.bulletContainer.addChild(bulletNode);
        let h = this.bulletContainer.height*Math.random();
        bulletNode.x = cc.director.getWinSize().width/2 + 200;
        bulletNode.y = -this.bulletContainer.height/2+h;
        bulletNode.runAction(cc.moveTo(6,cc.p(-cc.director.getWinSize().width,bulletNode.y)));
    }

    private addListeners() {
        G.ws.on("message", this.onWsMessage, this);
    }

}