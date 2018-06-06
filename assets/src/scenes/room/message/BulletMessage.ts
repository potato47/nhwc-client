const {ccclass, property} = cc._decorator;

@ccclass
export class BulletMessage extends cc.Component {

    @property(cc.Node)
    private messageBox: cc.Node = null;
    @property(cc.Label)
    private messageLabel: cc.Label = null;

    public show(message:string) {
        this.messageLabel.string = message;
    }

}
