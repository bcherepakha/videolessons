const arr = [1, 8, 15, 17, 24, 99, 2, 7, 15];

function includes(arr, num) {
    let counter = 0;

    for (let i=0; i < arr.length; i++) {
        const val = arr[i];

        if (val === num) {
            // return true;
            counter++;
        }
    }

    return counter;
}

console.log(arr);

console.log( includes(arr, 15) );
console.log( includes(arr, 3) );

console.log( arr.includes(15) );
console.log( arr.includes(3) );

function flat(arrOfArrays) {
    const result = [];

    for (let i=0; i < arrOfArrays.length; i++) {
        const arr = arrOfArrays[i];

        for (let j=0; j < arr.length; j++) {
            result.push(arr[j]);
        }
    }

    return result;
}

console.log(
    flat( [[1, 2, 4], [1, 2, 3], [ [5, 6, 7], [8, 9, 10], [12, [ 14, 15 ] ] ]] )
);

console.log(
    [[1, 2, 4], [1, 2, 3], [ [5, 6, 7], [8, 9, 10], [12, [ 14, 15 ] ] ]].flat(4)
);
