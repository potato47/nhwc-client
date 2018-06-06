import { NextStore } from "./utils/NextStore";
import { NextHttp } from "./utils/NextHttp";
import { NextWebSocket } from "./utils/NextWebSocket";
import { UserModel } from "./models/UserModel";
import { RoomModel } from "./models/RoomModel";
import { GameRoot } from "./scenes/GameRoot";

class Global extends cc.EventTarget{

    public static readonly Instance:Global = new Global();

    public gameRoot:GameRoot = null;
    
    public http: NextHttp = null;
    public ws: NextWebSocket = null;

    public user: UserModel = null;
    public room: RoomModel = null;

    public setGameRoot(gameRoot:GameRoot) {
        this.gameRoot = gameRoot;
    }

    public onLodingSuccess() {
        cc.director.loadScene("login");
    }

    public onLoginSuccess(user) {
        cc.log(user);
        this.user.setUser(user);
        cc.director.loadScene("hall");
    }

    public onEnterRegister() {
        cc.director.loadScene("register");
    }

    public onHallExit() {
        cc.director.loadScene("login");
    }

    public onEnterRoom(data) {
        this.room.setRoom(data);
        cc.director.loadScene("room");
    }

    public onExitRoom() {
        cc.director.loadScene("hall");
    }

}

export const G = Global.Instance;