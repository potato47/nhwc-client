import { Global } from "../assets/src/G";

// declare class StateMachine{
//     constructor(options:any)
// }

declare class StateMachine{
    state:string
    is(state:string):boolean
    can(transition:string):boolean
    cannot(transition:string):boolean
    allTransitions():Array<string>
    allStates():Array<string>
    constructor(config:FsmConfig)
};

declare type FsmConfig = {
    init : string,
    data : {},
    transitions: Array<FsmTransition>,
    methods:{}
}

declare type FsmTransition = {
    name: string,
    from: string,
    to: string
}
