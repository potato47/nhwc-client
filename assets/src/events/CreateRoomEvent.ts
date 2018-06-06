export class CreateRoomEvent extends cc.Event.EventCustom {
    public static readonly NAME = "CreateRoom";
    public gameSum: number;
    public seatSum: number;

    public constructor(seatSum:number,gameSum:number) {
        super(CreateRoomEvent.NAME,true);
        this.seatSum = seatSum;
        this.gameSum = gameSum;
    }
    
}