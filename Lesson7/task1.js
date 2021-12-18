/* eslint-disable no-unused-vars */
//? 1. Вывести в консоль числа от 1 до n, где n - это произвольное целое число большее 1.
//? 2. Вывести в консоль простые числа от 1 до n.
// 3. Вывести в консоль числа кратные k, в диапазоне от 1 до n. => in home (for)
// 4. В первых трех задачах добавить пользователю возможность ввести значения переменных. => in home
// 5. Выводить в консоль простые числа от 1 до n до тех пор, пока пользователь не скажет хватить.

function consoleNumbers( n ) {
    const result = [];

    for (let i=1; i <= n; i++) {
        result.push(i);
    }

    return result;
}

function isSimple( n ) {
    for (let d = 2; d < n; d++) {
        if (n % d === 0) {
            return false;
        }
    }

    return true;
}

function getSimpleNumbers( n ) {
    const result = [];

    for (let i=1;  i<=n; i++) {
        if (isSimple(i)) {
            result.push(i);
        }
    }

    return result;
}

const simpleNumbers = getSimpleNumbers(100);

console.log( simpleNumbers );
console.log( simpleNumbers.length );
