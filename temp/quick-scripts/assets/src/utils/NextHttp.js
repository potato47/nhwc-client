(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/src/utils/NextHttp.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'a0cafD+/9JBOo37YYc1vNvT', 'NextHttp', __filename);
// src/utils/NextHttp.ts

Object.defineProperty(exports, "__esModule", { value: true });
var NextHttp = /** @class */ (function () {
    function NextHttp(serverAddress) {
        this.serverAddress = "https://127.0.0.1:1323/";
        this.token = '';
        if (serverAddress) {
            this.serverAddress = serverAddress;
        }
    }
    NextHttp.prototype.updateToken = function (token) {
        this.token = token;
    };
    NextHttp.prototype.get = function (name, params, successCb, errorCb) {
        this.action = 'get';
        this.api = name;
        this.apiParams = params;
        this.successCallback = successCb;
        this.errorCallback = errorCb;
        this.send();
    };
    NextHttp.prototype.post = function (name, params, successCb, errorCb) {
        this.action = 'post';
        this.api = name;
        this.apiParams = params;
        this.successCallback = successCb;
        this.errorCallback = errorCb;
        this.send();
    };
    NextHttp.prototype.dealWithMeta = function (meta) {
    };
    NextHttp.prototype.send = function () {
        var _this = this;
        // 参数检查
        if (!this.action)
            throw new Error('Api action is not given!');
        if (!this.api)
            throw new Error('Api name is not given!');
        var action = this.action;
        var api = this.api;
        var params = this.apiParams || {};
        var token = this.token;
        var url = this.serverAddress + api;
        if (token && !params.hasOwnProperty('token')) {
            // params["_token"] = token;
        }
        // 初始化XMLHttpRequest
        var xmlHttp = new XMLHttpRequest();
        var append = '';
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                if (append !== '') {
                    append += '&';
                }
                var param = params[key];
                param = typeof param === "object" ? JSON.stringify(param) : param;
                // URL发送数据时，+号和&号会丢失，因此应在发送前转换
                if (typeof param === "string") {
                    param = param.replace(/\+/g, '%2B');
                    param = param.replace(/&/g, '%26');
                    param = encodeURIComponent(param);
                }
                append += key + '=' + param;
            }
        }
        if (action === 'post') {
            xmlHttp.open(action, url);
        }
        else {
            if (append !== '') {
                xmlHttp.open(action, url + '?' + append);
            }
            else {
                xmlHttp.open(action, url);
            }
        }
        xmlHttp.setRequestHeader('Authorization', 'Bearer ' + token);
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4) {
                if (xmlHttp.status === 200) {
                    var strData = void 0;
                    // 若有返回结果
                    if (xmlHttp.responseText.length >= 0) {
                        try {
                            strData = JSON.parse(xmlHttp.responseText);
                        }
                        catch (e) {
                            cc.log('Response data is not in JSON format!');
                            // Helper.log(xmlHttp.responseText);
                        }
                        // 若成功解析返回的数据
                        if (strData) {
                            // data: api返回数据的主要内容
                            // meta: api返回的元数据，比如游戏状态改变，分页信息等等
                            // error: api返回的错误信息
                            var data = void 0, meta = void 0, error = void 0;
                            if (strData.hasOwnProperty('meta') && strData['meta'] !== null) {
                                meta = strData['meta'];
                                _this.dealWithMeta(meta);
                            }
                            if (strData.hasOwnProperty('data') && strData['data'] !== null) {
                                if (_this.successCallback) {
                                    _this.successCallback(strData['data']);
                                }
                            }
                            if (strData.hasOwnProperty('error') && strData['error'] !== null) {
                                error = strData['error'];
                                if (_this.errorCallback) {
                                    _this.errorCallback(error);
                                }
                                else {
                                    cc.log('Unhandled Api Error!');
                                }
                            }
                        }
                        else {
                            cc.log('Server Error!');
                        }
                    }
                    else {
                        cc.log('Can\'t get the response data.');
                        if (_this.errorCallback) {
                            _this.errorCallback();
                        }
                    }
                }
                else {
                    cc.log(xmlHttp.responseText);
                }
            }
            else {
            }
        };
        if (action === 'post') {
            xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xmlHttp.send(append);
        }
        else {
            xmlHttp.send();
        }
    };
    return NextHttp;
}());
exports.NextHttp = NextHttp;

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
        //# sourceMappingURL=NextHttp.js.map
        