import { G } from "../G";

const { ccclass, property } = cc._decorator;

@ccclass
export class UserModel extends cc.Component {
  private user: any = {};
  private username: string = "";
  private head: string = "0";
  private uid: string = "";
  private rid: number = 0;

  public setUser(userData) {
    this.user = userData;
  }

  public getUsername(): string {
    return this.user.username;
  }

  public getUserHead(): cc.SpriteFrame {
    return G.gameRoot.getHeadSprite(this.user.head);
  }

  public setScore(score: number) {
    this.user.score = score;
  }

  public getScore(): number {
    return this.user.score;
  }

  public getUid(): string {
    return this.user.uid;
  }

  public getSeat(): number {
    return this.user.seat;
  }
}
