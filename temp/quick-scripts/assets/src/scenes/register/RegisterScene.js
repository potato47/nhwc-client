(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/src/scenes/register/RegisterScene.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '15d7cJ0n7ZIFqvq8XoeSRtL', 'RegisterScene', __filename);
// src/components/register/RegisterScene.ts

Object.defineProperty(exports, "__esModule", { value: true });
var G_1 = require("../../G");
var HeadSelect_1 = require("./HeadSelect");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RegisterScene = /** @class */ (function (_super) {
    __extends(RegisterScene, _super);
    function RegisterScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.headSelect = null;
        _this.usernameInput = null;
        _this.pwdInput = null;
        _this.pwdConfirmInput = null;
        _this.registerButton = null;
        _this.returnLoginButton = null;
        return _this;
    }
    RegisterScene.prototype.start = function () {
        this.addListeners();
    };
    RegisterScene.prototype.onBtnRegister = function () {
        var username = this.usernameInput.string;
        var pwd1 = this.pwdInput.string;
        var pwd2 = this.pwdConfirmInput.string;
        if (username === "" || pwd1 === "" || pwd2 === "") {
            G_1.G.gameRoot.showTip("用户名和密码不能为空！");
        }
        else if (pwd1 !== pwd2) {
            G_1.G.gameRoot.showTip("两次密码不同！");
        }
        else {
            var head = this.headSelect.getHead();
            var params = {
                username: username,
                password: pwd1,
                head: head
            };
            G_1.G.ws.emit("register", params);
        }
    };
    RegisterScene.prototype.onWsRegisterSuccess = function () {
        G_1.G.gameRoot.showTip("注册成功");
    };
    RegisterScene.prototype.onBtnReturnLogin = function () {
        cc.director.loadScene("login");
    };
    RegisterScene.prototype.addListeners = function () {
        this.registerButton.on(cc.Node.EventType.TOUCH_END, this.onBtnRegister, this);
        this.returnLoginButton.on(cc.Node.EventType.TOUCH_END, this.onBtnReturnLogin, this);
        G_1.G.ws.on("register", this.onWsRegisterSuccess, this);
    };
    __decorate([
        property(HeadSelect_1.HeadSelect)
    ], RegisterScene.prototype, "headSelect", void 0);
    __decorate([
        property(cc.EditBox)
    ], RegisterScene.prototype, "usernameInput", void 0);
    __decorate([
        property(cc.EditBox)
    ], RegisterScene.prototype, "pwdInput", void 0);
    __decorate([
        property(cc.EditBox)
    ], RegisterScene.prototype, "pwdConfirmInput", void 0);
    __decorate([
        property(cc.Node)
    ], RegisterScene.prototype, "registerButton", void 0);
    __decorate([
        property(cc.Node)
    ], RegisterScene.prototype, "returnLoginButton", void 0);
    RegisterScene = __decorate([
        ccclass
    ], RegisterScene);
    return RegisterScene;
}(cc.Component));
exports.RegisterScene = RegisterScene;

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
        //# sourceMappingURL=RegisterScene.js.map
        