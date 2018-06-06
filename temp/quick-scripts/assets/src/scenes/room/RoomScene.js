(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/src/scenes/room/RoomScene.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '89cdbk/niZH5JgejDwvSTfH', 'RoomScene', __filename);
// src/scenes/room/RoomScene.ts

Object.defineProperty(exports, "__esModule", { value: true });
var G_1 = require("../../G");
var Desk_1 = require("./desk/Desk");
var Sketchpad_1 = require("../share/Sketchpad");
var TopBar_1 = require("./topbar/TopBar");
var PreparePanel_1 = require("./prepare/PreparePanel");
var MessagePanel_1 = require("./message/MessagePanel");
var ToolPanel_1 = require("./tool/ToolPanel");
var SketchpadEvent_1 = require("../../events/SketchpadEvent");
var OverPanel_1 = require("./over/OverPanel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RoomScene = /** @class */ (function (_super) {
    __extends(RoomScene, _super);
    function RoomScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.topBar = null;
        _this.preparePanel = null;
        _this.board = null;
        _this.desk = null;
        _this.messagePanel = null;
        _this.toolPanel = null;
        _this.overPanel = null;
        _this.sketchpadPrefab = null;
        _this.sketchpad = null;
        return _this;
    }
    RoomScene.prototype.start = function () {
        this.topBar.showMessage("房间号：" + G_1.G.room.getRid());
        var sketchpadNode = cc.instantiate(this.sketchpadPrefab);
        this.board.addChild(sketchpadNode);
        this.sketchpad = sketchpadNode.getComponent(Sketchpad_1.Sketchpad);
        this.preparePanel.show();
        this.messagePanel.show();
        this.toolPanel.hide();
        this.overPanel.hide();
        this.addListeners();
    };
    // 同步绘画信息
    RoomScene.prototype.syncPath = function () {
        if (this.sketchpad.isDrawing && this.sketchpad.path.length > 0) {
            var path = this.sketchpad.popPath();
            G_1.G.ws.emit("draw", {
                type: "path",
                path: path,
            });
        }
    };
    RoomScene.prototype.onGameStart = function () {
        this.desk.show();
        this.desk.updateSeatsInfo(G_1.G.room.getSeatMap());
    };
    RoomScene.prototype.onWsStartMe = function (data) {
        if (data.gameNum === 1) {
            this.onGameStart();
        }
        this.sketchpad.clear();
        this.desk.hideAnswerButton();
        this.topBar.showMessage("\u4F60\u753B:" + data.word);
        this.topBar.showTicker(G_1.G.room.getGameTime());
        this.sketchpad.enableDraw();
        this.toolPanel.show();
        this.messagePanel.hide();
        this.desk.hideAllTip();
    };
    RoomScene.prototype.onWsStartOther = function (data) {
        if (data.gameNum === 1) {
            this.onGameStart();
        }
        this.sketchpad.clear();
        this.desk.showAnswerButton();
        this.topBar.showMessage("\u63D0\u793A:" + data.hint);
        this.topBar.showTicker(G_1.G.room.getGameTime());
        this.sketchpad.disableDraw();
        this.toolPanel.hide();
        this.messagePanel.show();
        this.desk.hideAllTip();
    };
    RoomScene.prototype.onWsDraw = function (data) {
        if (data.type === "path") {
            this.sketchpad.drawByPath(data.path);
        }
        else if (data.type === "color") {
            this.sketchpad.setPenColor(data.color);
        }
        else if (data.type === "width") {
            this.sketchpad.setLineWidth(data.width);
        }
        else if (data.type === "clear") {
            this.sketchpad.clear();
        }
    };
    RoomScene.prototype.onWsAnswer = function (data) {
        if (data.isRight) {
            for (var i in data.scores) {
                G_1.G.room.setScoreBySeat(+i, data.scores[i]);
                if (G_1.G.room.getUidBySeat(+i) === G_1.G.user.getUid()) {
                    this.desk.hideAnswerButton();
                }
                if (+i !== G_1.G.room.getPaintSeat()) {
                    this.desk.answerRight(+i, data.scores[i]);
                }
            }
            this.desk.updateSeatsInfo(G_1.G.room.getSeatMap());
        }
        else {
            this.desk.answerWrong(data.seat);
        }
    };
    RoomScene.prototype.onWsResult = function (data) {
        this.desk.hideAnswerButton();
        this.topBar.showMessage("答案:" + data);
        this.topBar.showTicker(G_1.G.room.getResultTime());
        this.sketchpad.disableDraw();
        this.messagePanel.show();
        this.toolPanel.hide();
    };
    RoomScene.prototype.onWsOver = function (data) {
        this.desk.hideAnswerButton();
        this.overPanel.show();
        this.topBar.showMessage("游戏结束，赶紧走吧");
        setTimeout(function () {
            G_1.G.onExitRoom();
        }, 10000);
    };
    RoomScene.prototype.onWsExit = function (data) {
        this.desk.leaveUser(data);
    };
    RoomScene.prototype.onSketchpadColor = function (event) {
        this.sketchpad.setPenColor(event.hexColor);
        G_1.G.ws.emit("draw", {
            type: "color",
            color: event.hexColor,
        });
    };
    RoomScene.prototype.onSketchpadWidth = function (event) {
        this.sketchpad.setLineWidth(event.width);
        G_1.G.ws.emit("draw", {
            type: "width",
            width: event.width,
        });
    };
    RoomScene.prototype.onSketchpadClear = function (event) {
        this.sketchpad.clear();
        G_1.G.ws.emit("draw", {
            type: "clear",
        });
    };
    RoomScene.prototype.addListeners = function () {
        var _this = this;
        // G.ws.on("message", this.onWsMessage, this);
        // G.ws.on("room", this.onWsRoomInfo, this);
        G_1.G.ws.on("draw", this.onWsDraw, this);
        // G.ws.on("ready", this.onWsReady, this);
        G_1.G.ws.on("startMe", this.onWsStartMe, this);
        G_1.G.ws.on("startOther", this.onWsStartOther, this);
        G_1.G.ws.on("answer", this.onWsAnswer, this);
        G_1.G.ws.on("result", this.onWsResult, this);
        G_1.G.ws.on("over", this.onWsOver, this);
        // G.ws.on("hint", this.onWsHint, this);
        // G.ws.on("tick", this.onWsTicker, this);
        // G.ws.on("score", this.onWsScore, this);
        G_1.G.ws.on("exit", this.onWsExit, this);
        G_1.G.on(SketchpadEvent_1.SketchpadEvent.COLOR, this.onSketchpadColor, this);
        G_1.G.on(SketchpadEvent_1.SketchpadEvent.WIDTH, this.onSketchpadWidth, this);
        G_1.G.on(SketchpadEvent_1.SketchpadEvent.CLEAR, this.onSketchpadClear, this);
        this.intervalId = setInterval(function () {
            _this.syncPath();
        }, 200);
    };
    RoomScene.prototype.removeListeners = function () {
        clearInterval(this.intervalId);
        G_1.G.ws.offTarget(this);
        G_1.G.targetOff(this);
    };
    RoomScene.prototype.onDestroy = function () {
        this.removeListeners();
    };
    __decorate([
        property(TopBar_1.TopBar)
    ], RoomScene.prototype, "topBar", void 0);
    __decorate([
        property(PreparePanel_1.PreparePanel)
    ], RoomScene.prototype, "preparePanel", void 0);
    __decorate([
        property(cc.Node)
    ], RoomScene.prototype, "board", void 0);
    __decorate([
        property(Desk_1.Desk)
    ], RoomScene.prototype, "desk", void 0);
    __decorate([
        property(MessagePanel_1.MessagePanel)
    ], RoomScene.prototype, "messagePanel", void 0);
    __decorate([
        property(ToolPanel_1.ToolPanel)
    ], RoomScene.prototype, "toolPanel", void 0);
    __decorate([
        property(OverPanel_1.OverPanel)
    ], RoomScene.prototype, "overPanel", void 0);
    __decorate([
        property(cc.Prefab)
    ], RoomScene.prototype, "sketchpadPrefab", void 0);
    RoomScene = __decorate([
        ccclass
    ], RoomScene);
    return RoomScene;
}(cc.Component));
exports.default = RoomScene;

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
        //# sourceMappingURL=RoomScene.js.map
        