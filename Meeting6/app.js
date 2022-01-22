const robots = [];
withStepsSpy(CrossGame);
const settings = new Settings();
const game = new CrossGame({
    selector: '.cross'
});

settings.eventSource.addEventListener('submit', startGame);

game.eventSource.addEventListener('endgame', function() {
    let message = '';

    if (game.status === CrossGame.GAME_STANDOFF) {
        message = 'Ничья';
    } else if (game.status === CrossGame.GAME_WIN) {
        const winner = game.currentUser === CrossGame.X ? 'крестики' : 'нолики';

        message = `Выиграли ${winner}`;
    }

    if (message) {
        alert(message);
    }
});

startGame();

function startGame() {
    if (robots.length) {
        robots.forEach(robot => robot.destroy());
        robots.length = 0;
    }

    const { robotName } = settings.getData();

    if (robotName !== 'human' && [CrossGame.X, CrossGame.O].includes(robotName)) {
        robots.push( new CrossGameRobot({ robotName, game }) );
    }

    if (robotName === 'computer') {
        robots.push(
            new CrossGameRobot({ robotName: CrossGame.X, game }),
            new CrossGameRobot({ robotName: CrossGame.O, game })
        )
    }

    game.start();
}
