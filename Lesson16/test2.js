const reg =/".+?"/g,
    str = 'a "witch" and her "broom" is one';

console.log( str.match(reg) ); // witch, broom
console.log( `123 456`.match(/\d+ \d+?/g) ); // 123 4
