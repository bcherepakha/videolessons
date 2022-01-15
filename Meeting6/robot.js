class CrossGameRobot {
    constructor(props) {
        this.props = props;

        this.onStep = this.onStep.bind(this);

        this.props.game.eventSource.addEventListener('user-change', this.onStep);
        this.props.game.eventSource.addEventListener('start', this.onStep);
    }

    destroy() {
        this.props.game.eventSource.removeEventListener('user-change', this.onStep);
        this.props.game.eventSource.removeEventListener('start', this.onStep);
    }

    onStep(e) {
        const { robotName, game } = this.props;
        const { currentUser } = game;

        if (currentUser === robotName) {
            game.blockStep(true);

            const { cellNumber, rowNumber } = this.createStep();

            game.blockStep(false);
            game.step(cellNumber, rowNumber);
        }
    }

    getWinLine(symbol) {
        const lines = this.props.game.getLines();
        const winLine = lines.find(line => {
            return line.data.includes(CrossGame.EMPTY)
                && line.data.filter(s => s === symbol).length === 2;
        });

        return winLine;
    }

    finishLine(line) {
        const emtyIndex = line.data.findIndex(s => s === CrossGame.EMPTY);

        if (line.type === CrossGame.ROW) {
            return {
                cellNumber: emtyIndex,
                rowNumber: line.index,
            };
        }

        if (line.type === CrossGame.COLUMN) {
            return {
                cellNumber: line.index,
                rowNumber: emtyIndex,
            };
        }

        if (line.type === CrossGame.DIAGONAL && line.index === 0) {
            return {
                cellNumber: emtyIndex,
                rowNumber: emtyIndex,
            };
        }

        return {
            cellNumber: 2 - emtyIndex,
            rowNumber: emtyIndex,
        }
    }

    randomStep() {
        const { game } = this.props;
        let lines = [];

        game.board.forEach((data, index) => {
            lines.push({
                type: CrossGame.ROW,
                index,
                data
            });
        });

        lines = lines.filter(line => line.data.includes(CrossGame.EMPTY));

        const randomLine = lines[Math.floor(Math.random()*lines.length)];
        const emptyIndex = randomLine.data.findIndex(s => s === CrossGame.EMPTY);

        return {
            rowNumber: randomLine.index,
            cellNumber: emptyIndex
        };
    }

    createStep() {
        const { robotName } = this.props;
        const robotWinLine = this.getWinLine(robotName);

        if (robotWinLine) {
            return this.finishLine(robotWinLine);
        }

        const enemyName = robotName === CrossGame.X ? CrossGame.O : CrossGame.X
        const enemyWinLine = this.getWinLine(enemyName);

        if (enemyWinLine) {
            return this.finishLine(enemyWinLine);
        }

        return this.randomStep();
    }
}
