let robot;
const settings = new Settings();
const game = new CrossGame({
    selector: '.cross'
});

settings.eventSource.addEventListener('submit', () => {
    if (robot) {
        robot.destroy();
        robot = null;
    }

    const { robotName } = settings.getData();

    if (robotName !== 'human') {
        robot = new CrossGameRobot({ robotName, game });
    }

    game.start();
});

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

console.log( game );
