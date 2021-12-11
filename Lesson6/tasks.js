//? 1. Проверить является ли число круглым
//? 2. Получить у пользователя два числа и узнать остаток от деления первого на второе
//? 3. Получить у пользователя строку и узнать ее длину
//? 4. Получить у пользователя два числа и назвать наибольшее
//? 5. Получить у пользователя число и сказать входит ли оно в диаппазон от 30 до 50
// 6. Для доступа на сайт нужно ввести логин и пароль.
//    На сайте зарегистрировано четыре пользователя с паролями.
//    Получите у пользователя логин и пароль и скажите имеет ли он доступ на сайт

function isRound( n ) {
    return n % 10 === 0;
}

console.log(10, isRound( 10 ) );
console.log(15, isRound( 15 ) );
console.log(22, isRound( 22 ) );
console.log(17, isRound( 17 ) );
console.log(44, isRound( 44 ) );

//? 2. Получить у пользователя два числа и узнать остаток от деления первого на второе
function mod( a, b ) {
    return a % b;
}

console.log('13 % 5 =', mod(13, 5) );

function getStringLength( str ) {
    return str.length;
}

console.log('Hello', getStringLength( 'Hello' ));

function getMax( a, b ) {
    if (a >= b) {
        return a;
    } else {
        return b;
    }
}

console.log('2 Vs 5', getMax(2, 5));
console.log('8 Vs 5', getMax(8, 5));
console.log('-8 Vs 5', getMax(-8, 5));

function checkNumInRange( num, start, end ) {
    // return num > start && num < end;

    if ((num <= start) || (num >= end)) {
        return false;
    } else {
        return true;
    }

    // if (num > start) {
    //     if (num < end) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // } else {
    //     return false;
    // }
}

//? && (AND, *)
//? true && true === true           1*1 === 1
//? true && false === false         1*0
//? false && true === false         0*1
//? false && false === false        0*0

//? || (OR, +)
//? true || true === true           1 + 1 === 1
//? true || false === true          1 + 0
//? false || true === true          0 + 1
//? false || false === false        0 + 0 === 0

console.log('5 in 2 ... 12', checkNumInRange( 5, 2, 12 ) );
console.log('15 in 2 ... 12', checkNumInRange( 15, 2, 12 ) );
console.log('-5 in 2 ... 12', checkNumInRange( -5, 2, 12 ) );
