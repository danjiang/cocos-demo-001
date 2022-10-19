
import { _decorator, Component, Node, CCInteger, Label } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Game
 * DateTime = Wed Oct 12 2022 21:34:29 GMT+0800 (中国标准时间)
 * Author = danthought
 * FileBasename = Game.ts
 * FileBasenameNoExtension = Game
 * URL = db://assets/Game.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */
 
@ccclass('Game')
export class Game extends Component {
    job: string = '法师';

    @property({ type: CCInteger })
    hp: number = 10;

    @property({ type: Label })
    label: Label = null;

    start () {
        this.label.string = 'Game Start';
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
 */
