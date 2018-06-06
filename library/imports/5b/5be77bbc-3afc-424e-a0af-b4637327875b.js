"use strict";
cc._RF.push(module, '5be77u8OvxCTqCvtGNzJ4db', 'CreateRoomEvent');
// src/events/CreateRoomEvent.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CreateRoomEvent = /** @class */ (function (_super) {
    __extends(CreateRoomEvent, _super);
    function CreateRoomEvent(seatSum, gameSum) {
        var _this = _super.call(this, CreateRoomEvent.NAME, true) || this;
        _this.seatSum = seatSum;
        _this.gameSum = gameSum;
        return _this;
    }
    CreateRoomEvent.NAME = "CreateRoom";
    return CreateRoomEvent;
}(cc.Event.EventCustom));
exports.CreateRoomEvent = CreateRoomEvent;

cc._RF.pop();