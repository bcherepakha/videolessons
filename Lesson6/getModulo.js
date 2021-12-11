function getModulo() {
    const a = prompt('Введите число: ');

    if (a === null) {
        alert('Вы отказались вводить число');

        return ;
    }

    const n1 = parseFloat( a );

    if ( isNaN(n1) ) {
        alert('Вы ввели не число.');

        return ;
    }

    const b = prompt('Введите делитель: ');

    if (b === null) {
        alert('Вы отказались вводить делитель');

        return ;
    }

    const n2 = parseFloat( b );

    if ( isNaN(n1) ) {
        alert('Вы ввели не число.');

        return ;
    }

    // alert('Остаток от деления ' + n1 + ' на ' + n2 + ' будет равен ' + mod(n1, n2) );
    alert(`Остаток от деления ${n1} на ${n2} будет равен ${n1 % n2}` );
}

getModulo();
