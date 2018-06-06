"use strict";
cc._RF.push(module, '4dc48XJ8MZEwowjLJmhkI3Z', 'NextStore');
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