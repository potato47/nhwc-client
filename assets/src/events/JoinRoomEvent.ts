export class JoinRoomEvent extends cc.Event.EventCustom {
    public static readonly NAME = "JoinRoom";
    public roomNum:number;

    public constructor(roomNum:number) {
        super(JoinRoomEvent.NAME,true);
        this.roomNum = roomNum;
    }
    
}