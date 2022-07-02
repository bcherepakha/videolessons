import Settings from "./settings.js";
import { Cross } from './cross.js';
import { Robot } from './robot.js';

console.dir( Settings );

const game = new Cross('.app1');
const settings = new Settings('.app1settings', onGameStart);

console.log({ game, settings });
onGameStart();

function onGameStart() {
    game.start(); // this = game, arguments = { length: 0 }
    game.resetMoves();

    console.log('game started', settings.robotName);

    if (['x', 'computer'].includes(settings.robotName)) {
        const robot = new Robot(Cross.X, game);
        const moveX = function () {
            if (game.state.currentUser === Cross.X) {
                const idx = robot.calcStepX();

                if (idx !== null) {
                    game.step(idx);
                } else {
                    throw new Error(`${robot.name} can not calc the step`);
                }
            }
        };

        console.log('add robot', robot);

        game.setNextMove(moveX);
    }

    if (['o', 'computer'].includes(settings.robotName)) {
        const robot = new Robot(Cross.O, game);
        const moveO = function () {
            if (game.state.currentUser === Cross.O) {
                const idx = robot.calcStepO();

                game.step(idx);
            }
        };

        console.log('add robot', robot);

        game.setNextMove(moveO);
    }

    game.applyMoves();
}
