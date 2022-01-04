const counter = makeCounter();
const counter1 = makeCounter();

counter(); // 1
counter(); // 2
counter(); // 3

counter1(); // 1

function makeCounter() {
    // LE = { c }
    let c = 0;

    return function counter () {
        console.log( ++c );
    };
}
