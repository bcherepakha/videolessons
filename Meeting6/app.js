const game = new Cross('.app1');
const settings = new Settings('.app1settings', onGameStart);

console.log({ game });

function onGameStart() {
    game.start();
}
