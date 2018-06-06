"use strict";
cc._RF.push(module, '5ee35ArJPtF6KpDiHW4Botq', 'JoinRoomEvent');
// src/events/JoinRoomEvent.ts

Object.defineProperty(exports, "__esModule", { value: true });
var JoinRoomEvent = /** @class */ (function (_super) {
    __extends(JoinRoomEvent, _super);
    function JoinRoomEvent(roomNum) {
        var _this = _super.call(this, JoinRoomEvent.NAME, true) || this;
        _this.roomNum = roomNum;
        return _this;
    }
    JoinRoomEvent.NAME = "JoinRoom";
    return JoinRoomEvent;
}(cc.Event.EventCustom));
exports.JoinRoomEvent = JoinRoomEvent;

cc._RF.pop();