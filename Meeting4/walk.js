function isValidWalk(walk) {
    if (walk.length !== 10) {
        return false;
    }

    // for (let i=0; i < walk.length; i++) {
    //     if (!(walk[i] in counter)) {
    //         return false;
    //     }

    //     counter[walk[i]] += 1;
    // }

    const counter = walk.reduce(
        function (counter, letter) {
            counter[letter] += 1;

            return counter;
        },
        {
            n: 0,
            s: 0,
            w: 0,
            e: 0
        }
    );

    return counter.n === counter.s && counter.w === counter.e;
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
console.log(isValidWalk(['w']), 'should return false');
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');
