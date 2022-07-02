import { Cross } from './cross.js';

export class Robot {
    static CORNERS = [0, 2, 6, 8];
    static SIDES = [1, 3, 5, 7];
    static SIDES_SUM = {
        // 1 and 3 => 0
        4: 0,
        // 1 and 5 => 2
        6: 2,
        // 3 and 7 => 6
        10: 6,
        // 5 and 7 => 8
        12: 8
    };

    constructor(name, game) {
        this.name = name;
        this.game = game;
    }

    getImmediateWinLine(user) {
        const lines = this.game.getLines();
        const immediateWinLine = lines.find(line => {
            const currentSymbols = line.values.filter(symbol => symbol === user);

            return line.values.includes(Cross.EMPTY) && currentSymbols.length === 2;
        })

        return immediateWinLine;
    }

    calcEmptyIDForLine(line) {
        const emptyIdx = line.values.findIndex(symbol => symbol === Cross.EMPTY);

        if (line.type === 'row') {
            return line.idx * 3 + emptyIdx;
        }

        if (line.type === 'column') {
            return emptyIdx * 3 + line.idx;
        }

        if (line.type === 'diagonal') {
            const positions = line.idx === 0 ? [0, 4, 8] : [2, 4, 6];

            return positions[emptyIdx];
        }
    }

    getCoords(position) {
        return {
            x: Math.floor(position / 3),
            y: position % 3
        }
    }

    getDistance(position1, position2) {
        const coords1 = this.getCoords(position1);
        const coords2 = this.getCoords(position2);

        return Math.pow(coords1.x - coords2.x, 2) + Math.pow(coords1.y - coords2.y, 2);
    }

    getFreeFarCorner(position) {
        const { board } = this.game.state;
        const freeCorners = Robot.CORNERS
            .filter(cornerPosition => board[cornerPosition] === Cross.EMPTY);

        if (freeCorners.length === 0) {
            return null;
        }

        freeCorners
            .sort((corner1, corner2) => {
                return this.getDistance(corner2, position) - this.getDistance(corner1, position);
            });

        return freeCorners[0];
    }

    getRandomFreeCorner() {
        const { board } = this.game.state;
        const freeCorners = Robot.CORNERS
            .filter(cornerPosition => board[cornerPosition] === Cross.EMPTY);

        if (freeCorners.length === 0) {
            return null;
        }

        return freeCorners[Math.floor(Math.random()*freeCorners.length)];
    }

    getRandomEmtyCellIdx() {
        const { board } = this.game.state;
        const emptyCellIdx = board
            .reduce(
                (emptyCellIdx, symbol, idx) => {
                    if (symbol === Cross.EMPTY) {
                        emptyCellIdx.push(idx);
                    }

                    return emptyCellIdx;
                },
                []
            );

        if (emptyCellIdx.length === 0) {
            return null;
        }

        return emptyCellIdx[Math.floor(Math.random()*emptyCellIdx.length)];
    }

    calcStepX() {
        const { moves } = this.game.state;

        if (moves.length === 0) {
            return 4;
        }

        const immediateWinLine = this.getImmediateWinLine(this.name);

        if (immediateWinLine) {
            return this.calcEmptyIDForLine(immediateWinLine);
        }

        const opponent = this.name === Cross.X ? Cross.O : Cross.X;
        const opponentWinLine = this.getImmediateWinLine(opponent);

        if (opponentWinLine) {
            return this.calcEmptyIDForLine(opponentWinLine);
        }

        const lastOpponentMove = moves[moves.length - 1];
        const freeFarCorner = this.getFreeFarCorner(lastOpponentMove.position);

        if (freeFarCorner !== null) {
            return freeFarCorner;
        }

        const randomCellIdx = this.getRandomEmtyCellIdx();

        if (randomCellIdx !== null) {
            return randomCellIdx;
        }

        return null;
    }

    isCorner(position) {
        return Robot.CORNERS.includes(position);
    }

    isSide(position) {
        return Robot.SIDES.includes(position);
    }

    getOppositeCorner(cornerPosition) {
        return {
            0: 8,
            2: 6,
            6: 2,
            8: 0
        }[cornerPosition];
    }

    getOppositeSide(sidePosition) {
        return {
            1: 7,
            3: 5,
            5: 3,
            7: 1
        }[sidePosition];
    }

    getFreeRandomSide() {
        const { board } = this.game.state;
        const freeSides = Robot.SIDES
            .filter(sidePosition => board[sidePosition] === Cross.EMPTY);

        if (freeSides.length === 0) {
            return null;
        }

        return freeSides[Math.floor(Math.random()*freeSides.length)];
    }

    getNearestCorner(side1, side2) {
        const sum = side1 + side2;

        if (sum in Robot.SIDES_SUM) {
            return Robot.SIDES_SUM[sum];
        }

        return null;
    }

    calcStepO() {
        const immediateWinLine = this.getImmediateWinLine(this.name);

        if (immediateWinLine) {
            return this.calcEmptyIDForLine(immediateWinLine);
        }

        const opponent = this.name === Cross.X ? Cross.O : Cross.X;
        const opponentWinLine = this.getImmediateWinLine(opponent);

        if (opponentWinLine) {
            return this.calcEmptyIDForLine(opponentWinLine);
        }

        const { moves, board } = this.game.state;
        const firstMove = moves[0];

        if (firstMove.position === 4) {
            const randomFreeCorner = this.getRandomFreeCorner();

            if (randomFreeCorner !== null) {
                return randomFreeCorner;
            }

            const randomCellIdx = this.getRandomEmtyCellIdx();

            if (randomCellIdx !== null) {
                return randomCellIdx;
            }

            return null;
        }

        if (moves.length === 1) {
            return 4;
        }

        if (this.isCorner(firstMove.position)) {
            if (moves.length === 3) {
                const oppositeCorner = this.getOppositeCorner(firstMove.position);

                if (board[oppositeCorner] === Cross.EMPTY) {
                    return oppositeCorner;
                }

                const sidePosition = this.getFreeRandomSide();

                if (sidePosition !== null) {
                    return sidePosition;
                }
            }

            return this.getRandomEmtyCellIdx();
        }

        if (this.isSide(firstMove.position)) {
            if (moves.length === 3) {
                const secondXMove = moves[2];

                if (this.isCorner(secondXMove.position)) {
                    const oppositeCorner = this.getOppositeCorner(secondXMove.position);

                    if (board[oppositeCorner] === Cross.EMPTY) {
                        return oppositeCorner;
                    }
                }

                if (this.isSide(secondXMove.position)) {
                    if (this.getOppositeSide(secondXMove.position) === firstMove.position) {
                        return this.getRandomFreeCorner();
                    }

                    const nearCorner = this.getNearestCorner(secondXMove.position, firstMove.position);

                    if (nearCorner !== null) {
                        return nearCorner;
                    }
                }
            }
        }

        return null;
    }
}
