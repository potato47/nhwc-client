"use strict";
cc._RF.push(module, '9504dTZZftG3rwjG4bYKSgu', 'AnswerPanel');
// src/components/room/desk/AnswerPanel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var G_1 = require("../../../G");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AnswerPanel = /** @class */ (function (_super) {
    __extends(AnswerPanel, _super);
    function AnswerPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hintLabel = null;
        _this.input = null;
        _this.confirmButton = null;
        _this.closeButton = null;
        return _this;
    }
    AnswerPanel.prototype.onLoad = function () {
        this.addListeners();
    };
    AnswerPanel.prototype.show = function () {
        this.node.active = true;
        this.hintLabel.string = G_1.G.room.getHint();
    };
    AnswerPanel.prototype.hide = function () {
        this.node.active = false;
    };
    AnswerPanel.prototype.onBtnConfirm = function () {
        var answer = this.input.string;
        if (answer !== "") {
            G_1.G.ws.emit("answer", answer);
            this.input.string = "";
            this.hide();
        }
    };
    AnswerPanel.prototype.onBtnClose = function () {
        this.hide();
    };
    AnswerPanel.prototype.addListeners = function () {
        this.confirmButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnConfirm, this);
        this.closeButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnClose, this);
    };
    __decorate([
        property(cc.Label)
    ], AnswerPanel.prototype, "hintLabel", void 0);
    __decorate([
        property(cc.EditBox)
    ], AnswerPanel.prototype, "input", void 0);
    __decorate([
        property(cc.Button)
    ], AnswerPanel.prototype, "confirmButton", void 0);
    __decorate([
        property(cc.Button)
    ], AnswerPanel.prototype, "closeButton", void 0);
    AnswerPanel = __decorate([
        ccclass
    ], AnswerPanel);
    return AnswerPanel;
}(cc.Component));
exports.AnswerPanel = AnswerPanel;

cc._RF.pop();