function rentalCarCost(d) {
    // Your solution here
    if (d < 3) {
        return 40 * d;
    }

    if (d < 7) {
        return 40 * d - 20;
    }

    return 40 * d - 50;
}

// console.log(rentalCarCost(1), 40);
// console.log(rentalCarCost(2), 80);

// console.log(rentalCarCost(3), 100);
// console.log(rentalCarCost(4), 140);
// console.log(rentalCarCost(5), 180);
// console.log(rentalCarCost(6), 220);

// console.log(rentalCarCost(7), 230);
// console.log(rentalCarCost(8), 270);
// console.log(rentalCarCost(9), 310);
// console.log(rentalCarCost(10), 350);

function basicOp(operation, value1, value2) {
    // if (operation === '+') {
    //      return value1 + value2;
    // }

    let result;

    switch (operation) {
        case '+':
            result = value1 + value2;
            break;
        case '-':
            result = value1 - value2;
            break;
        case '*':
            result = value1 * value2;
            break;
        case '/':
            if (value2 === 0) {
                return new Error('Нельзя делить на ноль');
            }

            result = value1 / value2;

            break;
        default:
            return new Error('unexpected operation');
    }

    return result;
}

// console.log(basicOp('+', 4, 7), 11);
// console.log(basicOp('-', 15, 18), -3);
// console.log(basicOp('*', 5, 5), 25);
// console.log(basicOp('/', 49, 7), 7);

function addClassName(basicClassName, newClassName) {
    if (!newClassName) {
        return basicClassName;
    }

    if (typeof newClassName !== 'string') {
        return basicClassName;
    }

    // return basicClassName + ' ' + newClassName;
    return `${basicClassName} ${newClassName}`;
}

let className = 'collection__action';
let showMenu = true;
let showNetwork = false;

// 0 && 8           -> 0
// 'hello' && ''    -> ''
// false && 12      -> false
// true && 'hello'  -> 'hello'

// className = addClassName(className, showMenu && 'collection__action--browse');
// className = addClassName(className, showNetwork && 'collection__action--network');

// console.log(className, 'collection__action collection__action--browse');

let board = 'PPPPPPPPP';

console.log(board.length);

function step(board, currentSymbol, idx) {
    if (board[idx] !== 'P') {
        return new Error('cell not empty');
    }

    let newBoard = '';

    if (idx === 0) {
        newBoard += currentSymbol;
    } else {
        newBoard += board[0];
    }

    if (idx === 1) {
        newBoard += currentSymbol;
    } else {
        newBoard += board[1];
    }

    if (idx === 2) {
        newBoard += currentSymbol;
    } else {
        newBoard += board[2];
    }

    if (idx === 3) {
        newBoard += currentSymbol;
    } else {
        newBoard += board[3];
    }

    if (idx === 4) {
        newBoard += currentSymbol;
    } else {
        newBoard += board[4];
    }

    if (idx === 5) {
        newBoard += currentSymbol;
    } else {
        newBoard += board[5];
    }

    if (idx === 6) {
        newBoard += currentSymbol;
    } else {
        newBoard += board[6];
    }

    if (idx === 7) {
        newBoard += currentSymbol;
    } else {
        newBoard += board[7];
    }

    if (idx === 8) {
        newBoard += currentSymbol;
    } else {
        newBoard += board[8];
    }

    return newBoard;
}

// console.log(board);

// board = step(board, 'X', 0);

// console.log(board);

// board = step(board, 'O', 1);

// console.log(board);

// board = step(board, 'X', 4);

// console.log(board);

// board = step(board, 'O', 8);

// console.log(board);

let num = 1234567890;

function getNumByIdx(num, idx) {
    const str = String(num);
    // const str = '' + num;

    return parseInt(str[idx], 10);
}

console.log( typeof getNumByIdx(num, 0) );
console.log( getNumByIdx(num, 4), 5 );
