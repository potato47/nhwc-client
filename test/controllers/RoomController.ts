// import RoomScene from "../views/scenes/RoomScene";
// import { G } from "../G";
// import { RoomModel } from "../models/RoomModel";

// export class RoomController{
//     private fsm:StateMachine = null;
//     private roomScene:RoomScene = null;
//     private model:RoomModel = null;
    

//     // public constructor(roomScene: RoomScene) {
//     //     this.initFsm();
//     //     this.roomScene = roomScene;
//     // }

//     public enterRoom(room) {
//         this.model = new RoomModel();
//         this.model.init(room);
//         cc.director.loadScene("room",(err,scene)=> {
//             if(!err){
//                 this.roomScene = scene.getChildByName("Canvas").getComponent(RoomScene);
//                 this.roomScene.init(this);
//             }else{
//                 cc.error(err);
//             }
//         });
//     }

//     public updateRoom(room) {
        
//     }

//     public showRoomInfo(roomInfo) {
//         this.roomScene.roomInfoLabel.string = `房间号:${roomInfo.rid}`;
//     }

//     public showHint(hint) {
//         this.roomScene.hintLabel.string = hint;
//     }

//     private onDoReady() {
//         this.roomScene.readyButton.string = "已准备";
//     }

//     private onDoStartGameMe() {
        
//     }

//     private onDoStartGameOther(data) {
//         cc.log(data);
//     }

//     private onDoShowAnswer() {

//     }

//     /**
//      * FSM config
//      */
//     private initFsm() {
//         let fsmConfig:FsmConfig = {
//             init: "notReady",
//             data:{
//                 target: this
//             },
//             transitions: [
//                 {
//                     name: "doReady",from: "notReady",to:"ready"
//                 },
//                 {
//                     name: "doStartGameMe",from:"ready",to:"gameMe"
//                 },
//                 {
//                     name: "doStartGameMe",from:"answer",to:"gameMe"
//                 },
//                 {
//                     name: "doStartGameOther",from:"ready",to:"gameOther"
//                 },
//                 {
//                     name: "doStartGameOther",from:"answer",to:"gameOther"
//                 },
//                 {
//                     name: "doShowAnswer",from:"gameMe",to:"answer"
//                 },
//                 {
//                     name:"doShowAnswer",from:"gameOther",to:"answer"
//                 },
//             ],
//             methods:{
//                 onDoReady: ()=>{this.onDoReady.apply(this)},
//                 onDoStartGameMe: (data)=>{this.onDoStartGameMe.apply(this,[data])},
//                 onDoStartGameOther: (data)=>{this.onDoStartGameOther.apply(this,[data])},
//                 onDoShowAnswer: ()=>{this.onDoStartGameOther.apply(this)}
//             }
//         }
//         this.fsm = new StateMachine(fsmConfig);
//     }

//     public doReady() {
//         if(this.fsm.can("doReady")){
//             this.fsm["doReady"]();
//             G.ws.emit("ready");
//         }else{
//             cc.log("不能切换该状态");
//         }
//     }

//     public doStartGameMe(data:any) {
//         if(this.fsm.can("doStartGameMe")){
//             this.fsm["doStartGameMe"](data);
//         }else{
//             cc.log("不能切换该状态");
//         }
//     }

//     public doStartGameOther(data:any) {
//         if(this.fsm.can("doStartGameOther")) {
//             this.fsm["doStartGameOther"](data);
//         }else {
//             cc.log("不能切换该状态");
//         }
//     }

//     public doShowAnswer() {
//         if(this.fsm.can("doShowAnswer")){
//             this.fsm["doShowAnswer"]();
//         }else{
//             cc.log("不能切换该状态");
//         }
//     }

// }