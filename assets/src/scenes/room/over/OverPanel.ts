import { G } from "../../../G";

const {ccclass,property} = cc._decorator;

@ccclass
export class OverPanel extends cc.Component {

    @property(cc.Label)
    private resultLabel: cc.Label = null;

    public show() {
        this.node.active = true;
        let users = [];
        let seatMap = G.room.getSeatMap();
        for(let i in seatMap){
            if(seatMap[i]){
                users.push(seatMap[i]);
            }
        }
        users.sort((u1,u2)=>{
            if(u1.score >= u2.score) {
                return -1
            }else {
                return 1;
            }
        });
        this.resultLabel.string = "";
        for(let i = 0; i < users.length; i++) {
            this.resultLabel.string += `${i}【${users[i].username}】 ${users[i].score}分${"\n"}`;
        }
    }

    public hide() {
        if(this.node.active) {
            this.node.active = false;
        }
    }
}