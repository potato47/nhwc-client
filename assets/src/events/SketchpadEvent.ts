export class SketchpadEvent extends cc.Event.EventCustom {

    public static readonly COLOR = "SketchpadColor";
    public static readonly WIDTH = "SketchpadWidth";
    public static readonly CLEAR = "SketchpadClear";
    public hexColor:string;
    public width: number;

    public constructor(type:string) {
        super(type, true);
    }
    
}