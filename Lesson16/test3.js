console.log( 'Гоп-стоп'.match(/[гт]оп/gi) );
console.log( 'Вуаля'.match(/В[уа]ля/) );
console.log( 'Exception 0xAF'.match(/x[0-9A-F][0-9A-F]/g) );
console.log( 'The sun is rising!'.match(/\w+/g) );
console.log( 'Солнце встаёт!'.match(/\w+/g) );
console.log( 'Солнце (the sun) встаёт!'.match(/[\wа-я]+/gi) );
console.log( 'Солнце (the sun) встаёт!'.match(/[\wа-яё]+/gi) );
