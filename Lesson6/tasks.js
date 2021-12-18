//? 1. Проверить является ли число круглым
//? 2. Получить у пользователя два числа и узнать остаток от деления первого на второе
//? 3. Получить у пользователя строку и узнать ее длину
//? 4. Получить у пользователя два числа и назвать наибольшее
//? 5. Получить у пользователя число и сказать входит ли оно в диаппазон от 30 до 50
// 6. Для доступа на сайт нужно ввести логин и пароль.
//    На сайте зарегистрировано четыре пользователя с паролями.
//    Получите у пользователя логин и пароль и скажите имеет ли он доступ на сайт

function isRound( num ) {
    return (num % 10) === 0;
}

function getModulo(a, b) {
    return a % b;
}

console.log( getModulo(10, 3) );

function getNumber() {
    let firstNum = prompt('Enter first number', '');

    if (firstNum === null) {
        alert('You not enter the number');
    } else {
        firstNum = parseInt(firstNum, 10);

        if (isNaN(firstNum)) {
            alert('Wrong number');
        }

        return firstNum;
    }

    return null;
}

let firstNum = getNumber();
let secondNum = getNumber();

if (firstNum !== null && secondNum !== null) {
//? true && true => true
//? true && false => false
//? false && true => false
//? false && false => false
    console.log( `Остаток от деления ${firstNum} на ${secondNum}: `, getModulo(firstNum, secondNum) );
}
