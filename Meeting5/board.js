function Board(selector) {
    // this = {}

    this.gameEl = document.querySelector(selector);
    this.boardEl = this.gameEl.querySelector('.cross__board');
    this.cells = Array.from(this.boardEl.querySelectorAll('.cross__board-item'));

    this.cells.forEach((cell, idx) => {
        cell.addEventListener('click', this.step.bind(this,idx));
    });

    this.start();
}

Board.EMPTY = '';
Board.X = 'x';
Board.O = 'o';
Board.ROW = 'ROW';
Board.COLUMN = 'COLUMN';
Board.DIAGONAL = 'DIAGONAL';
Board.END_GAME = 'END_GAME';
Board.STARTED_GAME = 'STARTED_GAME';

Board.prototype.start = function () {
    this.board = [
        [Board.EMPTY, Board.EMPTY, Board.EMPTY],
        [Board.EMPTY, Board.EMPTY, Board.EMPTY],
        [Board.EMPTY, Board.EMPTY, Board.EMPTY]
    ];
    this.currentUser = Board.X;
    this.status = Board.STARTED_GAME;
    this.winner = null;

    this.clearBoard();
}

Board.prototype.renderX = function() {
    const svgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    svgEl.setAttribute('class', 'x cross__board-item-el');
    svgEl.setAttribute('viewBox', '0 0 80 80');

    const line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');

    line1.setAttribute('class', 'x__line1');
    line1.setAttribute('x1', '20');
    line1.setAttribute('y1', '10');
    line1.setAttribute('x2', '60');
    line1.setAttribute('y2', '70');

    const line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');

    line2.setAttribute('class', 'x__line2');
    line2.setAttribute('x1', '60');
    line2.setAttribute('y1', '10');
    line2.setAttribute('x2', '20');
    line2.setAttribute('y2', '70');

    svgEl.append(line1, line2);

    return svgEl;
}

Board.prototype.render0 = function() {
    const svgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    svgEl.setAttribute('class', 'o cross__board-item-el');
    svgEl.setAttribute('viewBox', '0 0 80 80');

    svgEl.innerHTML = `<ellipse cx="40" cy="40" rx="20" ry="30"/>`;

    return svgEl;
}

Board.prototype.clearBoard = function() {
    this.cells.forEach(cell => {
        cell.innerText = '';
    });
}

Board.prototype.renderBoard = function() {
    this.cells.forEach((cell, idx) => {
        if (cell.innerHTML !== '') {
            return ;
        }

        const row = Math.floor(idx / 3);
        const column = idx % 3;
        const data = this.board[row][column];

        if (data === Board.X) {
            cell.append( this.renderX() );
        } else if (data === Board.O) {
            cell.append( this.render0() );
        }
    });
}

Board.prototype.step = function (cellIdx) {
    if (this.status === Board.END_GAME) {
        return ;
    }

    const row = Math.floor(cellIdx / 3);
    const column = cellIdx % 3;
    const data = this.board[row][column];

    if (data !== Board.EMPTY) {
        throw new Error('Cell not empty. Step denided');

        return ;
    }

    const { currentUser } = this;

    // сохраняем ход
    this.board[row][column] = currentUser;

    // перерисовка
    this.renderBoard();

    // проверяем победили или ничья
    const lines = this.getLines();
    const winLine = lines.find(line => this.isLineWin(line, currentUser));

    if (winLine) {
        // победа
        this.status = Board.END_GAME;
        this.winner = currentUser;
        this.winAlert();

        return ;
    }

    const lineWithEmptyCell = lines.find(this.hasEmptyCellInLine, this);

    if (!lineWithEmptyCell) {
        // ничья
        this.status = Board.END_GAME;
        this.winner = null;
        this.drawAlert();

        return ;
    }

    // если игра не закончена, то ход передается
    this.currentUser = currentUser === Board.X ? Board.O : Board.X;
}

Board.prototype.drawAlert = function () {
    alert(`Draw the game`);
}

Board.prototype.winAlert = function () {
    alert(`${this.winner} win the game`);
}

Board.prototype.getLines = function () {
    const lines = [];
    const {board} = this;

    for (let i=0; i < 3; i++) {
        const row = {
            type: Board.ROW,
            idx: i,
            data: [...board[i]]
        };
        const column = {
            type: Board.COLUMN,
            idx: i,
            data: [
                board[0][i],
                board[1][i],
                board[2][i],
            ]
        };

        lines.push(row, column);
    }

    lines.push(
        {
            type: Board.DIAGONAL,
            idx: 0,
            data: [
                board[0][0],
                board[1][1],
                board[2][2],
            ]
        },
        {
            type: Board.DIAGONAL,
            idx: 1,
            data: [
                board[0][2],
                board[1][1],
                board[2][0],
            ]
        }
    );

    return lines;
}

Board.prototype.hasEmptyCellInLine = function (line) {
    return line.data.some(symbol => symbol === Board.EMPTY);
}

Board.prototype.isLineWin = function(line, symbol) {
    return line.data.every(currentSymbol => currentSymbol === symbol);
}

const currentBoard = new Board('.game');

console.log( currentBoard );
