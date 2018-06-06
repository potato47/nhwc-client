"use strict";
cc._RF.push(module, 'a50aa7l6XFEoK/mn2RpYL/S', 'OverPanel');
// src/components/room/over/OverPanel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var G_1 = require("../../../G");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var OverPanel = /** @class */ (function (_super) {
    __extends(OverPanel, _super);
    function OverPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resultLabel = null;
        return _this;
    }
    OverPanel.prototype.show = function () {
        this.node.active = true;
        var users = [];
        var seatMap = G_1.G.room.getSeatMap();
        for (var i in seatMap) {
            if (seatMap[i]) {
                users.push(seatMap[i]);
            }
        }
        users.sort(function (u1, u2) {
            if (u1.score >= u2.score) {
                return -1;
            }
            else {
                return 1;
            }
        });
        this.resultLabel.string = "";
        for (var i = 0; i < users.length; i++) {
            this.resultLabel.string += i + "\u3010" + users[i].username + "\u3011 " + users[i].score + "\u5206" + "\n";
        }
    };
    OverPanel.prototype.hide = function () {
        if (this.node.active) {
            this.node.active = false;
        }
    };
    __decorate([
        property(cc.Label)
    ], OverPanel.prototype, "resultLabel", void 0);
    OverPanel = __decorate([
        ccclass
    ], OverPanel);
    return OverPanel;
}(cc.Component));
exports.OverPanel = OverPanel;

cc._RF.pop();