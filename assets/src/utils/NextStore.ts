export class NextStore {

    private _user: any;
    public get user() {
        return this._user;
    }
    public set user(user) {
        this._user = user;
    }

    private _room: any;
    public get room() {
        return this._room;
    }
    public set room(room) {
        this._room = room;
    }

    public get token() {
        return this.user ? this.user.token : "";
    }

}