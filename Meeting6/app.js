import Settings from "./settings.js";
import { Cross } from './cross.js';

console.dir( Settings );

const game = new Cross('.app1');
const settings = new Settings('.app1settings', onGameStart);

console.log({ game, settings });
console.log( settings.getRobotName() );

function onGameStart() {
    game.start(); // this = game, arguments = { length: 0 }
}
