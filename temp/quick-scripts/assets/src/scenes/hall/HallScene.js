(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/src/scenes/hall/HallScene.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '0ad25Q3l1ZOzpSrnaA04vE+', 'HallScene', __filename);
// src/scenes/hall/HallScene.ts

Object.defineProperty(exports, "__esModule", { value: true });
var G_1 = require("../../G");
var JoinRoomEvent_1 = require("../../events/JoinRoomEvent");
var JoinRoomPanel_1 = require("./JoinRoomPanel");
var CreateRoomPanel_1 = require("./CreateRoomPanel");
var CreateRoomEvent_1 = require("../../events/CreateRoomEvent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var HallScene = /** @class */ (function (_super) {
    __extends(HallScene, _super);
    function HallScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.usernameLabel = null;
        _this.userHeadSprite = null;
        _this.messageLabel = null;
        _this.enterRoomInputBox = null;
        _this.enterRoomButton = null;
        _this.returnButton = null;
        _this.roomInfoLabel = null;
        _this.createRoomButton = null;
        _this.createRoomPanel = null;
        _this.joinRoomButton = null;
        _this.joinRoomPanel = null;
        _this.matchButton = null;
        return _this;
    }
    HallScene.prototype.start = function () {
        this.usernameLabel.string = G_1.G.user.getUsername();
        this.userHeadSprite.spriteFrame = G_1.G.user.getUserHead();
        this.addListeners();
        G_1.G.ws.emit("hall");
    };
    HallScene.prototype.onBtnCreateRoom = function () {
        this.createRoomPanel.show();
    };
    HallScene.prototype.onEventCreateRoom = function (event) {
        G_1.G.gameRoot.showMaskMessage("正在创建房间");
        G_1.G.ws.emit("create", { seatSum: event.seatSum, gameSum: event.gameSum });
    };
    HallScene.prototype.onWsCreateRoom = function (data) {
        G_1.G.gameRoot.showMaskMessage("创建房间成功，正在进入房间");
        G_1.G.ws.emit("enter", { rid: data.rid });
    };
    HallScene.prototype.onBtnJoinRoom = function () {
        this.joinRoomPanel.show();
    };
    HallScene.prototype.onEventJoinRoom = function (event) {
        G_1.G.gameRoot.showMaskMessage("正在进入房间");
        G_1.G.ws.emit("enter", { rid: event.roomNum });
    };
    HallScene.prototype.onWsEnterRoom = function (data) {
        G_1.G.gameRoot.hideMaskMessage();
        G_1.G.onEnterRoom(data);
    };
    HallScene.prototype.onBtnReturn = function () {
        G_1.G.onHallExit();
    };
    HallScene.prototype.onBtnEnterRoom = function () {
        var rid = +this.enterRoomInputBox.string;
        G_1.G.ws.emit("enter", { rid: rid });
    };
    HallScene.prototype.onBtnMatchRoom = function () {
        G_1.G.ws.emit("match");
    };
    HallScene.prototype.onWsHallMessage = function (data) {
        this.messageLabel.string = data;
    };
    // onWsHallInfo(data) {
    //     this.roomInfoLabel.string = "";
    //     data.roomlist.forEach((room, i) => {
    //         this.roomInfoLabel.string += `${room.rid} (${room.num}/${room.max})` + "\n";
    //     });
    // }
    HallScene.prototype.onWsError = function (data) {
        G_1.G.gameRoot.hideMaskMessage();
        G_1.G.gameRoot.showTip(data);
    };
    HallScene.prototype.onDestroy = function () {
        this.removeListeners();
    };
    HallScene.prototype.addListeners = function () {
        this.joinRoomButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnJoinRoom, this);
        this.createRoomButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnCreateRoom, this);
        this.matchButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnMatchRoom, this);
        G_1.G.on(JoinRoomEvent_1.JoinRoomEvent.NAME, this.onEventJoinRoom, this);
        G_1.G.on(CreateRoomEvent_1.CreateRoomEvent.NAME, this.onEventCreateRoom, this);
        this.returnButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnReturn, this);
        this.enterRoomButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnEnterRoom, this);
        G_1.G.ws.on("message", this.onWsHallMessage, this);
        // G.ws.on("hall", this.onWsHallInfo, this);
        G_1.G.ws.on("create", this.onWsCreateRoom, this);
        G_1.G.ws.on("enter", this.onWsEnterRoom, this);
        G_1.G.ws.on("error", this.onWsError, this);
    };
    HallScene.prototype.removeListeners = function () {
        G_1.G.ws.offTarget(this);
    };
    __decorate([
        property(cc.Label)
    ], HallScene.prototype, "usernameLabel", void 0);
    __decorate([
        property(cc.Sprite)
    ], HallScene.prototype, "userHeadSprite", void 0);
    __decorate([
        property(cc.Label)
    ], HallScene.prototype, "messageLabel", void 0);
    __decorate([
        property(cc.EditBox)
    ], HallScene.prototype, "enterRoomInputBox", void 0);
    __decorate([
        property(cc.Button)
    ], HallScene.prototype, "enterRoomButton", void 0);
    __decorate([
        property(cc.Button)
    ], HallScene.prototype, "returnButton", void 0);
    __decorate([
        property(cc.Label)
    ], HallScene.prototype, "roomInfoLabel", void 0);
    __decorate([
        property(cc.Button)
    ], HallScene.prototype, "createRoomButton", void 0);
    __decorate([
        property(CreateRoomPanel_1.CreateRoomPanel)
    ], HallScene.prototype, "createRoomPanel", void 0);
    __decorate([
        property(cc.Button)
    ], HallScene.prototype, "joinRoomButton", void 0);
    __decorate([
        property(JoinRoomPanel_1.JoinRoomPanel)
    ], HallScene.prototype, "joinRoomPanel", void 0);
    __decorate([
        property(cc.Button)
    ], HallScene.prototype, "matchButton", void 0);
    HallScene = __decorate([
        ccclass
    ], HallScene);
    return HallScene;
}(cc.Component));
exports.default = HallScene;

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
        //# sourceMappingURL=HallScene.js.map
        