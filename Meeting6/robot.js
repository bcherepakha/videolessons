class CrossGameRobot {
    static CORNERS = [
        {
            cellNumber: 0,
            rowNumber: 0,
        },
        {
            cellNumber: 2,
            rowNumber: 0,
        },
        {
            cellNumber: 0,
            rowNumber: 2,
        },
        {
            cellNumber: 2,
            rowNumber: 2,
        },
    ];

    static SIDES = [
        {
            rowNumber: 0,
            cellNumber: 1,
        },
        {
            rowNumber: 1,
            cellNumber: 0,
        },
        {
            rowNumber: 1,
            cellNumber: 2,
        },
        {
            rowNumber: 2,
            cellNumber: 1,
        },
    ]

    static CENTER = {
        rowNumber: 1,
        cellNumber: 1,
    }

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
        const { robotName, game } = this.props;
        const robotWinLine = this.getWinLine(robotName);

        if (robotWinLine) {
            return this.finishLine(robotWinLine);
        }

        const enemyName = robotName === CrossGame.X ? CrossGame.O : CrossGame.X
        const enemyWinLine = this.getWinLine(enemyName);
        const { steps } = game;
        const [firstXStep, firstOStep] = steps;
        const stepNumber = Math.ceil(steps.length / 2);

        if (enemyWinLine) {
            return this.finishLine(enemyWinLine);
        }

        if (robotName === CrossGame.O) {
            if (this.isCenteredStep(firstXStep)) {
                const step = this.createRandomCornerStep();

                if (step) {
                    return step;
                } else {
                    return this.randomStep();
                }
            }

            if (this.isCorner(firstXStep)) {
                if (stepNumber === 1) {
                    return CrossGameRobot.CENTER;
                }

                if (stepNumber === 2) {
                    const oppositeCorner = this.getOposite(firstXStep);

                    if (this.isEmpty(oppositeCorner)) {
                        return oppositeCorner;
                    }

                    const step = this.createRandomSideStep();

                    if (step) {
                        return step;
                    } else {
                        return this.randomStep();
                    }
                }

                return this.randomStep();
            }

            if (this.isSide(firstXStep)) {
                if (stepNumber === 1) {
                    return CrossGameRobot.CENTER;
                }

                if (stepNumber === 2) {
                    const previousXStep = steps[2];

                    if (this.isCorner(previousXStep)) {
                        const oppositeCorner = this.getOposite(firstXStep);

                        if (this.isEmpty(oppositeCorner)) {
                            return oppositeCorner;
                        } else {
                            throw new Error('wrong data');
                        }
                    }

                    if (this.isOposite(previousXStep, firstXStep)) {
                        return this.createRandomCornerStep();
                    }

                    return this.getNearestCorner(previousXStep, firstXStep);
                }

                return this.randomStep();
            }
        } else {
            // за крестики
            if (stepNumber === 0) {
                return CrossGameRobot.CENTER;
            }

            if (stepNumber === 1) {
                return this.getFarthestCorner(firstOStep);
            }

            return this.randomStep();
        }

        return this.randomStep();
    }

    chooseRandomStep(variants) {
        const freeCells = variants
            .filter(step => this.isEmpty(step));

        if (freeCells.length === 0) {
            return null;
        }

        return freeCells[Math.floor(Math.random()*freeCells.length)];
    }

    createRandomCornerStep() {
        return this.chooseRandomStep(CrossGameRobot.CORNERS);
    }

    createRandomSideStep() {
        return this.chooseRandomStep(CrossGameRobot.SIDES);
    }

    getOposite(step) {
        return {
            rowNumber: 2 - step.rowNumber,
            cellNumber: 2 - step.cellNumber,
        }
    }

    getDistance(step1, step2) {
        return (step1.rowNumber - step2.rowNumber)**2 + (step1.cellNumber - step2.cellNumber)**2;
    }

    getFarthestCorner(step1) {
        const variants = CrossGameRobot.CORNERS
            .filter(step => this.isEmpty(step))
            .sort((a, b) => {
                const distance1 = this.getDistance(a, step1);
                const distance2 = this.getDistance(b, step1);

                return distance2 - distance1;
            });

        return variants[0];
    }

    getNearestCorner(step1, step2) {
        const variants = CrossGameRobot.CORNERS
            .filter(step => this.isEmpty(step))
            .sort((a, b) => {
                const distance1 = this.getDistance(a, step1) + this.getDistance(a, step2);
                const distance2 = this.getDistance(b, step1) + this.getDistance(b, step2);

                return distance1 - distance2;
            });

        return variants[0];
    }

    isEqual(step1, step2) {
        return step1.rowNumber === step2.rowNumber && step1.cellNumber === step2.cellNumber;
    }

    isOposite(step1, step2) {
        const oposite1 = this.getOposite(step1);

        return this.isEqual(step2, oposite1);
    }

    isEmpty({rowNumber, cellNumber}) {
        const { game: { board } } = this.props;

        return board[rowNumber][cellNumber] === CrossGame.EMPTY;
    }

    isCorner(step) {
        const corner = CrossGameRobot.CORNERS
            .find(corner => corner.rowNumber === step.rowNumber && corner.cellNumber === step.cellNumber);

        return !!corner;
    }

    isSide(step) {
        const side = CrossGameRobot.SIDES
            .find(side => side.rowNumber === step.rowNumber && side.cellNumber === step.cellNumber);

        return !!side;
    }

    isCenteredStep(step) {
        return step.cellNumber === 1 && step.rowNumber === 1;
    }
}

function withStepsSpy( CrossGame ) {
    const { start, step } = CrossGame.prototype;

    CrossGame.prototype.start = function () {
        this.steps = [];

        return start.call(this);
    }

    CrossGame.prototype.step = function (cellNumber, rowNumber) {
        try {
            const { currentUser } = this;
            const stepResult = step.call(this, cellNumber, rowNumber);

            if (stepResult) {
                this.steps.push({
                    user: currentUser,
                    rowNumber,
                    cellNumber,
                });
            }

            return stepResult;
        } catch (ex) {
            throw ex;
        }
    }

    return CrossGame;
}
