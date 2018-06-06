const {ccclass, property} = cc._decorator;

@ccclass
export class TopBar extends cc.Component {

    @property(cc.Label)
    public centerLabel:cc.Label = null;
    @property(cc.Label)
    private tickerLabel: cc.Label = null;

    private tickNumber:number = 0;

    private intervalId:number = -1;

    public showMessage(message:string) {
        this.centerLabel.string = message;
    }

    public showTicker(n:number){
        clearInterval(this.intervalId);
        this.tickNumber = n;
        this.tickerLabel.string = this.tickNumber+"";
        this.intervalId = setInterval(()=>{
            this.tickNumber--;
            this.tickerLabel.string = this.tickNumber+"";
            if(this.tickNumber <= 0) {
                clearInterval(this.intervalId);
            }
        },1000);
    }

    public hideTicker() {
        this.tickerLabel.string = "-";
    }

}
