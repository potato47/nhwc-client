import { PrepareSeat } from "./PrepareSeat";

const {ccclass,property} = cc._decorator;

@ccclass
export class PrepareSeatLayout extends cc.Component {
    
    @property(cc.Prefab)
    private prepareSeatPrefab: cc.Prefab = null;

    private seatMap = {};

    public addUser(user) {
        let seatNode = cc.instantiate(this.prepareSeatPrefab);
        this.node.addChild(seatNode);
        let prepareSeat:PrepareSeat = seatNode.getComponent(PrepareSeat);
        prepareSeat.init(user);
        if(user.isReady) {
            prepareSeat.prepare();
        }
        this.seatMap[user.uid] = prepareSeat;
    }

    public leaveUser(uid) {
        this.seatMap[uid].node.destroy();
    }

    public prepareUser(uid) {
        this.seatMap[uid].prepare();
    }

    public removeAllUser() {
        this.seatMap = {};
        this.node.removeAllChildren();
    }
}