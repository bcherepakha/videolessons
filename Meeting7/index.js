function sum(a, b) {
    return new Promise(resolve => {
        setTimeout(() => resolve(a + b), 2000*Math.random());
    });
}

async function test() {
    let result = await sum(2, 3);

    result = await sum(result, 5);
    result = await sum(result, 8);

    console.log(result);
}

test();

function make_lazy(fn, ...args) {
    return function () {
        return fn.apply(this, args);
    }
}

function add(a, b) {
    return a + b;
}

let lazy_value = make_lazy(add, 2, 3);

console.log( lazy_value(), 5 );
