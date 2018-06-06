"use strict";
cc._RF.push(module, 'add02hsK19MOYvz4GmEamgf', 'MessagePanel');
// src/components/room/message/MessagePanel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var G_1 = require("../../../G");
var BulletMessage_1 = require("./BulletMessage");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MessagePanel = /** @class */ (function (_super) {
    __extends(MessagePanel, _super);
    function MessagePanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.messageLabel = null;
        _this.sendButton = null;
        _this.inputBox = null;
        _this.switchButton = null;
        _this.content = null;
        _this.bulletContainer = null;
        _this.bulletMessagePrefab = null;
        _this.isOpen = false;
        return _this;
    }
    MessagePanel.prototype.onLoad = function () {
        this.addListeners();
    };
    MessagePanel.prototype.show = function () {
        this.switchButton.node.active = true;
    };
    MessagePanel.prototype.hide = function () {
        this.switchButton.node.active = false;
        this.close();
    };
    MessagePanel.prototype.switch = function () {
        this.isOpen ? this.close() : this.open();
    };
    MessagePanel.prototype.open = function () {
        this.switchButton.getComponent(cc.Animation).play("message_open");
        this.isOpen = true;
    };
    MessagePanel.prototype.close = function () {
        this.switchButton.getComponent(cc.Animation).play("message_close");
        this.isOpen = false;
    };
    MessagePanel.prototype.onBtnSend = function () {
        if (G_1.G.ws.isOpen) {
            var inputStr = this.inputBox.string;
            G_1.G.ws.emit("message", inputStr);
            this.inputBox.string = "";
        }
        else {
            this.pushMessage("ws没有连接...");
        }
    };
    MessagePanel.prototype.onWsMessage = function (data) {
        this.pushMessage(data);
    };
    MessagePanel.prototype.pushMessage = function (newMessage) {
        this.messageLabel.string += '\n' + newMessage;
        this.pushBulletMessage(newMessage);
    };
    MessagePanel.prototype.pushBulletMessage = function (message) {
        var bulletNode = cc.instantiate(this.bulletMessagePrefab);
        var bulletMessage = bulletNode.getComponent(BulletMessage_1.BulletMessage);
        bulletMessage.show(message);
        this.bulletContainer.addChild(bulletNode);
        var h = this.bulletContainer.height * Math.random();
        bulletNode.x = cc.director.getWinSize().width / 2 + 200;
        bulletNode.y = -this.bulletContainer.height / 2 + h;
        bulletNode.runAction(cc.moveTo(6, cc.p(-cc.director.getWinSize().width, bulletNode.y)));
    };
    MessagePanel.prototype.addListeners = function () {
        G_1.G.ws.on("message", this.onWsMessage, this);
    };
    __decorate([
        property(cc.Label)
    ], MessagePanel.prototype, "messageLabel", void 0);
    __decorate([
        property(cc.Button)
    ], MessagePanel.prototype, "sendButton", void 0);
    __decorate([
        property(cc.EditBox)
    ], MessagePanel.prototype, "inputBox", void 0);
    __decorate([
        property(cc.Button)
    ], MessagePanel.prototype, "switchButton", void 0);
    __decorate([
        property(cc.Node)
    ], MessagePanel.prototype, "content", void 0);
    __decorate([
        property(cc.Node)
    ], MessagePanel.prototype, "bulletContainer", void 0);
    __decorate([
        property(cc.Prefab)
    ], MessagePanel.prototype, "bulletMessagePrefab", void 0);
    MessagePanel = __decorate([
        ccclass
    ], MessagePanel);
    return MessagePanel;
}(cc.Component));
exports.MessagePanel = MessagePanel;

cc._RF.pop();