"use strict";
cc._RF.push(module, '49977mc21lNer7TAT+9Nnxr', 'ToolPanel');
// src/components/room/tool/ToolPanel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var G_1 = require("../../../G");
var SketchpadEvent_1 = require("../../../events/SketchpadEvent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ToolPanel = /** @class */ (function (_super) {
    __extends(ToolPanel, _super);
    function ToolPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.switchButton = null;
        _this.isOpen = false;
        return _this;
    }
    ToolPanel.prototype.open = function () {
        this.switchButton.getComponent(cc.Animation).play("tool_open");
        this.isOpen = true;
    };
    ToolPanel.prototype.close = function () {
        this.switchButton.getComponent(cc.Animation).play("tool_close");
        this.isOpen = false;
    };
    ToolPanel.prototype.switch = function () {
        this.isOpen ? this.close() : this.open();
    };
    ToolPanel.prototype.show = function () {
        this.node.active = true;
    };
    ToolPanel.prototype.hide = function () {
        this.node.active = false;
        this.close();
    };
    ToolPanel.prototype.onColorPick = function (toggle, colorHex) {
        var color = "#" + toggle.node.color.toHEX("#rrggbb");
        var event = new SketchpadEvent_1.SketchpadEvent(SketchpadEvent_1.SketchpadEvent.COLOR);
        event.hexColor = color;
        G_1.G.dispatchEvent(event);
    };
    ToolPanel.prototype.onClear = function () {
        var event = new SketchpadEvent_1.SketchpadEvent(SketchpadEvent_1.SketchpadEvent.CLEAR);
        G_1.G.dispatchEvent(event);
    };
    ToolPanel.prototype.onWidthPick = function (toggle, widthStr) {
        var event = new SketchpadEvent_1.SketchpadEvent(SketchpadEvent_1.SketchpadEvent.WIDTH);
        event.width = +widthStr;
        G_1.G.dispatchEvent(event);
    };
    __decorate([
        property(cc.Node)
    ], ToolPanel.prototype, "switchButton", void 0);
    ToolPanel = __decorate([
        ccclass
    ], ToolPanel);
    return ToolPanel;
}(cc.Component));
exports.ToolPanel = ToolPanel;

cc._RF.pop();