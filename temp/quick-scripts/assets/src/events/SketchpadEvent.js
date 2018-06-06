(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/src/events/SketchpadEvent.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'dcf33WZYOREyZxnMdDnbJEL', 'SketchpadEvent', __filename);
// src/events/SketchpadEvent.ts

Object.defineProperty(exports, "__esModule", { value: true });
var SketchpadEvent = /** @class */ (function (_super) {
    __extends(SketchpadEvent, _super);
    function SketchpadEvent(type) {
        return _super.call(this, type, true) || this;
    }
    SketchpadEvent.COLOR = "SketchpadColor";
    SketchpadEvent.WIDTH = "SketchpadWidth";
    SketchpadEvent.CLEAR = "SketchpadClear";
    return SketchpadEvent;
}(cc.Event.EventCustom));
exports.SketchpadEvent = SketchpadEvent;

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
        //# sourceMappingURL=SketchpadEvent.js.map
        