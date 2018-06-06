const { ccclass, property } = cc._decorator;

@ccclass
export class Sketchpad extends cc.Component {

    public isDrawing:boolean = false;
    @property(cc.Node)
    private pen: cc.Node = null;
    @property(cc.Graphics)
    private g: cc.Graphics = null;

    public path: Array<{p:cc.Vec2,isStart:boolean}> = [];

    public setLineWidth(w:number) {
        this.g.lineWidth = w;
        this.g.lineCap = cc.Graphics.LineCap.ROUND;
        this.g.lineJoin = cc.Graphics.LineJoin.ROUND;
    }

    public getLineWidth():number{
        return this.g.lineWidth;
    }

    public setPenColor(hex:string) {
        this.g.strokeColor = cc.hexToColor(hex);
        this.g.lineCap = cc.Graphics.LineCap.ROUND;
        this.g.lineJoin = cc.Graphics.LineJoin.ROUND;
    }

    public getPenColor():string {
        return "#"+this.g.strokeColor.toHEX("#rrggbb");
    }


    public enableDraw() {
        this.node.parent.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.parent.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.parent.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.parent.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        this.isDrawing = true;
        this.pen.active = true;
        this.g.lineWidth = 10;
        this.g.strokeColor = cc.Color.BLACK;
        this.g.lineCap = cc.Graphics.LineCap.ROUND;
        this.g.lineJoin = cc.Graphics.LineJoin.ROUND;
    }

    public disableDraw() {
        this.node.parent.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.parent.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.parent.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.parent.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        this.isDrawing = false;
        this.pen.active = false;
        this.g.lineWidth = 10;
        this.g.strokeColor = cc.Color.BLACK;
        this.g.lineCap = cc.Graphics.LineCap.ROUND;
        this.g.lineJoin = cc.Graphics.LineJoin.ROUND;
    }

    public clear() {
        let width = this.g.lineWidth;
        let color = this.g.strokeColor;
        this.g.clear();
        this.g.lineCap = cc.Graphics.LineCap.ROUND;
        this.g.lineJoin = cc.Graphics.LineJoin.ROUND;
        this.g.lineWidth = width;
        this.g.strokeColor = color;
    }

    public savePoint(p:cc.Vec2,isStart:boolean) {
        this.path.push({p:p,isStart:isStart});
    }

    public popPath():Array<{p:cc.Vec2,isStart:boolean}> {
        let path = this.path.slice();
        this.path = [];
        return path;
    }

    public drawByPath(path: Array<{p:cc.Vec2,isStart:boolean}>) {
        for (let i = 0; i < path.length; i++) {
            let {p,isStart} = path[i];
            if(isStart) {
                this.g.moveTo(p.x,p.y);
            }else{
                this.g.lineTo(p.x, p.y)
                this.g.stroke();
                this.g.moveTo(p.x,p.y);
            }
            
        }
    }

    private onTouchStart(e: cc.Event.EventTouch) {
        let localPosition = this.node.convertToNodeSpaceAR(cc.v2(e.getLocation()));
        this.pen.active = true;
        this.pen.position = localPosition;
        this.g.moveTo(localPosition.x, localPosition.y);
        this.savePoint(cc.v2(localPosition.x, localPosition.y),true);
    }

    private onTouchMove(e: cc.Event.EventTouch) {
        let localPosition = this.node.convertToNodeSpaceAR(cc.v2(e.getLocation()));
        this.pen.position = localPosition;
        this.g.lineTo(localPosition.x, localPosition.y);
        this.g.stroke();
        this.g.moveTo(localPosition.x, localPosition.y);
        this.savePoint(cc.v2(localPosition.x,localPosition.y),false);
    }

    private onTouchEnd(e: cc.Event.EventTouch) {
        this.pen.active = false;
    }

    private onTouchCancel(e: cc.Event.EventTouch) {
        this.pen.active = false;
    }
}