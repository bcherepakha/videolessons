function getMissingElement(superImportantArray) {
    // const sortedArr = [...superImportantArray].sort();

    // for (let i = 0; i < sortedArr.length; i = i + 1) {
    //     if (i !== sortedArr[i]) {
    //         return i;
    //     }
    // }
    const arrSum = superImportantArray.reduce(
        function (sum, num) {
            return sum + num;
        },
        0
    );
    const expextedResult = 45;

    return expextedResult - arrSum;
}

console.log(getMissingElement( [0,5,1,3,2,9,7,6,4] ), 8);
console.log(getMissingElement( [9,2,4,5,7,0,8,6,1] ), 3);
console.log(getMissingElement( [1,2,3,4,5,6,7,8,9] ), 0);
