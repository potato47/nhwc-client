"use strict";
cc._RF.push(module, 'dcf33WZYOREyZxnMdDnbJEL', 'SketchpadEvent');
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