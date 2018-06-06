(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/src/models/RoomModel.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'c2feanMuXxPiLtfNHb3LC3d', 'RoomModel', __filename);
// src/models/RoomModel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RoomModel = /** @class */ (function (_super) {
    __extends(RoomModel, _super);
    function RoomModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.room = {};
        return _this;
    }
    RoomModel.prototype.init = function (roomData) {
        this.room = roomData;
    };
    RoomModel.prototype.setRoom = function (room) {
        this.room = room;
    };
    RoomModel.prototype.getRoom = function () {
        return this.room;
    };
    RoomModel.prototype.getSeatMap = function () {
        return this.room.seatMap;
    };
    RoomModel.prototype.getUidBySeat = function (seat) {
        return this.room.seatMap[seat].uid;
    };
    RoomModel.prototype.setScoreBySeat = function (seat, score) {
        this.room.seatMap[seat].score = score;
    };
    RoomModel.prototype.getScoreBySeat = function (seat) {
        return this.room.seatMap[seat].score;
    };
    RoomModel.prototype.setSeatReady = function (seat, isReady) {
        this.room.seatMap[seat].isReady = isReady;
    };
    RoomModel.prototype.getRid = function () {
        return this.room.rid;
    };
    RoomModel.prototype.getHint = function () {
        return this.room.hint;
    };
    RoomModel.prototype.getGameTime = function () {
        return this.room.gameTime;
    };
    RoomModel.prototype.getResultTime = function () {
        return this.room.resultTime;
    };
    RoomModel.prototype.getPaintSeat = function () {
        return this.room.paint;
    };
    RoomModel = __decorate([
        ccclass
    ], RoomModel);
    return RoomModel;
}(cc.Component));
exports.RoomModel = RoomModel;

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
        //# sourceMappingURL=RoomModel.js.map
        