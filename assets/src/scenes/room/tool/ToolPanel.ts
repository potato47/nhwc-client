import { G } from "../../../G";
import { SketchpadEvent } from "../../../events/SketchpadEvent";

const { ccclass, property } = cc._decorator;

@ccclass
export class ToolPanel extends cc.Component {

    @property(cc.Node)
    private switchButton: cc.Node = null;

    private isOpen = false;

    public open() {
        this.switchButton.getComponent(cc.Animation).play("tool_open");
        this.isOpen = true;
    }

    public close() {
        this.switchButton.getComponent(cc.Animation).play("tool_close");
        this.isOpen = false;
    }

    public switch() {
        this.isOpen ? this.close() : this.open();
    }

    public show() {
        this.node.active = true;
    }

    public hide() {
        this.node.active = false;
        this.close();
    }

    public onColorPick(toggle: cc.Toggle, colorHex: string) {
        let color = "#" + toggle.node.color.toHEX("#rrggbb");
        let event = new SketchpadEvent(SketchpadEvent.COLOR);
        event.hexColor = color;
        G.dispatchEvent(event);
    }

    public onClear() {
        let event = new SketchpadEvent(SketchpadEvent.CLEAR);
        G.dispatchEvent(event);
    }

    public onWidthPick(toggle: cc.Toggle, widthStr: string) {
        let event = new SketchpadEvent(SketchpadEvent.WIDTH);
        event.width = +widthStr;
        G.dispatchEvent(event);
    }

}