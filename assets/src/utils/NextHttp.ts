export class NextHttp {
    private serverAddress = "https://127.0.0.1:1323/";
    private action: IApiMethod;
    private api: string;
    private apiParams: IApiParams;
    private token: string = '';
    private successCallback: IApiSuccessFunction;
    private errorCallback: IApiErrorFunction;
    private metaCallback: IApiMetaFunction;

    public constructor(serverAddress?:string) {
        if(serverAddress){
            this.serverAddress = serverAddress;
        }
    }

    public updateToken(token:string) {
        this.token = token;
    }

    public get(name: string, params: IApiParams, successCb?: IApiSuccessFunction, errorCb?: IApiErrorFunction){
        this.action = 'get';
        this.api = name;
        this.apiParams = params;
        this.successCallback = successCb;
        this.errorCallback = errorCb;
        this.send();
    }

    public post(name: string, params: IApiParams, successCb?: IApiSuccessFunction, errorCb?: IApiErrorFunction){
        this.action = 'post';
        this.api = name;
        this.apiParams = params;
        this.successCallback = successCb;
        this.errorCallback = errorCb;
        this.send();
    }

    private dealWithMeta(meta: Object) {

    }

    private send() {
        // 参数检查
        if (!this.action) throw new Error('Api action is not given!');
        if (!this.api) throw new Error('Api name is not given!');
        let action = this.action;
        let api = this.api;
        let params = this.apiParams || {};
        let token = this.token;
        let url = this.serverAddress + api;
        if (token && !params.hasOwnProperty('token')) {
            // params["_token"] = token;
        }

        // 初始化XMLHttpRequest
        let xmlHttp = new XMLHttpRequest();
        let append = '';

        for (let key in params) {
            if (params.hasOwnProperty(key)) {
                if (append !== '') {
                    append += '&';
                }
                let param = params[key];
                param = typeof param === "object" ? JSON.stringify(param) : param;
                // URL发送数据时，+号和&号会丢失，因此应在发送前转换
                if (typeof param === "string") {
                    param = param.replace(/\+/g, '%2B');
                    param = param.replace(/&/g, '%26');
                    param = encodeURIComponent(param);
                }
                append += key + '=' + param;
            }
        }

        if (action === 'post') {
            xmlHttp.open(action, url);
        } else {
            if (append !== '') {
                xmlHttp.open(action, url + '?' + append);
            } else {
                xmlHttp.open(action, url);
            }
        }
        xmlHttp.setRequestHeader('Authorization', 'Bearer ' + token);
        xmlHttp.onreadystatechange = () => {
            if (xmlHttp.readyState === 4) {
                if (xmlHttp.status === 200) {
                    let strData;
                    // 若有返回结果
                    if (xmlHttp.responseText.length >= 0) {
                        try {
                            strData = JSON.parse(xmlHttp.responseText);
                        } catch (e) {
                            cc.log('Response data is not in JSON format!');
                            // Helper.log(xmlHttp.responseText);
                        }
                        // 若成功解析返回的数据
                        if (strData) {
                            // data: api返回数据的主要内容
                            // meta: api返回的元数据，比如游戏状态改变，分页信息等等
                            // error: api返回的错误信息
                            let data, meta, error;
                            if (strData.hasOwnProperty('meta') && strData['meta'] !== null) {
                                meta = strData['meta'];
                                this.dealWithMeta(meta);
                            }
                            if (strData.hasOwnProperty('data') && strData['data'] !== null) {
                                if (this.successCallback) {
                                    this.successCallback(strData['data']);
                                }
                            }
                            if (strData.hasOwnProperty('error') && strData['error'] !== null) {
                                error = strData['error'];
                                if (this.errorCallback) {
                                    this.errorCallback(error);
                                } else {
                                    cc.log('Unhandled Api Error!');
                                }
                            }
                        } else {
                            cc.log('Server Error!');
                        }
                    } else {
                        cc.log('Can\'t get the response data.');
                        if (this.errorCallback) {
                            this.errorCallback();
                        }
                    }
                } else { //其它http状态码处理
                    cc.log(xmlHttp.responseText);
                }
            } else { //其它request状态处理
            }
        };
        if (action === 'post') {
            xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xmlHttp.send(append);
        } else {
            xmlHttp.send();
        }
    }

}