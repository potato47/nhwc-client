"use strict";
cc._RF.push(module, '6cf4ba1uexM+LxzOyDjW0cr', 'BulletMessage');
// src/components/room/message/BulletMessage.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BulletMessage = /** @class */ (function (_super) {
    __extends(BulletMessage, _super);
    function BulletMessage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.messageBox = null;
        _this.messageLabel = null;
        return _this;
    }
    BulletMessage.prototype.show = function (message) {
        this.messageLabel.string = message;
    };
    __decorate([
        property(cc.Node)
    ], BulletMessage.prototype, "messageBox", void 0);
    __decorate([
        property(cc.Label)
    ], BulletMessage.prototype, "messageLabel", void 0);
    BulletMessage = __decorate([
        ccclass
    ], BulletMessage);
    return BulletMessage;
}(cc.Component));
exports.BulletMessage = BulletMessage;

cc._RF.pop();