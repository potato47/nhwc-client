"use strict";
cc._RF.push(module, 'c901dE8zAtBSKEafidliboX', 'GameRoot');
// src/components/GameRoot.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameRoot = /** @class */ (function (_super) {
    __extends(GameRoot, _super);
    function GameRoot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maskPanel = null;
        _this.messageLabel = null;
        _this.tipPanel = null;
        _this.tipLabel = null;
        _this.headList = null;
        return _this;
    }
    GameRoot.prototype.showMaskMessage = function (message, timeout) {
        var _this = this;
        if (timeout === void 0) { timeout = 0; }
        this.messageLabel.string = message;
        if (!this.maskPanel.active) {
            this.maskPanel.active = true;
        }
        if (timeout > 0) {
            setTimeout(function () { _this.hideMaskMessage(); }, timeout);
        }
    };
    GameRoot.prototype.hideMaskMessage = function () {
        this.maskPanel.active = false;
    };
    GameRoot.prototype.showTip = function (tip) {
        this.tipLabel.string = tip;
        this.tipPanel.getComponent(cc.Animation).play();
    };
    GameRoot.prototype.getHeadSprite = function (name) {
        return this.headList.getSpriteFrame(name);
    };
    __decorate([
        property(cc.Node)
    ], GameRoot.prototype, "maskPanel", void 0);
    __decorate([
        property(cc.Label)
    ], GameRoot.prototype, "messageLabel", void 0);
    __decorate([
        property(cc.Node)
    ], GameRoot.prototype, "tipPanel", void 0);
    __decorate([
        property(cc.Label)
    ], GameRoot.prototype, "tipLabel", void 0);
    __decorate([
        property(cc.SpriteAtlas)
    ], GameRoot.prototype, "headList", void 0);
    GameRoot = __decorate([
        ccclass
    ], GameRoot);
    return GameRoot;
}(cc.Component));
exports.GameRoot = GameRoot;

cc._RF.pop();