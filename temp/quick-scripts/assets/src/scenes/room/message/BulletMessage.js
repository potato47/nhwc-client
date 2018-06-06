(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/src/scenes/room/message/BulletMessage.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '6cf4ba1uexM+LxzOyDjW0cr', 'BulletMessage', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=BulletMessage.js.map
        