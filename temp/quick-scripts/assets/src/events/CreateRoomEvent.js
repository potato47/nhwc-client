(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/src/events/CreateRoomEvent.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '5be77u8OvxCTqCvtGNzJ4db', 'CreateRoomEvent', __filename);
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
        //# sourceMappingURL=CreateRoomEvent.js.map
        