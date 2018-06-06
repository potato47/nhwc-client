(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/src/utils/NextStore.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '4dc48XJ8MZEwowjLJmhkI3Z', 'NextStore', __filename);
// src/utils/NextStore.ts

Object.defineProperty(exports, "__esModule", { value: true });
var NextStore = /** @class */ (function () {
    function NextStore() {
    }
    Object.defineProperty(NextStore.prototype, "user", {
        get: function () {
            return this._user;
        },
        set: function (user) {
            this._user = user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NextStore.prototype, "room", {
        get: function () {
            return this._room;
        },
        set: function (room) {
            this._room = room;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NextStore.prototype, "token", {
        get: function () {
            return this.user ? this.user.token : "";
        },
        enumerable: true,
        configurable: true
    });
    return NextStore;
}());
exports.NextStore = NextStore;

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
        //# sourceMappingURL=NextStore.js.map
        