export class NextWebSocket {
    private eventTarget: cc.EventTarget = null;
    private ws: WebSocket = null;
    public constructor() {
        this.eventTarget = new cc.EventTarget();
    }

    public isOpen() {
        return this.ws && this.ws.readyState === WebSocket.OPEN
    }

    public connect(serverAddress: string, token?: string) {
        let addr = serverAddress + (token ? `?token=${token}` : "");
        this.ws = new WebSocket(addr);
        this.ws.onopen = event => {
            cc.log("连接成功");
            this.eventTarget.emit("ws_open");
        };
        this.ws.onmessage = event => {
            // try {
                let data = JSON.parse(event.data);
                cc.log("获取消息");
                cc.log(data);
                if (data.name && data.value) {
                    this.eventTarget.emit(data.name, data.value);
                }
            // } catch{
            //     cc.error("接受消息错误");
            //     cc.error(event.data);
            // }
        };
        this.ws.onclose = event => {
            this.eventTarget.emit("ws_close");
        };
    }

    public emit(name: string, value?: any) {
        let data = {
            name: name,
            value: value
        };
        let jsonStr = JSON.stringify(data);
        this.ws.send(jsonStr);
    }

    public on(name: string, cb: Function, target?: any) {
        this.eventTarget.on(name, (event) => {
            cb.apply(target, [event.detail]);
        }, target);
    }

    public once(name: string, cb: Function, target?: any) {
        this.eventTarget.once(name, (event) => {
            cb.apply(target, event.detail);
        }, target);
    }

    public offTarget(target) {
        this.eventTarget.targetOff(target);
    }
}
