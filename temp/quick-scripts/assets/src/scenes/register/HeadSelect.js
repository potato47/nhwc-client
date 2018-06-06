(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/src/scenes/register/HeadSelect.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '404614DVrpDjZb7s5Bqm604', 'HeadSelect', __filename);
// src/components/register/HeadSelect.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var HeadSelect = /** @class */ (function (_super) {
    __extends(HeadSelect, _super);
    function HeadSelect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.headSprite = null;
        _this.leftButton = null;
        _this.rightButton = null;
        _this.headList = null;
        _this.headId = 0;
        return _this;
    }
    HeadSelect.prototype.getHead = function () {
        return this.headId + "";
    };
    HeadSelect.prototype.start = function () {
        this.leftButton.on(cc.Node.EventType.TOUCH_END, this.onBtnLeft, this);
        this.rightButton.on(cc.Node.EventType.TOUCH_END, this.onBtnRight, this);
    };
    HeadSelect.prototype.onBtnLeft = function () {
        this.headId = this.headId === 0 ? 7 : (this.headId - 1);
        this.setHeadSprite();
    };
    HeadSelect.prototype.onBtnRight = function () {
        this.headId = this.headId === 7 ? 0 : (this.headId + 1);
        this.setHeadSprite();
    };
    HeadSelect.prototype.setHeadSprite = function () {
        this.headSprite.spriteFrame = this.headList.getSpriteFrame(this.headId + "");
    };
    __decorate([
        property(cc.Sprite)
    ], HeadSelect.prototype, "headSprite", void 0);
    __decorate([
        property(cc.Node)
    ], HeadSelect.prototype, "leftButton", void 0);
    __decorate([
        property(cc.Node)
    ], HeadSelect.prototype, "rightButton", void 0);
    __decorate([
        property(cc.SpriteAtlas)
    ], HeadSelect.prototype, "headList", void 0);
    HeadSelect = __decorate([
        ccclass
    ], HeadSelect);
    return HeadSelect;
}(cc.Component));
exports.HeadSelect = HeadSelect;

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
        //# sourceMappingURL=HeadSelect.js.map
        