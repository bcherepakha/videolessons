const EMPTY = '';
const X = 'x';
const O = 'o';

const boardState = {
    board: [
        [EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY]
    ],
    currentUser: X,
}

boardState.boardEl = document.querySelector('.cross__board');
boardState.cells = Array.from(boardState.boardEl.querySelectorAll('.cross__board-item'));

boardState.cells.forEach((cell, idx) => {
    cell.addEventListener('click', () => step(idx, boardState));
});

function renderX() {
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

function render0() {
    const svgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    svgEl.setAttribute('class', 'o cross__board-item-el');
    svgEl.setAttribute('viewBox', '0 0 80 80');

    svgEl.innerHTML = `<ellipse cx="40" cy="40" rx="20" ry="30"/>`;

    return svgEl;
}

function clearBoard(boardState) {
    boardState.cells.forEach(cell => {
        cell.innerText = '';
    });
}

function renderBoard(boardState) {
    boardState.cells.forEach((cell, idx) => {
        if (cell.innerHTML !== '') {
            return ;
        }

        const row = Math.floor(idx / 3);
        const column = idx % 3;
        const data = boardState.board[row][column];

        if (data === X) {
            cell.append( renderX() );
        } else if (data === O) {
            cell.append( render0() );
        }
    });
}

function step(cellIdx, boardState) {
    const row = Math.floor(cellIdx / 3);
    const column = cellIdx % 3;
    const data = boardState.board[row][column];

    if (data !== EMPTY) {
        throw new Error('Cell not empty. Step denided');

        return ;
    }

    const { currentUser } = boardState;

    boardState.board[row][column] = currentUser;
    boardState.currentUser = currentUser === X ? O : X;

    renderBoard(boardState);
}

clearBoard(boardState);
renderBoard(boardState);

console.log( boardState );

// step(1, boardState);
// step(4, boardState);
