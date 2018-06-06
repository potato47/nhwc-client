const {ccclass,property} = cc._decorator;

@ccclass
export class GameRoot extends cc.Component {

    @property(cc.Node)
    private maskPanel:cc.Node = null;
    @property(cc.Label)
    private messageLabel: cc.Label = null;
    @property(cc.Node)
    private tipPanel: cc.Node = null;
    @property(cc.Label)
    private tipLabel: cc.Label = null;
    @property(cc.SpriteAtlas)
    private headList: cc.SpriteAtlas = null;

    public showMaskMessage(message:string,timeout:number = 0) {
        this.messageLabel.string = message;
        if(!this.maskPanel.active){
            this.maskPanel.active = true;
        }
        if(timeout > 0) {
            setTimeout(()=>{this.hideMaskMessage()},timeout);
        }
    }

    public hideMaskMessage() {
        this.maskPanel.active = false;
    }

    public showTip(tip:string) {
        this.tipLabel.string = tip;
        this.tipPanel.getComponent(cc.Animation).play();
    }
    
    public getHeadSprite(name: string): cc.SpriteFrame {
        return this.headList.getSpriteFrame(name);
    }
}