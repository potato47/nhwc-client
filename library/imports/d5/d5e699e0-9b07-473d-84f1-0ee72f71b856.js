"use strict";
cc._RF.push(module, 'd5e69ngmwdHPYTxDucvcbhW', 'PrepareSeat');
// src/components/room/prepare/PrepareSeat.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PrepareSeat = /** @class */ (function (_super) {
    __extends(PrepareSeat, _super);
    function PrepareSeat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.usernameLabel = null;
        _this.prepareIcon = null;
        return _this;
    }
    PrepareSeat.prototype.init = function (user) {
        this.usernameLabel.string = user.username;
    };
    PrepareSeat.prototype.prepare = function () {
        this.prepareIcon.active = true;
    };
    __decorate([
        property(cc.Label)
    ], PrepareSeat.prototype, "usernameLabel", void 0);
    __decorate([
        property(cc.Node)
    ], PrepareSeat.prototype, "prepareIcon", void 0);
    PrepareSeat = __decorate([
        ccclass
    ], PrepareSeat);
    return PrepareSeat;
}(cc.Component));
exports.PrepareSeat = PrepareSeat;

cc._RF.pop();