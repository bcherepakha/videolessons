const str = 'Многое по JavaScript можно найти на сайте http://javascript.ru',
    regexp = /javascript/ig;
let result;

console.log( `Начальное значение lastIndex: ${regexp.lastIndex}`);

while (result = regexp.exec(str)) {
    console.log( `Найдено: ${result[0]} на позиции: ${result.index}` );
    console.log( `Свойство lastIndex: ${regexp.lastIndex}` );
}

console.log( `Конечное значение lastIndex: ${regexp.lastIndex}` );
