/* eslint-disable no-unused-vars */

// Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку.
function join(arr, str) {
    let result = '';

    for (let i=0; i < arr.length; i++) {
        if (i !== 0) {
            result += str;
        }

        result += arr[i];
    }

    return result;
}

// arr.join(str)
console.log('join');
console.log( join(['Hello', 'world!'], ', ') ); //? 'Hello, world!'
console.log( join( [1, 2, 3, 4, 'vasya'], ' - ' ) ); //? '1 - 2 - 3 - 4 - vasya'

// Метод includes() проверяет, есть ли нужный элемент в массиве
function includes(arr, checkedValue) {
    for (let i=0; i < arr.length; i++) {
        if (arr[i] === checkedValue) {
            return true;
        }
    }

    return false;
}

console.log('includes');
console.log( includes([1, 2, 3, 4, 5], 4) === true );
console.log( includes([1, 2, 3, 4, 5], 8) === false );

// Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
function map( arr, transform ) {
    const result = [];

    for (let i=0; i < arr.length; i++) {
        result.push( transform(arr[i], i, arr) );
    }

    return result;
}

console.log('map');
console.log(
    map(
        [1, 2, 3, 4],
        function (el, idx, arr) {
            return arr.length + el * idx;
        }
    )); //? [4, 6, 10, 16]

// Метод filter() создаёт новый массив со всеми элементами,
// прошедшими проверку, задаваемую в передаваемой функции.
function filter( arr, checkHandler) {
    const result = [];

    for (let i=0; i < arr.length; i++) {
        if (checkHandler(arr[i], i, arr)) {
            result.push( arr[i] );
        }
    }

    return result;
}

console.log('filter');
console.log( filter( [1, 2, 3, 3, 3, 4, 5, 6], function(el) { return el < 5 && el > 2; }) ); // [3, 4]

// Метод concat() возвращает новый массив, состоящий из массива, на котором он был вызван, соединённого с другими массивами и/или значениями, переданными в качестве аргументов.
function concat(arr1, arr2) {
    const result = [];

    function addElement(el) {
        result.push(el);
    }

    forEach(arguments, function(arr) {
        forEach(arr, addElement);
    });

    return result;
}

function forEach(arr, action) {
    for (let i = 0; i < arr.length; i++) {
        action(arr[i], i, arr);
    }
}

console.log('concat');
console.log( concat([1, 2], [10, 12]) );
console.log( concat([1, 2, 3, 4, 5], [10, 12, 13, 15]) );
console.log( concat([1, 2], [3, 4], [10, 12]) );

// Метод find() возвращает значение первого найденного в массиве элемента,
// которое удовлетворяет условию переданному в callback функции.
//  В противном случае возвращается undefined.
function find(arr, condition) {
    for (let i=0; i < arr.length; i++) {
        if (condition(arr[i], i, arr)) {
            return arr[i];
        }
    }

    return null;
}

console.log('find');
console.log(
    find(
        [1, 2, 3, 4, 5, 6],
        function(el) { return el < 5 && el > 2; }
    )
); // 3

// Метод every() проверяет, удовлетворяют ли все элементы массива условию,
// заданному в передаваемой функции.
function every(arr, condition) {
    for (let i=0; i < arr.length; i++) {
        if (!condition(arr[i], i, arr)) {
            return false;
        }
    }

    return true;
}

console.log('every');
console.log( every([1, 2, 3, 4, 5], function(el) { return el < 3; }) ); // false
console.log( every([1, 2, 3, 4, 5], function(el) { return el > 0; }) ); // true

// Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.
function some(arr, condition) {
    for (let i=0; i < arr.length; i++) {
        if (condition(arr[i], i, arr)) {
            return true;
        }
    }

    return false;
}

console.log('some');
console.log( some([1, 2, 3, 4, 5], function(el) { return el < 3; }) ); // true
console.log( some([1, 2, 3, 4, 5], function(el) { return el > 4; }) ); // true
console.log( some([1, 2, 3, 4, 5], function(el) { return el > 5; }) ); // false

// Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо),
// возвращая одно результирующее значение.
function reduce(arr, reducer, initialValue) {
    let accumulator = initialValue;

    for (let i=0; i < arr.length; i++) {
        accumulator = reducer(accumulator, arr[i], i, arr);
    }

    return accumulator;
}

console.log('reduce');
console.log( reduce(
    [1, 2, 3, 4],
    function (accumulator, el) { return el * accumulator; },
    1
)); //? 24

console.log( reduce(
    [1, 2, 3, 4],
    function (accumulator, el) { return el + accumulator; },
    10
)); //? 20
