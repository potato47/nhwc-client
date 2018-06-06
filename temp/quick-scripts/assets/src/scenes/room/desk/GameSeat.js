(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/src/scenes/room/desk/GameSeat.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'eb657zZFjxGdKGG4kK3r8sB', 'GameSeat', __filename);
// src/components/room/desk/GameSeat.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameSeat = /** @class */ (function (_super) {
    __extends(GameSeat, _super);
    function GameSeat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.usernameLabel = null;
        _this.tipLabel = null;
        return _this;
    }
    GameSeat.prototype.init = function (user) {
        this.usernameLabel.string = user.username + "\n" + user.score;
    };
    GameSeat.prototype.showTip = function (tip) {
        this.tipLabel.node.active = true;
        this.tipLabel.string = tip;
    };
    GameSeat.prototype.hideTip = function () {
        this.tipLabel.node.active = false;
    };
    __decorate([
        property(cc.Label)
    ], GameSeat.prototype, "usernameLabel", void 0);
    __decorate([
        property(cc.Label)
    ], GameSeat.prototype, "tipLabel", void 0);
    GameSeat = __decorate([
        ccclass
    ], GameSeat);
    return GameSeat;
}(cc.Component));
exports.GameSeat = GameSeat;

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
        //# sourceMappingURL=GameSeat.js.map
        