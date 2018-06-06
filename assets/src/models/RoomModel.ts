const { ccclass, property } = cc._decorator;

@ccclass
export class RoomModel extends cc.Component {
    private room: any = {};

    public init(roomData) {
        this.room = roomData;
    }

    setRoom(room) {
        this.room = room;
    }

    getRoom() {
        return this.room;
    }

    getSeatMap() {
        return this.room.seatMap;
    }

    getUidBySeat(seat): string {
        return this.room.seatMap[seat].uid;
    }

    setScoreBySeat(seat: number, score: number) {
        this.room.seatMap[seat].score = score;
    }

    getScoreBySeat(seat: number): number {
        return this.room.seatMap[seat].score;
    }

    setSeatReady(seat: number, isReady: boolean) {
        this.room.seatMap[seat].isReady = isReady;
    }

    public getRid(): number {
        return this.room.rid;
    }

    public getHint(): string {
        return this.room.hint;
    }

    public getGameTime(): number {
        return this.room.gameTime;
    }

    public getResultTime(): number {
        return this.room.resultTime;
    }

    public getPaintSeat(): number {
        return this.room.paint;
    }
}