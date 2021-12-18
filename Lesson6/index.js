let a = 12;
let s = `Hello ${a}`;
let b = true;
let n = false;

let q = null;
let u; //? undefined
let int = 123n;

function show( a ) {
    console.log( a );
}

show( 5 );
show( 8 );

function sum(a, b) {
    return a + b;
}

console.log( sum(1, 3) );
console.log( sum(10, 3) );
