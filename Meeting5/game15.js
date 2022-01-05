function Point(num, position, onClick) {
    this.num = num;
    this.position = position;
    this.onClick = onClick;
    this.createElement();
}

Point.prototype.setPosition = function (position, canMove = true) {
    this.position = position;
    this.canMove = canMove;
    this.render();
};

Point.prototype.createElement = function () {
    this.rootEl = document.createElement('div');
    this.rootEl.className = 'board__item';
    this.rootEl.innerText = this.num.toString();
    this.rootEl.addEventListener('click', this.onClick.bind(null, this));
};

Point.prototype.render = function () {
    const row = Math.floor(this.position / 4);
    const column = this.position % 4;

    this.rootEl.style.transform = `translate(${column*100}%, ${row*100}%)`;

    if (this.canMove) {
        this.rootEl.classList.add('board__item--can-move');
    } else {
        this.rootEl.classList.remove('board__item--can-move');
    }

    return this.rootEl;
};

function Game(selector) {
    // this = { __proto__: Game.prototype }
    this.rootEl = document.querySelector(selector);
    this.board = [...Game.WIN_BOARD]
        .sort(() => Math.random() - .5);

    this.boardItems = Game.WIN_BOARD
        .filter(num => num > 0)
        .map((num, idx) => new Point(num, idx, this.onPointClick.bind(this)));

    this.clear();
    this.fill();
    this.render();

    document.addEventListener('keydown', this.onKeyDown.bind(this));

    // return this;
}

Game.prototype.onPointClick = function ( point ) {
    const { num, canMove } = point; // num = point.num

    if (!canMove) {
        return ;
    }

    const idx = this.board.findIndex(n => n === num);
    const siblingsIdx = this.getSiblings();
    const relativePosition = Object.keys(siblingsIdx).find(p => siblingsIdx[p] === idx);

    if (relativePosition in Game.DIRECTION_TO_SIBLING_NAME) {
        this.move(Game.DIRECTION_TO_SIBLING_NAME[relativePosition]);
    }
};

Game.prototype.onKeyDown = function (e) {
    if (e.which in Game.CODES_TO_DIRECTION) {
        this.move( Game.CODES_TO_DIRECTION[ e.which ] );
    }
};

Game.prototype.clear = function () {
    this.rootEl.innerText = '';
};

Game.prototype.fill = function () {
    // this.rootEl.append.apply(
    //     this.rootEl,
    //     this.boardItems.map(point => point.render())
    // );

    this.rootEl.append(
        ...this.boardItems.map(point => point.render())
    );
};

Game.prototype.render = function () {
    const siblingsIdx = Object.values(this.getSiblings())
        .reduce(
            (store, idx) => {
                if (idx !== null) {
                    store[idx] = true;
                }

                return store;
            },
            {}
        );

    this.board.forEach((num, position) => {
        if (num === 0) {
            return ;
        }

        const point = this.boardItems[num - 1];

        point.setPosition( position, siblingsIdx[position] || false );
    });
};

Game.prototype.getSiblings = function ( idx = -1 ) {
    const emptyIdx = idx < 0 ? this.board.findIndex(num => num === 0) : idx;
    const siblingsIdx = {
        TOP: emptyIdx < 4 ? null : emptyIdx - 4,
        RIGHT: emptyIdx % 4 === 3 ? null : emptyIdx + 1,
        BOTTOM: emptyIdx > 11 ? null : emptyIdx + 4,
        LEFT: emptyIdx % 4 === 0 ? null : emptyIdx - 1,
    };

    return siblingsIdx;
};

Game.prototype.move = function (direction) {
    if (this.endGame) {
        return ;
    }

    const emptyIdx = this.board.findIndex(num => num === 0);
    const siblingsIdx = this.getSiblings(emptyIdx);
    let movedPointIdx = null;

    if (direction in Game.DIRECTION_TO_SIBLING_NAME) {
        movedPointIdx = siblingsIdx[ Game.DIRECTION_TO_SIBLING_NAME[direction] ];
    }

    // switch (direction) {
    // case 'TOP':
    //     movedPointIdx = siblingsIdx.BOTTOM;
    //     break;
    // case 'BOTTOM':
    //     movedPointIdx = siblingsIdx.TOP;
    //     break;
    // case 'LEFT':
    //     movedPointIdx = siblingsIdx.RIGHT;
    //     break;
    // case 'RIGHT':
    //     movedPointIdx = siblingsIdx.LEFT;
    //     break;
    // default:
    //     console.error('unknown direction', direction);
    // }

    if ( movedPointIdx === null ) {
        return ;
    }

    this.board[emptyIdx] = this.board[movedPointIdx];
    this.board[movedPointIdx] = 0;

    this.render();

    if ( this.isWin() ) {
        alert('You win');
        this.endGame = true;
    }
};

Game.prototype.isWin = function () {
    return this.board.join(',') === Game.WIN_BOARD.join(',');
};

Game.WIN_BOARD = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
Game.DIRECTION_TO_SIBLING_NAME = {
    TOP: 'BOTTOM',
    BOTTOM: 'TOP',
    LEFT: 'RIGHT',
    RIGHT: 'LEFT'
};
Game.CODES_TO_DIRECTION = {
    38: 'TOP',
    40: 'BOTTOM',
    37: 'LEFT',
    39: 'RIGHT',
};

const game = new Game('.board');

console.log( game );
