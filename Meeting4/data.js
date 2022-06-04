/* eslint-disable no-unused-vars */
const ANCESTRY_DATA = [
    {
        'name': 'Carolus Haverbeke',
        'sex': 'm',
        'born': 1832,
        'died': 1905,
        'father': 'Carel Haverbeke',
        'mother': 'Maria van Brussel'
    },
    {'name': 'Emma de Milliano', 'sex': 'f', 'born': 1876, 'died': 1956, 'father': 'Petrus de Milliano', 'mother': 'Sophia van Damme'},
    {'name': 'Maria de Rycke', 'sex': 'f', 'born': 1683, 'died': 1724, 'father': 'Frederik de Rycke', 'mother': 'Laurentia van Vlaenderen'},
    {'name': 'Jan van Brussel', 'sex': 'm', 'born': 1714, 'died': 1748, 'father': 'Jacobus van Brussel', 'mother': 'Joanna van Rooten'},
    {'name': 'Philibert Haverbeke', 'sex': 'm', 'born': 1907, 'died': 1997, 'father': 'Emile Haverbeke', 'mother': 'Emma de Milliano'},
    {'name': 'Jan Frans van Brussel', 'sex': 'm', 'born': 1761, 'died': 1833, 'father': 'Jacobus Bernardus van Brussel', 'mother':null},
    {'name': 'Pauwels van Haverbeke', 'sex': 'm', 'born': 1535, 'died': 1582, 'father': 'N. van Haverbeke', 'mother':null},
    {'name': 'Clara Aernoudts', 'sex': 'f', 'born': 1918, 'died': 2012, 'father': 'Henry Aernoudts', 'mother': 'Sidonie Coene'},
    {'name': 'Emile Haverbeke', 'sex': 'm', 'born': 1877, 'died': 1968, 'father': 'Carolus Haverbeke', 'mother': 'Maria Sturm'},
    {'name': 'Lieven de Causmaecker', 'sex': 'm', 'born': 1696, 'died': 1724, 'father': 'Carel de Causmaecker', 'mother': 'Joanna Claes'},
    {'name': 'Pieter Haverbeke', 'sex': 'm', 'born': 1602, 'died': 1642, 'father': 'Lieven van Haverbeke', 'mother':null},
    {'name': 'Livina Haverbeke', 'sex': 'f', 'born': 1692, 'died': 1743, 'father': 'Daniel Haverbeke', 'mother': 'Joanna de Pape'},
    {'name': 'Pieter Bernard Haverbeke', 'sex': 'm', 'born': 1695, 'died': 1762, 'father': 'Willem Haverbeke', 'mother': 'Petronella Wauters'},
    {'name': 'Lieven van Haverbeke', 'sex': 'm', 'born': 1570, 'died': 1636, 'father': 'Pauwels van Haverbeke', 'mother': 'Lievijne Jans'},
    {'name': 'Joanna de Causmaecker', 'sex': 'f', 'born': 1762, 'died': 1807, 'father': 'Bernardus de Causmaecker', 'mother':null},
    {'name': 'Willem Haverbeke', 'sex': 'm', 'born': 1668, 'died': 1731, 'father': 'Lieven Haverbeke', 'mother': 'Elisabeth Hercke'},
    {'name': 'Pieter Antone Haverbeke', 'sex': 'm', 'born': 1753, 'died': 1798, 'father': 'Jan Francies Haverbeke', 'mother': 'Petronella de Decker'},
    {'name': 'Maria van Brussel', 'sex': 'f', 'born': 1801, 'died': 1834, 'father': 'Jan Frans van Brussel', 'mother': 'Joanna de Causmaecker'},
    {'name': 'Angela Haverbeke', 'sex': 'f', 'born': 1728, 'died': 1734, 'father': 'Pieter Bernard Haverbeke', 'mother': 'Livina de Vrieze'},
    {'name': 'Elisabeth Haverbeke', 'sex': 'f', 'born': 1711, 'died': 1754, 'father': 'Jan Haverbeke', 'mother': 'Maria de Rycke'},
    {'name': 'Lievijne Jans', 'sex': 'f', 'born': 1542, 'died': 1582, 'father':null, 'mother':null},
    {'name': 'Bernardus de Causmaecker', 'sex': 'm', 'born': 1721, 'died': 1789, 'father': 'Lieven de Causmaecker', 'mother': 'Livina Haverbeke'},
    {'name': 'Jacoba Lammens', 'sex': 'f', 'born': 1699, 'died': 1740, 'father': 'Lieven Lammens', 'mother': 'Livina de Vrieze'},
    {'name': 'Pieter de Decker', 'sex': 'm', 'born': 1705, 'died': 1780, 'father': 'Joos de Decker', 'mother': 'Petronella van de Steene'},
    {'name': 'Joanna de Pape', 'sex': 'f', 'born': 1654, 'died': 1723, 'father': 'Vincent de Pape', 'mother': 'Petronella Wauters'},
    {'name': 'Daniel Haverbeke', 'sex': 'm', 'born': 1652, 'died': 1723, 'father': 'Lieven Haverbeke', 'mother': 'Elisabeth Hercke'},
    {'name': 'Lieven Haverbeke', 'sex': 'm', 'born': 1631, 'died': 1676, 'father': 'Pieter Haverbeke', 'mother': 'Anna van Hecke'},
    {'name': 'Martina de Pape', 'sex': 'f', 'born': 1666, 'died': 1727, 'father': 'Vincent de Pape', 'mother': 'Petronella Wauters'},
    {'name': 'Jan Francies Haverbeke', 'sex': 'm', 'born': 1725, 'died': 1779, 'father': 'Pieter Bernard Haverbeke', 'mother': 'Livina de Vrieze'},
    {'name': 'Maria Haverbeke', 'sex': 'm', 'born': 1905, 'died': 1997, 'father': 'Emile Haverbeke', 'mother': 'Emma de Milliano'},
    {'name': 'Petronella de Decker', 'sex': 'f', 'born': 1731, 'died': 1781, 'father': 'Pieter de Decker', 'mother': 'Livina Haverbeke'},
    {'name': 'Livina Sierens', 'sex': 'f', 'born': 1761, 'died': 1826, 'father': 'Jan Sierens', 'mother': 'Maria van Waes'},
    {'name': 'Laurentia Haverbeke', 'sex': 'f', 'born': 1710, 'died': 1786, 'father': 'Jan Haverbeke', 'mother': 'Maria de Rycke'},
    {'name': 'Carel Haverbeke', 'sex': 'm', 'born': 1796, 'died': 1837, 'father': 'Pieter Antone Haverbeke', 'mother': 'Livina Sierens'},
    {'name': 'Elisabeth Hercke', 'sex': 'f', 'born': 1632, 'died': 1674, 'father': 'Willem Hercke', 'mother': 'Margriet de Brabander'},
    {'name': 'Jan Haverbeke', 'sex': 'm', 'born': 1671, 'died': 1731, 'father': 'Lieven Haverbeke', 'mother': 'Elisabeth Hercke'},
    {'name': 'Anna van Hecke', 'sex': 'f', 'born': 1607, 'died': 1670, 'father': 'Paschasius van Hecke', 'mother': 'Martijntken Beelaert'},
    {'name': 'Maria Sturm', 'sex': 'f', 'born': 1835, 'died': 1917, 'father': 'Charles Sturm', 'mother': 'Seraphina Spelier'},
    {'name': 'Jacobus Bernardus van Brussel', 'sex': 'm', 'born': 1736, 'died': 1809, 'father': 'Jan van Brussel', 'mother': 'Elisabeth Haverbeke'}
];

