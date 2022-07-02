export function Cross(gameSelector) {
    // this = {}
    // this.__proto__ = Cross.prototype

    this.gameEl = document.querySelector(gameSelector);
    this.boardEl = this.gameEl.querySelector('.cross__board');
    this.cells = Array.from(this.gameEl.querySelectorAll('.cross__board-item'));
    this._nextMoves = [];

    this.start();

    this.cells.forEach((cell, idx) => cell.addEventListener('click', this.step.bind(this, idx)));

    // const self = this;
    // const applyCellEvents = function (cell, idx) {
    //     console.log(self);
    //     cell.addEventListener('click', self.step.bind(self, idx));
    // };

    // // this.cells.forEach(applyCellEvents);

    // for (let idx = 0; idx < this.cells.length; idx++) {
    //     // applyCellEvents.call(this, this.cells[idx], idx); // this = undefined | Window
    //     applyCellEvents(this.cells[idx], idx);
    // }

    // return this;
}

Cross.X = 'x';
Cross.O = '0';
Cross.EMPTY = '';
Cross.STARTED = 'STARTED';
Cross.END = 'END';

Cross.createX = function () {
    const el = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    const line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');

    el.setAttribute('class', 'x cross__board-item-el');
    el.setAttribute('viewBox', '0 0 80 80');
    el.append(line1, line2);

    line1.setAttribute('class', 'x__line1');
    line1.setAttribute('x1', '20');
    line1.setAttribute('x2', '60');
    line1.setAttribute('y2', '70');
    line1.setAttribute('y1', '10');

    line2.setAttribute('class', 'x__line2');
    line2.setAttribute('x1', '60');
    line2.setAttribute('x2', '20');
    line2.setAttribute('y2', '70');
    line2.setAttribute('y1', '10');

    return el;
};

Cross.createO = function () {
    const el = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const ellipse = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');

    el.setAttribute('class', 'o cross__board-item-el');
    el.setAttribute('viewBox', '0 0 80 80');
    el.append(ellipse);

    ellipse.setAttribute('cx', '40');
    ellipse.setAttribute('cy', '40');
    ellipse.setAttribute('rx', '20');
    ellipse.setAttribute('ry', '30');

    return el;
}

Cross.prototype.start = function start() {
    this.clearBoard();

    this.state = {
        status: Cross.STARTED,
        currentUser: Cross.X,
        board: new Array(9).fill(Cross.EMPTY),
        moves: []
    };

    // this._nextMove = null;
};

Cross.prototype.clearBoard = function () {
    this.cells.forEach(cell => cell.innerText = '');
};

Cross.prototype.resetMoves = function () {
    this._nextMoves = [];
}

Cross.prototype.setNextMove = function (nextMove) {
    this._nextMoves.push(nextMove);
}

Cross.prototype.step = function (idx) {
    const cell = this.cells[idx];
    const cellValue = this.state.board[idx];

    if (cellValue !== Cross.EMPTY) {
        return ;
    }

    if (this.state.status !== Cross.STARTED) {
        return ;
    }

    const { currentUser } = this.state;
    const el = currentUser === Cross.X ? Cross.createX() : Cross.createO();
    const newUser = currentUser === Cross.X ? Cross.O : Cross.X;

    cell.append(el);

    this.state.board[idx] = currentUser;
    this.state.moves.push({
        user: currentUser,
        position: idx
    });

    const lines = this.getLines();
    const winLine = this.getWinLine(lines, currentUser);

    if (winLine) {
        this.state.status = Cross.END;
        alert(`Winner: ${currentUser}`);
    } else {
        this.state.currentUser = newUser;
        this.applyMoves();
    }
};

Cross.prototype.applyMoves = function () {
    if (this._nextMoves.length) {
        this._nextMoves.forEach(f => f());
    }
}

Cross.prototype.getLines = function () {
    const lines = [];
    const { board } = this.state;

    for (let i=0; i<3; i++) {
        const row = {
            type: 'row',
            idx: i,
            values: [
                board[i*3],
                board[i*3+1],
                board[i*3+2]
            ]
        };
        const column = {
            type: 'column',
            idx: i,
            values: [
                board[i],
                board[i+3],
                board[i+6]
            ]
        };

        lines.push(row, column);
    }

    lines.push(
        {
            type: 'diagonal',
            idx: 0,
            values: [
                board[0],
                board[4],
                board[8]
            ]
        },
        {
            type: 'diagonal',
            idx: 1,
            values: [
                board[2],
                board[4],
                board[6]
            ]
        }
    );

    return lines;
};

Cross.prototype.getWinLine = function (lines, symbol) {
    return lines.find(function (line) {
        return line.values.every(function (el) {
            return el === symbol;
        });
    });
};
