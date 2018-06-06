"use strict";
cc._RF.push(module, '99bc3cHK61GLaRChkFH1zsk', 'UserModel');
// src/models/UserModel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var G_1 = require("../G");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UserModel = /** @class */ (function (_super) {
    __extends(UserModel, _super);
    function UserModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.user = {};
        _this.username = "";
        _this.head = "0";
        _this.uid = "";
        _this.rid = 0;
        return _this;
    }
    UserModel.prototype.setUser = function (userData) {
        this.user = userData;
    };
    UserModel.prototype.getUsername = function () {
        return this.user.username;
    };
    UserModel.prototype.getUserHead = function () {
        return G_1.G.gameRoot.getHeadSprite(this.user.head);
    };
    UserModel.prototype.setScore = function (score) {
        this.user.score = score;
    };
    UserModel.prototype.getScore = function () {
        return this.user.score;
    };
    UserModel.prototype.getUid = function () {
        return this.user.uid;
    };
    UserModel.prototype.getSeat = function () {
        return this.user.seat;
    };
    UserModel = __decorate([
        ccclass
    ], UserModel);
    return UserModel;
}(cc.Component));
exports.UserModel = UserModel;

cc._RF.pop();