console.log( 'ANCESTRY_DATA', ANCESTRY_DATA );

/** Дана информация о людях ANCESTRY_DATA
 *
 * Используя этот набор данных, подсчитайте:
 *
 * 1. среднюю разницу в возрасте между матерями (отцами) и их детьми.
 * 2. среднюю разницу в возрасте между родителями
 * 3. среднее количество детей (средний возраст жизни) в семье
 * 4. средний возраст людей для каждого из столетий.
 * Назначаем столетию людей, беря их год смерти, деля его на 100 и округляя:
 * `Math.ceil(person.died / 100)`.
*/

function getWomen(data) {
    return data.filter(function (human) {
        return human.sex === 'f';
    });
}

function getWomanChildren(data, woman) {
    return data.filter(function (human) {
        return human.mother === woman.name;
    });
}

function getWomanChildrenAgeDiff(data, woman) {
    return getWomanChildren(data, woman)
        .map(function (child) {
            return getAgeDiff(woman, child)
        })
}

function getLifeAge(human) {
    return human.died - human.born;
}

function getAgeDiff(olderHuman, juniorHuman) {
    return juniorHuman.born - olderHuman.born;
    // return getLifeAge(juniorHuman) - getLifeAge(olderHuman);
}

function getAverage(arrOfNums) {
    return getSum(arrOfNums) / arrOfNums.length;
}

