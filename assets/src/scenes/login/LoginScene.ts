import { G } from "../../G";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoginScene extends cc.Component {

    @property(cc.EditBox)
    private usernameInputBox: cc.EditBox = null;
    @property(cc.EditBox)
    private passwordInputBox: cc.EditBox = null;
    @property(cc.Button)
    private loginButton: cc.Button = null;
    @property(cc.Button)
    private registerButton: cc.Button = null;

    public start() {
        this.addListeners();
        if(!G.ws.isOpen()) {
            G.gameRoot.showMaskMessage("正在连接服务器");
            G.ws.connect("ws://127.0.0.1:1323/ws");
            // G.ws.connect("ws://192.168.2.102:1323/ws");
            // G.ws.connect("ws://192.168.199.237:1323/ws");
            // G.ws.connect("ws://119.29.40.244:1323/ws");
        }
    }

    public addListeners() {
        this.loginButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnLogin, this);
        this.registerButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnRegister, this);
        G.ws.on("ws_open",this.onWsOpenSuccess,this);
        G.ws.on("login",this.onWsLoginSuccess,this);
        G.ws.on("error",this.onWsError,this);
    }

    onBtnLogin() {
        G.gameRoot.showMaskMessage("正在登陆");
        let username = this.usernameInputBox.string;
        let password = this.passwordInputBox.string;
        let params = {
            username: username,
            password: password
        }
        G.ws.emit("login",params);
    }

    onBtnRegister() {
        G.onEnterRegister();
    }

    onWsOpenSuccess(data) {
        G.gameRoot.hideMaskMessage();
    }

    onWsLoginSuccess(data) {
        G.gameRoot.hideMaskMessage();
        G.onLoginSuccess(data);
    }

    onWsError(err) {
        G.gameRoot.hideMaskMessage();
        G.gameRoot.showTip(err.message);
        // G.gameRoot.showMaskMessage(err.message,1000);
    }

    onBtnTest1(){
        G.gameRoot.showMaskMessage("正在登陆");
        let params = {
            username: "001",
            password: "001"
        }
        G.ws.emit("login",params);
    }
    onBtnTest2() {
        G.gameRoot.showMaskMessage("正在登陆");
        let params = {
            username: "002",
            password: "002"
        }
        G.ws.emit("login",params);
    }
    onBtnTest3() {
        G.gameRoot.showMaskMessage("正在登陆");
        let params = {
            username: "003",
            password: "003"
        }
        G.ws.emit("login",params);
    }
    onBtnTest4() {
        G.gameRoot.showMaskMessage("正在登陆");
        let params = {
            username: "004",
            password: "004"
        }
        G.ws.emit("login",params);
    }

}
