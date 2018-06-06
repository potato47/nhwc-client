const { ccclass, property } = cc._decorator;

@ccclass
export class GameSeat extends cc.Component {

    @property(cc.Label)
    private usernameLabel: cc.Label = null;
    @property(cc.Label)
    private tipLabel: cc.Label = null;

    public init(user) {
        this.usernameLabel.string = user.username + "\n" + user.score;
    }

    public showTip(tip:string) {
        this.tipLabel.node.active = true;
        this.tipLabel.string = tip;
    }

    public hideTip() {
        this.tipLabel.node.active = false;
    }

}