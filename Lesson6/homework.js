function basicOp(operation, value1, value2) {
    // if (operation === '+') {
    //     return value1 + value2;
    // }

    // if (operation === '-') {
    //     return value1 - value2;
    // }

    // if (operation === '*') {
    //     return value1 * value2;
    // }

    // if (operation === '/') {
    //     return value1 / value2;
    // }

    // switch (operation) {
    //     case '+': // operation === '+'
    //         return value1 + value2;
    //         // break;
    //     case '-':
    //         return value1 - value2;
    //     case '*':
    //         return value1 * value2;
    //     case '/':
    //         return value1 / value2;
    //     default:
    //         return new Error('unexpected operator');
    // }

    return operation === '+'
        ? value1 + value2
        : operation === '-'
            ? value1 - value2
            : operation === '*'
                ? value1 * value2
                : operation === '/'
                    ? value1 / value2
                    : new Error('unexpected operator');
}

function boolToWord( bool ){
    // if ( bool ) {
    //     return "Yes";
    // }

    // return "No";

    return bool ? "Yes" : "No";
}
