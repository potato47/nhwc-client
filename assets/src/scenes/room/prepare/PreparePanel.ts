import { G } from "../../../G";
import { PrepareSeatLayout } from "./PrepareSeatLayout";

const {ccclass,property} = cc._decorator;

@ccclass
export class PreparePanel extends cc.Component {

    @property(cc.Button)
    private prepareButton: cc.Button = null;
    @property(cc.Button)
    private preparedButton: cc.Button = null;
    @property(PrepareSeatLayout)
    private prepareSeatLayout: PrepareSeatLayout = null;

    protected onLoad() {
        this.addListeners();
    }

    public show() {
        this.node.active = true;
        this.prepareSeatLayout.removeAllUser();
        let seatMap = G.room.getSeatMap();
        for(let i in seatMap)  {
            if(seatMap[i]){
                this.prepareSeatLayout.addUser(seatMap[i]);
            }
        }
    }

    public hide() {
        if(this.node.active){
            this.node.active = false;
            this.removeListeners();
        }
    }

    private onBtnPrepare() {
        this.prepareButton.node.active = false;
        this.preparedButton.node.active = true;
        G.ws.emit("ready");
    }

    private onWsRoom(room) {
        G.room.setRoom(room);
        this.prepareSeatLayout.removeAllUser();
        let seatMap = G.room.getSeatMap();
        for(let i in seatMap)  {
            if(seatMap[i]){
                this.prepareSeatLayout.addUser(seatMap[i]);
            }
        }
    }

    onWsReady(data) {
        G.room.setSeatReady(data.seat,true);
        this.prepareSeatLayout.prepareUser(G.room.getSeatMap()[data.seat].uid)
    }

    private addListeners() {
        this.prepareButton.node.on(cc.Node.EventType.TOUCH_END,this.onBtnPrepare,this);
        G.ws.on("room",this.onWsRoom,this);
        G.ws.on("ready",this.onWsReady,this);
        G.ws.on("startMe", this.hide, this);
        G.ws.on("startOther", this.hide, this);
    }

    private removeListeners() {
        G.ws.offTarget(this);
    }
}