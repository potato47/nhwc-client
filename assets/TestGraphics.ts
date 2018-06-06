const {ccclass, property,executeInEditMode} = cc._decorator;

@ccclass
@executeInEditMode
export default class TestGraphics extends cc.Component {

    @property(cc.Graphics)
    private g:cc.Graphics = null;

    onLoad () {
        cc.log(1234);
        this.node.parent.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.parent.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.parent.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.parent.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        this.g.moveTo(0,0);
        this.g.lineTo(0,100);
        this.g.stroke();
        this.g.moveTo(0,100);
        this.g.lineTo(100,100);
        this.g.stroke();

        setTimeout(()=>{
            this.g.clear();
        },1000);

        setTimeout(()=>{
            this.g.moveTo(0,0);
            this.g.lineTo(0,100);
            this.g.stroke();
            this.g.moveTo(0,100);
            this.g.lineTo(100,100);
            this.g.stroke();
        },2000);
    }

    private onTouchStart(e: cc.Event.EventTouch) {
        cc.log(1);
        let localPosition = this.node.convertToNodeSpaceAR(cc.v2(e.getLocation()));
        this.g.moveTo(localPosition.x, localPosition.y);
    }

    private onTouchMove(e: cc.Event.EventTouch) {
        cc.log(2);
        let localPosition = this.node.convertToNodeSpaceAR(cc.v2(e.getLocation()));
        this.g.lineTo(localPosition.x, localPosition.y);
        this.g.stroke();
        this.g.moveTo(localPosition.x, localPosition.y);
    }

    private onTouchEnd(e: cc.Event.EventTouch) {
        cc.log(3);
    }

    private onTouchCancel(e: cc.Event.EventTouch) {
        cc.log(4);
    }
}
