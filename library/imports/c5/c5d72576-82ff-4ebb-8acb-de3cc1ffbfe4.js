"use strict";
cc._RF.push(module, 'c5d72V2gv9Ou4rL3jzB/7/k', 'NextWebSocket');
// src/utils/NextWebSocket.ts

Object.defineProperty(exports, "__esModule", { value: true });
var NextWebSocket = /** @class */ (function () {
    function NextWebSocket() {
        this.eventTarget = null;
        this.ws = null;
        this.eventTarget = new cc.EventTarget();
    }
    NextWebSocket.prototype.isOpen = function () {
        return this.ws && this.ws.readyState === WebSocket.OPEN;
    };
    NextWebSocket.prototype.connect = function (serverAddress, token) {
        var _this = this;
        var addr = serverAddress + (token ? "?token=" + token : "");
        this.ws = new WebSocket(addr);
        this.ws.onopen = function (event) {
            cc.log("连接成功");
            _this.eventTarget.emit("ws_open");
        };
        this.ws.onmessage = function (event) {
            // try {
            var data = JSON.parse(event.data);
            cc.log("获取消息");
            cc.log(data);
            if (data.name && data.value) {
                _this.eventTarget.emit(data.name, data.value);
            }
            // } catch{
            //     cc.error("接受消息错误");
            //     cc.error(event.data);
            // }
        };
        this.ws.onclose = function (event) {
            _this.eventTarget.emit("ws_close");
        };
    };
    NextWebSocket.prototype.emit = function (name, value) {
        var data = {
            name: name,
            value: value
        };
        var jsonStr = JSON.stringify(data);
        this.ws.send(jsonStr);
    };
    NextWebSocket.prototype.on = function (name, cb, target) {
        this.eventTarget.on(name, function (event) {
            cb.apply(target, [event.detail]);
        }, target);
    };
    NextWebSocket.prototype.once = function (name, cb, target) {
        this.eventTarget.once(name, function (event) {
            cb.apply(target, event.detail);
        }, target);
    };
    NextWebSocket.prototype.offTarget = function (target) {
        this.eventTarget.targetOff(target);
    };
    return NextWebSocket;
}());
exports.NextWebSocket = NextWebSocket;

cc._RF.pop();