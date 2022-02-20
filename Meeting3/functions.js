function greet(name) {
    if (name === 'Johnny') {
        return "Hello, my love!";
    }

    return `Hello, ${name}!`;
}

function lovefunc(flower1, flower2) {
    return (flower1 + flower2) % 2 === 1;
}

function rentalCarCost(numDays) {
    const rentCarValue = 40;
    const rentBasicCost = numDays * rentCarValue;

    if ( numDays < 3 ) {
        return rentBasicCost;
    }

    if ( numDays < 7 ) {
        return rentBasicCost - 20;
    }

    return rentBasicCost - 50;
}

console.log( rentalCarCost(1) === 40 );
console.log( rentalCarCost(2) === 80 );

// -20$
console.log( rentalCarCost(3) === 100 );
console.log( rentalCarCost(4) === 140 );
console.log( rentalCarCost(5) === 180 );
console.log( rentalCarCost(6) === 220 );

// -50$
console.log( rentalCarCost(7)  === 230 );
console.log( rentalCarCost(8)  === 270 );
console.log( rentalCarCost(9)  === 310 );
console.log( rentalCarCost(10) === 350 );
