const boardEl = document.querySelector('.board');
const EMPTY_CHIP = 0;
const CAN_NOT_MOVE = -1;
const winState = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, EMPTY_CHIP];
const boardState = [...winState].sort(function (a, b) {
    return Math.random() - .5;
});
// const chips = [
//     createChip(boardState[0], 0),
//     createChip(boardState[1], 1),
//     createChip(boardState[2], 2),
//     createChip(boardState[3], 3),
//     ...
//     createChip(boardState[15], 15),
// ];

renderBoard();

// boardEl.append(chips[0], chips[1], chips[2]);

// boardEl.addEventListener('click', function(e) {
//     const num = parseInt(e.target.innerText, 10);

//     console.log('click by board', {
//         num,
//         position: boardState.findIndex(function (el) { return el === num; })
//     });
// });

function renderBoard() {
    clearBoard();

    const chips = boardState.map(function (el, idx) {
        return createChip(el, idx, moveChip);
    });

    boardEl.append(...chips);
}

function clearBoard() {
    boardEl.innerText = '';
}

function createChip(num, position, moveChip) {
    if (num === EMPTY_CHIP) {
        return '';
    }

    const el = document.createElement('div');

    el.setAttribute('class', 'board__item');
    // el.className = 'board__item';
    // el.classList.add('board__item');

    el.innerText = num.toString();

    runMoveChip(el, position);

    // el.addEventListener('click', function (event) { return moveChip(num, position, el, event); });
    el.addEventListener('click', moveChip.bind(null, num, el));

    return el;
}

function moveChip(num, chipEl, event) {
    const position = boardState.findIndex(function (el) { return el === num; });
    const newPosition = getNewChipPosition(position);

    if (newPosition === CAN_NOT_MOVE) {
        return null;
    }

    boardState[position] = EMPTY_CHIP;
    boardState[newPosition] = num;

    // renderBoard();
    runMoveChip(chipEl, newPosition);

    if (winState.join(',') === boardState.join(',')) {
        alert('You win');
    }
}

function getNewChipPosition(position) {
    // can move to top
    if (position > 3 && boardState[ position - 4 ] === EMPTY_CHIP) {
        return position - 4;
    }

    // can move to bottom
    if (position < 12 && boardState[ position + 4 ] === EMPTY_CHIP) {
        return position + 4;
    }

    const column = position % 4;

    // can move to left
    // if (![0, 4, 8, 12].includes(position) && boardState[ position - 1 ] === EMPTY_CHIP) {
    if (column !== 0 && boardState[ position - 1 ] === EMPTY_CHIP) {
        return position - 1;
    }

    // can move to right
    if (column !== 3 && boardState[ position + 1 ] === EMPTY_CHIP) {
        return position + 1;
    }

    return CAN_NOT_MOVE;
}

function runMoveChip(chipEl, position) {
    const row = Math.floor( position / 4 );
    const column = position % 4;

    chipEl.style.top = `${row*25}%`;
    chipEl.style.left = `${column*25}%`;
}
