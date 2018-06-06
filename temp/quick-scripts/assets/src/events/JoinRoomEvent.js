(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/src/events/JoinRoomEvent.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '5ee35ArJPtF6KpDiHW4Botq', 'JoinRoomEvent', __filename);
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
        //# sourceMappingURL=JoinRoomEvent.js.map
        