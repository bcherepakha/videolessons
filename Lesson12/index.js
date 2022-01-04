function sum(a, b) {
    return a + b;
}

function spy(fn) {
    const decoratedFn = function () {
        const result = fn.apply(this, arguments);

        decoratedFn.callCount = decoratedFn.callCount + 1;
        decoratedFn.args.push(Array.from(arguments));
        decoratedFn.results.push(result);

        return result;
    };

    decoratedFn.callCount = 0;
    decoratedFn.args = [];
    decoratedFn.results = [];

    return decoratedFn;
}

const newSum = spy(sum);

console.log( newSum(1, 2) );
console.log( newSum(1, 3) );
console.log( newSum(5, 3) );
console.dir( newSum );
