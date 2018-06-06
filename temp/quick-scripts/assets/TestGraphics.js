(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/TestGraphics.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '1bb45WQYytErq1GmQGUIzKS', 'TestGraphics', __filename);
// TestGraphics.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var TestGraphics = /** @class */ (function (_super) {
    __extends(TestGraphics, _super);
    function TestGraphics() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.g = null;
        return _this;
    }
    TestGraphics.prototype.onLoad = function () {
        var _this = this;
        cc.log(1234);
        this.node.parent.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.parent.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.parent.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.parent.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        this.g.moveTo(0, 0);
        this.g.lineTo(0, 100);
        this.g.stroke();
        this.g.moveTo(0, 100);
        this.g.lineTo(100, 100);
        this.g.stroke();
        setTimeout(function () {
            _this.g.clear();
        }, 1000);
        setTimeout(function () {
            _this.g.moveTo(0, 0);
            _this.g.lineTo(0, 100);
            _this.g.stroke();
            _this.g.moveTo(0, 100);
            _this.g.lineTo(100, 100);
            _this.g.stroke();
        }, 2000);
    };
    TestGraphics.prototype.onTouchStart = function (e) {
        cc.log(1);
        var localPosition = this.node.convertToNodeSpaceAR(cc.v2(e.getLocation()));
        this.g.moveTo(localPosition.x, localPosition.y);
    };
    TestGraphics.prototype.onTouchMove = function (e) {
        cc.log(2);
        var localPosition = this.node.convertToNodeSpaceAR(cc.v2(e.getLocation()));
        this.g.lineTo(localPosition.x, localPosition.y);
        this.g.stroke();
        this.g.moveTo(localPosition.x, localPosition.y);
    };
    TestGraphics.prototype.onTouchEnd = function (e) {
        cc.log(3);
    };
    TestGraphics.prototype.onTouchCancel = function (e) {
        cc.log(4);
    };
    __decorate([
        property(cc.Graphics)
    ], TestGraphics.prototype, "g", void 0);
    TestGraphics = __decorate([
        ccclass,
        executeInEditMode
    ], TestGraphics);
    return TestGraphics;
}(cc.Component));
exports.default = TestGraphics;

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
        //# sourceMappingURL=TestGraphics.js.map
        