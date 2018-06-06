import { G } from "../../G";
import { JoinRoomEvent } from "../../events/JoinRoomEvent";
import { JoinRoomPanel } from "./JoinRoomPanel";
import { CreateRoomPanel } from "./CreateRoomPanel";
import { CreateRoomEvent } from "../../events/CreateRoomEvent";

const { ccclass, property } = cc._decorator;

@ccclass
export default class HallScene extends cc.Component {

    @property(cc.Label)
    private usernameLabel: cc.Label = null;
    @property(cc.Sprite)
    private userHeadSprite: cc.Sprite = null;
    @property(cc.Label)
    private messageLabel: cc.Label = null;
    @property(cc.EditBox)
    private enterRoomInputBox: cc.EditBox = null;
    @property(cc.Button)
    private enterRoomButton: cc.Button = null;
    @property(cc.Button)
    private returnButton: cc.Button = null;
    @property(cc.Label)
    private roomInfoLabel: cc.Label = null;

    @property(cc.Button)
    private createRoomButton: cc.Button = null;
    @property(CreateRoomPanel)
    private createRoomPanel: CreateRoomPanel = null;
    @property(cc.Button)
    private joinRoomButton: cc.Button = null;
    @property(JoinRoomPanel)
    private joinRoomPanel: JoinRoomPanel = null;
    @property(cc.Button)
    private matchButton: cc.Button = null;

    protected start() {
        this.usernameLabel.string = G.user.getUsername();
        this.userHeadSprite.spriteFrame = G.user.getUserHead();
        this.addListeners();
        G.ws.emit("hall");
    }

    onBtnCreateRoom() {
        this.createRoomPanel.show();
    }

    onEventCreateRoom(event: CreateRoomEvent) {
        G.gameRoot.showMaskMessage("正在创建房间");
        G.ws.emit("create", { seatSum: event.seatSum, gameSum: event.gameSum });
    }

    onWsCreateRoom(data) {
        G.gameRoot.showMaskMessage("创建房间成功，正在进入房间");
        G.ws.emit("enter", { rid: data.rid });
    }

    onBtnJoinRoom() {
        this.joinRoomPanel.show();
    }

    onEventJoinRoom(event: JoinRoomEvent) {
        G.gameRoot.showMaskMessage("正在进入房间");
        G.ws.emit("enter", { rid: event.roomNum });
    }

    onWsEnterRoom(data) {
        G.gameRoot.hideMaskMessage();
        G.onEnterRoom(data);
    }

    onBtnReturn() {
        G.onHallExit();
    }

    onBtnEnterRoom() {
        let rid = +this.enterRoomInputBox.string;
        G.ws.emit("enter", { rid: rid });
    }

    onBtnMatchRoom() {
        G.ws.emit("match");
    }

    onWsHallMessage(data: string) {
        this.messageLabel.string = data;
    }

    // onWsHallInfo(data) {
    //     this.roomInfoLabel.string = "";
    //     data.roomlist.forEach((room, i) => {
    //         this.roomInfoLabel.string += `${room.rid} (${room.num}/${room.max})` + "\n";
    //     });
    // }

    onWsError(data) {
        G.gameRoot.hideMaskMessage();
        G.gameRoot.showTip(data);
    }

    onDestroy() {
        this.removeListeners();
    }

    addListeners() {
        this.joinRoomButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnJoinRoom, this);
        this.createRoomButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnCreateRoom, this);
        this.matchButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnMatchRoom, this);
        G.on(JoinRoomEvent.NAME, this.onEventJoinRoom, this);
        G.on(CreateRoomEvent.NAME, this.onEventCreateRoom, this);

        this.returnButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnReturn, this);
        this.enterRoomButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnEnterRoom, this);
        G.ws.on("message", this.onWsHallMessage, this);
        // G.ws.on("hall", this.onWsHallInfo, this);
        G.ws.on("create", this.onWsCreateRoom, this);
        G.ws.on("enter", this.onWsEnterRoom, this);
        G.ws.on("error", this.onWsError, this);
    }

    removeListeners() {
        G.ws.offTarget(this);
    }

}
