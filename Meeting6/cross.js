'use strict';

function CrossGame(props) {
    // this.__proto__ = CrossGame.prototype;
    this.props = props;

    this.rootEl = document.querySelector(props.selector);
    this.boardEl = this.rootEl.querySelector('.cross__board');

    this.cells = [];

    this.eventSource = new EventSource();

    this.rootEl.querySelectorAll('.cross__board--row')
        .forEach((rowEl, rowNumber) => {
            this.cells[rowNumber] = [];

            rowEl.querySelectorAll('.cross__board-item')
                .forEach((cellEl, cellNumber) => {
                    this.cells[rowNumber][cellNumber] = cellEl;

                    cellEl.addEventListener('click', this.step.bind(this, cellNumber, rowNumber));
                });
        });

    this.start();

    this.boardEl.addEventListener('animationend', this.onAnimationEnd.bind(this));
    // this.rootEl.addEventListener('click', (e) => {
    //     const cellEl = e.target.closest('.cross__board-item');
    //     const rowIndex = this.cells.findIndex(rowItems => rowItems.includes(cellEl));

    //     console.log( rowIndex );

    // });
}

CrossGame.X = 'X';
CrossGame.O = 'O';
CrossGame.EMPTY = '';
CrossGame.ROW = 'row';
CrossGame.COLUMN = 'column';
CrossGame.DIAGONAL = 'diagonal';
CrossGame.GAME_STARTED = 1;
CrossGame.GAME_WIN = 2;
CrossGame.GAME_STANDOFF = 3;

CrossGame.prototype.onAnimationEnd = function (e) {
    const done = e.animationName === 'a-o'
        || e.animationName === 'a-x' && e.target.classList.contains('x__line2');

    if (done) {
        this.drawing = false;

        const { currentUser } = this;
        const isEnded = this.isGameEnd(currentUser);

        if (!isEnded) {
            this.currentUser = currentUser === CrossGame.X ? CrossGame.O : CrossGame.X;
            this.dispatchEvent('user-change');
        }
    }
};

CrossGame.prototype.step = function (cellNumber, rowNumber) {
    if (this._blockStep) {
        return ;
    }

    if (this.drawing) {
        return ;
    }

    if (this.status !== CrossGame.GAME_STARTED) {
        throw new Error('game not started');
    }

    const cellData = this.board[rowNumber][cellNumber];

    if (cellData !== CrossGame.EMPTY) {
        throw new Error('cell already contais symbol');
    }

    const {currentUser} = this;

    this.board[rowNumber][cellNumber] = currentUser;

    this.drawing = true;
    this.render();
};

CrossGame.prototype.blockStep = function (block) {
    this._blockStep = block;
}

CrossGame.prototype.start = function () {
    const {EMPTY} = CrossGame;

    this.status = CrossGame.GAME_STARTED;
    this.drawing = false;
    this.blockStep(false);
    this.currentUser = CrossGame.X;
    this.board = [
        [EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY],
    ];

    this.render();
    this.dispatchEvent('start');
};

CrossGame.prototype.createX = function () {
    const svgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    const line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');

    svgEl.setAttribute('class', 'x cross__board-item-el');
    svgEl.setAttribute('viewBox', '0 0 80 80');

    line1.setAttribute('class', 'x__line1');
    line1.setAttribute('x1', '20');
    line1.setAttribute('y1', '10');
    line1.setAttribute('x2', '60');
    line1.setAttribute('y2', '70');

    line2.setAttribute('class', 'x__line2');
    line2.setAttribute('x1', '60');
    line2.setAttribute('y1', '10');
    line2.setAttribute('x2', '20');
    line2.setAttribute('y2', '70');

    svgEl.append(line1, line2);

    return svgEl;
};

CrossGame.prototype.createO = function () {
    const svgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const ellipseEl = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');

    svgEl.setAttribute('class', 'o cross__board-item-el');
    svgEl.setAttribute('viewBox', '0 0 80 80');

    ellipseEl.setAttribute('cx', '40');
    ellipseEl.setAttribute('cy', '40');
    ellipseEl.setAttribute('rx', '20');
    ellipseEl.setAttribute('ry', '30');

    svgEl.append(ellipseEl);

    return svgEl;
};

CrossGame.prototype.render = function () {
    this.cells.forEach((rowItems, rowNumber) => {
        rowItems.forEach((cellEl, cellNumber) => {
            const cellData = this.board[rowNumber][cellNumber];

            if (cellData === CrossGame.EMPTY) {
                cellEl.innerText = '';
            } else if (cellEl.innerHTML === '') {
                const el = cellData === CrossGame.X
                    ? this.createX()
                    : this.createO();

                cellEl.append(el);
            }
        });
    });
};

CrossGame.prototype.getLines = function () {
    const lines = [];

    this.board.forEach((data, index) => {
        lines.push({
            type: CrossGame.ROW,
            index,
            data
        });
    });

    for (let i=0; i <3; i++) {
        lines.push({
            type: CrossGame.COLUMN,
            index: i,
            data: [
                this.board[0][i],
                this.board[1][i],
                this.board[2][i]
            ]
        });
    }

    lines.push(
        {
            type: CrossGame.DIAGONAL,
            index: 0,
            data: [
                this.board[0][0],
                this.board[1][1],
                this.board[2][2]
            ]
        },
        {
            type: CrossGame.DIAGONAL,
            index: 1,
            data: [
                this.board[0][2],
                this.board[1][1],
                this.board[2][0]
            ]
        },
    );

    return lines;
};

CrossGame.prototype.checkWin = function (line, winSymbol) {
    return line.data.every(symbol => symbol === winSymbol);
};

CrossGame.prototype.dispatchEvent = function (eventName) {
    return this.eventSource.dispatchEvent(
        EventSource.createEvent(eventName, null, this),
        this
    );
};

CrossGame.prototype.isGameEnd = function (currentUser) {
    const lines = this.getLines();
    const winLine = lines.find(line => this.checkWin(line, currentUser));

    if (winLine) {
        this.status = CrossGame.GAME_WIN;

        this.dispatchEvent('endgame');

        return true;
    }

    const lineWithEmptyCell = lines.find(({data}) => data.some(s => s === CrossGame.EMPTY));

    if (!lineWithEmptyCell) {
        this.status = CrossGame.GAME_STANDOFF;

        this.dispatchEvent('endgame');

        return true;
    }

    return false;
};
