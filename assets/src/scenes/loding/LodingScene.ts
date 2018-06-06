import { G } from "../../G";
import { GameRoot } from "../GameRoot";
import { NextHttp } from "../../utils/NextHttp";
import { NextWebSocket } from "../../utils/NextWebSocket";
import { RoomModel } from "../../models/RoomModel";
import { UserModel } from "../../models/UserModel";

const {ccclass,property} = cc._decorator;

@ccclass
export class LodingScene extends cc.Component {

    @property(cc.Node)
    private gameRoot:cc.Node = null;

    onLoad() {
        cc.game.addPersistRootNode(this.gameRoot);
        this.initGlobal();
    }

    initGlobal() {
        G.http = new NextHttp();
        G.ws = new NextWebSocket();
        
        G.room = new RoomModel();
        G.user = new UserModel();

        G.gameRoot = this.gameRoot.getComponent(GameRoot);
    }

    start() {
        cc.director.setDisplayStats(false);
        G.gameRoot.showMaskMessage("正在加载资源");
        setTimeout(()=>{
            G.gameRoot.hideMaskMessage();
            G.onLodingSuccess();
        },2000)
    }
}