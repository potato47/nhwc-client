import { G } from "../../G";
import { Desk } from "./desk/Desk";
import { Sketchpad } from "../share/Sketchpad";
import { TopBar } from "./topbar/TopBar";
import { PreparePanel } from "./prepare/PreparePanel";
import { MessagePanel } from "./message/MessagePanel";
import { ToolPanel } from "./tool/ToolPanel";
import { SketchpadEvent } from "../../events/SketchpadEvent";
import { OverPanel } from "./over/OverPanel";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RoomScene extends cc.Component {

    @property(TopBar)
    private topBar: TopBar = null;
    @property(PreparePanel)
    private preparePanel: PreparePanel = null;
    @property(cc.Node)
    private board: cc.Node = null;
    @property(Desk)
    private desk: Desk = null;
    @property(MessagePanel)
    private messagePanel = null;
    @property(ToolPanel)
    private toolPanel: ToolPanel = null;
    @property(OverPanel)
    private overPanel: OverPanel = null;
    @property(cc.Prefab)
    private sketchpadPrefab: cc.Prefab = null;

    private sketchpad: Sketchpad = null;

    private intervalId: number;

    start() {
        this.topBar.showMessage("房间号：" + G.room.getRid());
        let sketchpadNode = cc.instantiate(this.sketchpadPrefab);
        this.board.addChild(sketchpadNode);
        this.sketchpad = sketchpadNode.getComponent(Sketchpad);
        this.preparePanel.show();
        this.messagePanel.show();
        this.toolPanel.hide();
        this.overPanel.hide();
        this.addListeners();

    }

    // 同步绘画信息
    syncPath() {
        if (this.sketchpad.isDrawing && this.sketchpad.path.length > 0) {
            let path = this.sketchpad.popPath();
            G.ws.emit("draw", {
                type: "path",
                path: path,
            });
        }
    }

    onGameStart() {
        this.desk.show();
        this.desk.updateSeatsInfo(G.room.getSeatMap());
    }

    onWsStartMe(data) {
        if (data.gameNum === 1) {
            this.onGameStart();
        }
        this.sketchpad.clear();
        this.desk.hideAnswerButton();
        this.topBar.showMessage(`你画:${data.word}`);
        this.topBar.showTicker(G.room.getGameTime());
        this.sketchpad.enableDraw();
        this.toolPanel.show();
        this.messagePanel.hide();
        this.desk.hideAllTip();
    }

    onWsStartOther(data) {
        if (data.gameNum === 1) {
            this.onGameStart();
        }
        this.sketchpad.clear();
        this.desk.showAnswerButton();
        this.topBar.showMessage(`提示:${data.hint}`);
        this.topBar.showTicker(G.room.getGameTime());
        this.sketchpad.disableDraw();
        this.toolPanel.hide();
        this.messagePanel.show();
        this.desk.hideAllTip();
    }

    onWsDraw(data) {
        if (data.type === "path") {
            this.sketchpad.drawByPath(data.path);
        } else if (data.type === "color") {
            this.sketchpad.setPenColor(data.color);
        } else if (data.type === "width") {
            this.sketchpad.setLineWidth(data.width);
        } else if (data.type === "clear") {
            this.sketchpad.clear();
        }
    }

    onWsAnswer(data) {
        if (data.isRight) {
            for (let i in data.scores) {
                G.room.setScoreBySeat(+i, data.scores[i]);
                if (G.room.getUidBySeat(+i) === G.user.getUid()) {
                    this.desk.hideAnswerButton();
                }
                if(+i !== G.room.getPaintSeat() ){
                    this.desk.answerRight(+i,data.scores[i]);
                }
            }
            this.desk.updateSeatsInfo(G.room.getSeatMap());
        } else {
            this.desk.answerWrong(data.seat);
        }
    }

    onWsResult(data) {
        this.desk.hideAnswerButton();
        this.topBar.showMessage("答案:" + data);
        this.topBar.showTicker(G.room.getResultTime());
        this.sketchpad.disableDraw();
        this.messagePanel.show();
        this.toolPanel.hide();
    }

    onWsOver(data) {
        this.desk.hideAnswerButton();
        this.overPanel.show();
        this.topBar.showMessage("游戏结束，赶紧走吧");
        setTimeout(() => {
            G.onExitRoom();
        }, 10000);
    }

    onWsExit(data) {
        this.desk.leaveUser(data);
    }

    onSketchpadColor(event: SketchpadEvent) {
        this.sketchpad.setPenColor(event.hexColor);
        G.ws.emit("draw", {
            type: "color",
            color: event.hexColor,
        });
    }

    onSketchpadWidth(event: SketchpadEvent) {
        this.sketchpad.setLineWidth(event.width);
        G.ws.emit("draw", {
            type: "width",
            width: event.width,
        });
    }

    onSketchpadClear(event: SketchpadEvent) {
        this.sketchpad.clear();
        G.ws.emit("draw", {
            type: "clear",
        });
    }


    addListeners() {
        // G.ws.on("message", this.onWsMessage, this);
        // G.ws.on("room", this.onWsRoomInfo, this);
        G.ws.on("draw", this.onWsDraw, this);
        // G.ws.on("ready", this.onWsReady, this);
        G.ws.on("startMe", this.onWsStartMe, this);
        G.ws.on("startOther", this.onWsStartOther, this);
        G.ws.on("answer", this.onWsAnswer, this);
        G.ws.on("result", this.onWsResult, this);
        G.ws.on("over", this.onWsOver, this);
        // G.ws.on("hint", this.onWsHint, this);
        // G.ws.on("tick", this.onWsTicker, this);
        // G.ws.on("score", this.onWsScore, this);
        G.ws.on("exit", this.onWsExit, this);
        G.on(SketchpadEvent.COLOR, this.onSketchpadColor, this);
        G.on(SketchpadEvent.WIDTH, this.onSketchpadWidth, this);
        G.on(SketchpadEvent.CLEAR, this.onSketchpadClear, this);
        this.intervalId = setInterval(() => {
            this.syncPath();
        }, 200);
    }

    removeListeners() {
        clearInterval(this.intervalId);
        G.ws.offTarget(this);
        G.targetOff(this);
    }

    onDestroy() {
        this.removeListeners();
    }

}
