import { G } from "../../G";
import { HeadSelect } from "./HeadSelect";

const {ccclass, property} = cc._decorator;

@ccclass
export class RegisterScene extends cc.Component {

    @property(HeadSelect)
    private headSelect: HeadSelect = null;
    @property(cc.EditBox)
    private usernameInput: cc.EditBox = null;
    @property(cc.EditBox)
    private pwdInput: cc.EditBox = null;
    @property(cc.EditBox)
    private pwdConfirmInput: cc.EditBox = null;
    @property(cc.Node)
    private registerButton: cc.Node = null;
    @property(cc.Node)
    private returnLoginButton: cc.Node = null;

    start() {
        this.addListeners();
    }

    onBtnRegister() {
        let username = this.usernameInput.string;
        let pwd1 = this.pwdInput.string;
        let pwd2 = this.pwdConfirmInput.string;
        if (username === "" || pwd1 === "" || pwd2 === "") {
            G.gameRoot.showTip("用户名和密码不能为空！");
        } else if (pwd1 !== pwd2) {
            G.gameRoot.showTip("两次密码不同！");
        } else {
            let head = this.headSelect.getHead();
            let params = {
                username: username,
                password: pwd1,
                head: head
            }
            G.ws.emit("register",params);
        }
    }

    private onWsRegisterSuccess() {
        G.gameRoot.showTip("注册成功");
    }

    private onBtnReturnLogin() {
        cc.director.loadScene("login");
    }

    private addListeners() {
        this.registerButton.on(cc.Node.EventType.TOUCH_END, this.onBtnRegister, this);
        this.returnLoginButton.on(cc.Node.EventType.TOUCH_END, this.onBtnReturnLogin, this);
        G.ws.on("register", this.onWsRegisterSuccess, this);
    }

}