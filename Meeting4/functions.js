// 1. var, function; global = { sum: f }
// 2.

// console.log( sum(1, 2) );

const d = 1;

console.log( mult(2, 3) ); // 6

function sum(a, b) {
    console.log({d});

    return a + b;
}

console.log( sum(1, 2, 3, 4, 5, 6, 7, 8) ); // 3

const mult = function (a, b) {
    return a * b;
};