function getSum(arrOfNums) {
    let sum = 0;

    for (let i = 0; i < arrOfNums.length; i++) {
        sum += arrOfNums[i]; // sum = sum + arrOfNums[i];
    }

    return sum;
}

function getFamilyKey(human) {
    return `${human.mother} + ${human.father}`;
}

function getHuman(name, data) {
    return data.find(function (human) {
        return human.name === name;
    });
}

function addChildToFamily(family, child) {
    if (!family) {
        family = {
            key: getFamilyKey(child),
            children: [],
            mother: child.mother,
            father: child.father
        }
    }

    family.children.push(child);

    return family;
}

function getFamilies(data) {
    const families = {};

    data.forEach(function (human) {
        const familyKey = getFamilyKey(human);
        const family = families[familyKey];

        families[familyKey] = addChildToFamily(family, human);
    });

    return Object.values(families);
}

function getCentury(human) {
    return Math.ceil(human.died / 100);
}

function task1() {
    console.log(
        'task 1',
        getAverage(
            getWomen(ANCESTRY_DATA)
                .map(function (woman) {
                    return getWomanChildrenAgeDiff(ANCESTRY_DATA, woman);
                })
                .filter(function (ageDiffArr) {
                    return ageDiffArr.length > 0;
                })
                .flat(1)
        )
    );

    // console.log(
    //     getAverage([1, 3, 5])
    // );

    // console.log(
    //     getWomanChildren(
    //         ANCESTRY_DATA,
    //         {
    //             'name': 'Maria de Rycke',
    //             'sex': 'f',
    //             'born': 1683,
    //             'died': 1724,
    //             'father': 'Frederik de Rycke',
    //             'mother': 'Laurentia van Vlaenderen'
    //         }
    //     )
    // );

    // console.log(
    //     getWomanChildrenAgeDiff(
    //         ANCESTRY_DATA,
    //         {
    //             'name': 'Maria de Rycke',
    //             'sex': 'f',
    //             'born': 1683,
    //             'died': 1724,
    //             'father': 'Frederik de Rycke',
    //             'mother': 'Laurentia van Vlaenderen'
    //         }
    //     )
    // );

    // console.log(
    //     getAgeDiff(
    //         {'name': 'Jan van Brussel', 'sex': 'm', 'born': 1714, 'died': 1748, 'father': 'Jacobus van Brussel', 'mother': 'Joanna van Rooten'},
    //         {'name': 'Emma de Milliano', 'sex': 'f', 'born': 1876, 'died': 1956, 'father': 'Petrus de Milliano', 'mother': 'Sophia van Damme'},
    //     )
    // );
}

function task3() {
    console.log(
        'task 3',
        getAverage(
            getFamilies(ANCESTRY_DATA)
                .filter(function (families) {
                    // 'known' || null      -> 'known'  -> true
                    //  null   || 'father'  -> 'father' -> true
                    //  null   || null      ->  null    -> false
                    return families.mother || families.father;
                })
                .map(function (family) {
                    return family.children.length;
                })
        )
    );
}

function task2() {
    console.log(
        'task 2',
        getAverage(
            getFamilies(ANCESTRY_DATA)
                .map(function (family) {
                    const father = getHuman(family.father, ANCESTRY_DATA);
                    const mother = getHuman(family.mother, ANCESTRY_DATA);

                    return {
                        father, mother
                    }
                })
                .filter(function ({ father, mother }) {
                    // null && {...} && undefined -> null
                    // {...} && null && 1800 -> null
                    // {...1} && {...2} && undefined -> undefined
                    // {...1} && {...2} && 1900 -> 1900
                    return mother && father && mother.born && father.born;
                })
                .map(function ({ father, mother }) {
                    return Math.abs(getAgeDiff(father, mother));
                })
        )
    );

}

function task4() {
    console.log(
        'task 4',
        Object.entries(
            ANCESTRY_DATA
                .filter(function (human) { return human.died; })
                // .filter(human => human.died)
                .reduce(
                    function reducer(state, human) {
                        const century = getCentury(human);

                        if (!state[century]) {
                            state[century] = [];
                        }

                        state[century].push(getLifeAge(human));

                        return state;
                    },
                    {}
                )
        ).reduce(
            function (state, [century, ages]) {
                state[century] = getAverage(ages);

                return state;
            },
            {}
        )
    );
}

task1();
task3();
task2();
task4();
