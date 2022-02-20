function sum(a, b) {
    return a + b;
}

console.log( sum(0.1, 0.2) );

function isEqual(a, b, q = 5) {
    const quolity = 10 ** q;
    const a1 = Math.round(a * quolity);
    const b1 = Math.round(a * quolity);

    console.log(a1, b1);

    return a1 === b1;
}

console.log( isEqual(sum(0.1, 0.2), 0.3, 17 ) );
