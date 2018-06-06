"use strict";
cc._RF.push(module, '36e9685DxVJ1YuBtWSPuUJq', 'LodingScene');
// src/components/loding/LodingScene.ts

Object.defineProperty(exports, "__esModule", { value: true });
var G_1 = require("../../G");
var GameRoot_1 = require("../GameRoot");
var NextHttp_1 = require("../../utils/NextHttp");
var NextWebSocket_1 = require("../../utils/NextWebSocket");
var RoomModel_1 = require("../../models/RoomModel");
var UserModel_1 = require("../../models/UserModel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LodingScene = /** @class */ (function (_super) {
    __extends(LodingScene, _super);
    function LodingScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gameRoot = null;
        return _this;
    }
    LodingScene.prototype.onLoad = function () {
        cc.game.addPersistRootNode(this.gameRoot);
        this.initGlobal();
    };
    LodingScene.prototype.initGlobal = function () {
        G_1.G.http = new NextHttp_1.NextHttp();
        G_1.G.ws = new NextWebSocket_1.NextWebSocket();
        G_1.G.room = new RoomModel_1.RoomModel();
        G_1.G.user = new UserModel_1.UserModel();
        G_1.G.gameRoot = this.gameRoot.getComponent(GameRoot_1.GameRoot);
    };
    LodingScene.prototype.start = function () {
        cc.director.setDisplayStats(false);
        G_1.G.gameRoot.showMaskMessage("正在加载资源");
        setTimeout(function () {
            G_1.G.gameRoot.hideMaskMessage();
            G_1.G.onLodingSuccess();
        }, 2000);
    };
    __decorate([
        property(cc.Node)
    ], LodingScene.prototype, "gameRoot", void 0);
    LodingScene = __decorate([
        ccclass
    ], LodingScene);
    return LodingScene;
}(cc.Component));
exports.LodingScene = LodingScene;

cc._RF.pop();