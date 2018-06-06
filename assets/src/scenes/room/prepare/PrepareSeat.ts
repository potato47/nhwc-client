const {ccclass,property} = cc._decorator;

@ccclass
export class PrepareSeat extends cc.Component {

    @property(cc.Label)
    private usernameLabel:cc.Label = null;
    @property(cc.Node)
    private prepareIcon:cc.Node = null;

    public init(user) {
       this.usernameLabel.string = user.username; 
    }

    public prepare() {
        this.prepareIcon.active = true;
    }
    
}