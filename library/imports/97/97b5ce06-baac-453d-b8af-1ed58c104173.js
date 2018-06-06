"use strict";
cc._RF.push(module, '97b5c4GuqxFPbivHtWMEEFz', 'PrepareSeatLayout');
// src/components/room/prepare/PrepareSeatLayout.ts

Object.defineProperty(exports, "__esModule", { value: true });
var PrepareSeat_1 = require("./PrepareSeat");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PrepareSeatLayout = /** @class */ (function (_super) {
    __extends(PrepareSeatLayout, _super);
    function PrepareSeatLayout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prepareSeatPrefab = null;
        _this.seatMap = {};
        return _this;
    }
    PrepareSeatLayout.prototype.addUser = function (user) {
        var seatNode = cc.instantiate(this.prepareSeatPrefab);
        this.node.addChild(seatNode);
        var prepareSeat = seatNode.getComponent(PrepareSeat_1.PrepareSeat);
        prepareSeat.init(user);
        if (user.isReady) {
            prepareSeat.prepare();
        }
        this.seatMap[user.uid] = prepareSeat;
    };
    PrepareSeatLayout.prototype.leaveUser = function (uid) {
        this.seatMap[uid].node.destroy();
    };
    PrepareSeatLayout.prototype.prepareUser = function (uid) {
        this.seatMap[uid].prepare();
    };
    PrepareSeatLayout.prototype.removeAllUser = function () {
        this.seatMap = {};
        this.node.removeAllChildren();
    };
    __decorate([
        property(cc.Prefab)
    ], PrepareSeatLayout.prototype, "prepareSeatPrefab", void 0);
    PrepareSeatLayout = __decorate([
        ccclass
    ], PrepareSeatLayout);
    return PrepareSeatLayout;
}(cc.Component));
exports.PrepareSeatLayout = PrepareSeatLayout;

cc._RF.pop();