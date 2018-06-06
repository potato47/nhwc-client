(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/src/scenes/room/topbar/TopBar.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'edc2endFO9A4rdw5VupHBIg', 'TopBar', __filename);
// src/components/room/topbar/TopBar.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TopBar = /** @class */ (function (_super) {
    __extends(TopBar, _super);
    function TopBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.centerLabel = null;
        _this.tickerLabel = null;
        _this.tickNumber = 0;
        _this.intervalId = -1;
        return _this;
    }
    TopBar.prototype.showMessage = function (message) {
        this.centerLabel.string = message;
    };
    TopBar.prototype.showTicker = function (n) {
        var _this = this;
        clearInterval(this.intervalId);
        this.tickNumber = n;
        this.tickerLabel.string = this.tickNumber + "";
        this.intervalId = setInterval(function () {
            _this.tickNumber--;
            _this.tickerLabel.string = _this.tickNumber + "";
            if (_this.tickNumber <= 0) {
                clearInterval(_this.intervalId);
            }
        }, 1000);
    };
    TopBar.prototype.hideTicker = function () {
        this.tickerLabel.string = "-";
    };
    __decorate([
        property(cc.Label)
    ], TopBar.prototype, "centerLabel", void 0);
    __decorate([
        property(cc.Label)
    ], TopBar.prototype, "tickerLabel", void 0);
    TopBar = __decorate([
        ccclass
    ], TopBar);
    return TopBar;
}(cc.Component));
exports.TopBar = TopBar;

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
        //# sourceMappingURL=TopBar.js.map
        