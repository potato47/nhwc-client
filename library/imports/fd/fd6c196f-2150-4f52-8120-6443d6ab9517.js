"use strict";
cc._RF.push(module, 'fd6c1lvIVBPUoEgZEPWq5UX', 'CreateRoomPanel');
// src/scenes/hall/CreateRoomPanel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var G_1 = require("../../G");
var CreateRoomEvent_1 = require("../../events/CreateRoomEvent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CreateRoomPanel = /** @class */ (function (_super) {
    __extends(CreateRoomPanel, _super);
    function CreateRoomPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.confirmButton = null;
        _this.closeButton = null;
        _this.seatSumInputBox = null;
        _this.gameSumInputBox = null;
        return _this;
    }
    CreateRoomPanel.prototype.onLoad = function () {
        this.confirmButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnConfirm, this);
        this.closeButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnClose, this);
    };
    CreateRoomPanel.prototype.show = function () {
        this.node.active = true;
    };
    CreateRoomPanel.prototype.hide = function () {
        this.node.active = false;
    };
    CreateRoomPanel.prototype.onBtnConfirm = function () {
        var gameSum, seatSum;
        if (this.seatSumInputBox.string === "") {
            seatSum = 0;
        }
        else {
            seatSum = +this.seatSumInputBox.string;
        }
        if (this.gameSumInputBox.string === "") {
            gameSum = 0;
        }
        else {
            gameSum = +this.gameSumInputBox.string;
        }
        if (seatSum < 2 || seatSum > 6 || gameSum < 1) {
            G_1.G.gameRoot.showTip("输入参数不合法");
        }
        else {
            G_1.G.dispatchEvent(new CreateRoomEvent_1.CreateRoomEvent(seatSum, gameSum));
        }
    };
    CreateRoomPanel.prototype.onBtnClose = function () {
        this.hide();
    };
    __decorate([
        property(cc.Button)
    ], CreateRoomPanel.prototype, "confirmButton", void 0);
    __decorate([
        property(cc.Button)
    ], CreateRoomPanel.prototype, "closeButton", void 0);
    __decorate([
        property(cc.EditBox)
    ], CreateRoomPanel.prototype, "seatSumInputBox", void 0);
    __decorate([
        property(cc.EditBox)
    ], CreateRoomPanel.prototype, "gameSumInputBox", void 0);
    CreateRoomPanel = __decorate([
        ccclass
    ], CreateRoomPanel);
    return CreateRoomPanel;
}(cc.Component));
exports.CreateRoomPanel = CreateRoomPanel;

cc._RF.pop();