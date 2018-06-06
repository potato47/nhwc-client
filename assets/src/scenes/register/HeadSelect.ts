const {ccclass, property} = cc._decorator;

@ccclass
export class HeadSelect extends cc.Component {

    @property(cc.Sprite)
    private headSprite: cc.Sprite = null;
    @property(cc.Node)
    private leftButton: cc.Node = null;
    @property(cc.Node)
    private rightButton: cc.Node = null;
    @property(cc.SpriteAtlas)
    private headList: cc.SpriteAtlas = null;
    
    private headId = 0;

    public getHead(): string {
        return this.headId + "";
    }

    start () {
        this.leftButton.on(cc.Node.EventType.TOUCH_END, this.onBtnLeft, this);
        this.rightButton.on(cc.Node.EventType.TOUCH_END, this.onBtnRight, this);
    }

    private onBtnLeft() {
        this.headId = this.headId === 0 ? 7 : (this.headId - 1);
        this.setHeadSprite();
    }

    private onBtnRight() {
        this.headId = this.headId === 7 ? 0 : (this.headId + 1);
        this.setHeadSprite();
    }

    private setHeadSprite() {
        this.headSprite.spriteFrame = this.headList.getSpriteFrame(this.headId + "");
    }

}
