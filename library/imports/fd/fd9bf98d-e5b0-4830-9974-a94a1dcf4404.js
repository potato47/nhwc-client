"use strict";
cc._RF.push(module, 'fd9bfmN5bBIMJl0qUodz0QE', 'G');
// src/G.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Global = /** @class */ (function (_super) {
    __extends(Global, _super);
    function Global() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gameRoot = null;
        _this.http = null;
        _this.ws = null;
        _this.user = null;
        _this.room = null;
        return _this;
    }
    Global.prototype.setGameRoot = function (gameRoot) {
        this.gameRoot = gameRoot;
    };
    Global.prototype.onLodingSuccess = function () {
        cc.director.loadScene("login");
    };
    Global.prototype.onLoginSuccess = function (user) {
        cc.log(user);
        this.user.setUser(user);
        cc.director.loadScene("hall");
    };
    Global.prototype.onEnterRegister = function () {
        cc.director.loadScene("register");
    };
    Global.prototype.onHallExit = function () {
        cc.director.loadScene("login");
    };
    Global.prototype.onEnterRoom = function (data) {
        this.room.setRoom(data);
        cc.director.loadScene("room");
    };
    Global.prototype.onExitRoom = function () {
        cc.director.loadScene("hall");
    };
    Global.Instance = new Global();
    return Global;
}(cc.EventTarget));
exports.G = Global.Instance;

cc._RF.pop();