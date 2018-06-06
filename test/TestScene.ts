// import { G } from "./G";

// const { ccclass, property } = cc._decorator;

// @ccclass
// export default class NewClass extends cc.Component {

//     @property(cc.Label)
//     messageLabel: cc.Label = null;
//     @property(cc.EditBox)
//     messageInputBox: cc.EditBox = null;
//     @property(cc.EditBox)
//     connectInputBox: cc.EditBox = null;
//     @property(cc.Button)
//     connectButton: cc.Button = null;
//     @property(cc.Button)
//     messageButton: cc.Button = null;

//     @property(cc.EditBox)
//     usernameInputBox: cc.EditBox = null;
//     @property(cc.EditBox)
//     passwordInputBox: cc.EditBox = null;
//     @property(cc.Button)
//     loginButton: cc.Button = null;

//     @property(cc.EditBox)
//     getInputBox: cc.EditBox = null;
//     @property(cc.Button)
//     getButton: cc.Button = null;

//     private ws: WebSocket = null;

//     start() {
//         this.connectButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnConnect, this);
//         this.messageButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnMessage, this);
//         this.loginButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnLogin, this);
//         this.getButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnGet, this);
//     }

//     connectRoom(roomId: number) {
//         this.ws = new WebSocket("ws://localhost:1323/ws/" + roomId+"?token="+G.getToken());

//         this.ws.onopen = event => {
//             this.pushMessage(`连接房间 ${roomId}.`);
//         };
//         this.ws.onmessage = event => {
//             this.pushMessage("接收:\n" + event.data);
//         };
//         this.ws.onclose = event => {
//             this.pushMessage("WS关闭.");
//         };
//     }

//     onBtnLogin() {
//         let username = this.usernameInputBox.string;
//         let password = this.passwordInputBox.string;
//         let params = {
//             username: username,
//             password: password
//         }
//         let successCb = (data) => {
//             G.setUser(data.user);
//             this.usernameInputBox.node.active = false;
//             this.passwordInputBox.node.active = false;
//             this.loginButton.node.active = false;
//             this.pushMessage("登录成功")
//         }
//         let errorCb = (err) => {
//             cc.error(err);
//         }
//         Api.http("post", "login",params,successCb,errorCb);
//     }

//     onBtnConnect() {
//         let inputStr = this.connectInputBox.string;
//         this.connectRoom(+inputStr);
//         this.pushMessage("connencting room...");
//     }

//     onBtnMessage() {
//         if (this.ws.readyState === WebSocket.OPEN) {
//             let inputStr = this.messageInputBox.string;
//             this.ws.send(inputStr);
//             this.pushMessage("发送:\n" + inputStr)
//         } else {
//             this.pushMessage("ws没有连接...");
//         }
//     }

//     onBtnGet() {
//         let param = this.getInputBox.string;
//         let params = {
//             param : param
//         }
//         let successCb = (data) => {
//             this.pushMessage("获取:\n"+data.message);
//         }
//         let errorCb = (err) => {
//             cc.error(err);
//         }
//         Api.http("get", "api/getbyparam",params,successCb,errorCb);
//     }

//     pushMessage(newMessage: string) {
//         this.messageLabel.string += '\n' + newMessage;
//     }
// }
