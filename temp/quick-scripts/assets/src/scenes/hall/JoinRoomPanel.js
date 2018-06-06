(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/src/scenes/hall/JoinRoomPanel.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '5ca3dWOCE5KEIsWWgBuTutO', 'JoinRoomPanel', __filename);
// src/components/hall/JoinRoomPanel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var G_1 = require("../../G");
var JoinRoomEvent_1 = require("../../events/JoinRoomEvent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var JoinRoomPanel = /** @class */ (function (_super) {
    __extends(JoinRoomPanel, _super);
    function JoinRoomPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.confirmButton = null;
        _this.closeButton = null;
        _this.inputBox = null;
        return _this;
    }
    JoinRoomPanel.prototype.onLoad = function () {
        this.confirmButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnConfirm, this);
        this.closeButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnClose, this);
    };
    JoinRoomPanel.prototype.show = function () {
        this.node.active = true;
    };
    JoinRoomPanel.prototype.hide = function () {
        this.node.active = false;
    };
    JoinRoomPanel.prototype.onBtnConfirm = function () {
        var roomNum;
        if (this.inputBox.string === "") {
            roomNum = 1;
        }
        else {
            roomNum = +this.inputBox.string;
        }
        G_1.G.dispatchEvent(new JoinRoomEvent_1.JoinRoomEvent(roomNum));
    };
    JoinRoomPanel.prototype.onBtnClose = function () {
        this.hide();
    };
    __decorate([
        property(cc.Button)
    ], JoinRoomPanel.prototype, "confirmButton", void 0);
    __decorate([
        property(cc.Button)
    ], JoinRoomPanel.prototype, "closeButton", void 0);
    __decorate([
        property(cc.EditBox)
    ], JoinRoomPanel.prototype, "inputBox", void 0);
    JoinRoomPanel = __decorate([
        ccclass
    ], JoinRoomPanel);
    return JoinRoomPanel;
}(cc.Component));
exports.JoinRoomPanel = JoinRoomPanel;

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
        //# sourceMappingURL=JoinRoomPanel.js.map
        