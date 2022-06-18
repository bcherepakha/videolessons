function isValidWalk(walk) {
    if (walk.length !== 10) {
        return false;
    }

    // const nCount = walk.filter(function(letter) { return letter === 'n'; }).length;
    // let count = {
    //     n: 0,
    //     s: 0,
    //     w: 0,
    //     e: 0
    // };

    // for (let i=0; i < walk.length; i++) {
    //     const letter = walk[i];

    //     count[letter] = count[letter] + 1;

    //     // if (letter === 'n') {
    //     //     count[letter] = count[letter] + 1;
    //     // }

    //     // if (letter === 's') {
    //     //     count[letter] = count[letter] + 1;
    //     // }

    //     // if (letter === 'w') {
    //     //     count[letter] = count[letter] + 1;
    //     // }

    //     // if (letter === 'e') {
    //     //     count[letter] = count[letter] + 1;
    //     // }
    // }

    const count = walk.reduce(
        function (count, letter) {
            count[letter] = count[letter] + 1;

            return count;
        },
        {
            n: 0,
            s: 0,
            w: 0,
            e: 0
        }
    );

    // count 'n' === count 's'
    // count 'w' === count 'e'

    // console.log({ length: walk.length, count, result: count.n === count.s && count.w === count.e  });

    return count.n === count.s && count.w === count.e;
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
console.log(isValidWalk(['w']), 'should return false');
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');
