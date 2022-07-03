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

// console.log( 'ANCESTRY_DATA', ANCESTRY_DATA );

/** Дана информация о людях ANCESTRY_DATA
 *
 * Используя этот набор данных, подсчитайте:
 *
 * 1. среднюю разницу в возрасте между матерями и их детьми.
 * 2. среднюю разницу в возрасте между родителями
 * 3. среднее количество детей в семье
 * 4. среднюю продолжительность жизни детей в семье
 * 5. средний возраст людей для каждого из столетий.
 * Назначаем столетию людей, беря их год смерти, деля его на 100 и округляя:
 * `Math.ceil(person.died / 100)`.
*/

function getCentury(person) {
    return Math.ceil(person.died / 100);
}

function getLifeTime(person) {
    return person.died - person.born;
}

function searchPerson(name, data = ANCESTRY_DATA) {
    return data.find(function (person) {
        return person.name === name;
    });
}

function getAgeDiff(person1, person2) {
    return person1.born - person2.born;
}

function averageArr(arr) {
    return arr.reduce(
        (sum, el) => sum + el,
        0
    ) / arr.length;
}

function task1(data = ANCESTRY_DATA) {
    return averageArr(
        data.map(function (child) {
            if (!child.mother) {
                return null;
            }

            const mother = searchPerson(child.mother, data);

            // !undefined === true
            // !{} === false
            if (!mother) {
                return null;
            }

            const ageDiff = getAgeDiff(child, mother);

            if (isNaN(ageDiff)) {
                return null;
            }

            return ageDiff;
        }).filter(num => num !== null)
    );
}

console.log('task1: ', task1(ANCESTRY_DATA));

function task2(data = ANCESTRY_DATA) {
    return averageArr(
        data.map(child => {
            if (!child.mother) {
                return 'mother name not found';
            }

            const mother = searchPerson(child.mother);

            if (!mother) {
                return 'mother not found';
            }

            if (!child.father) {
                return 'father name not found';
            }

            const father = searchPerson(child.father);

            if (!father) {
                return 'father not found';
            }

            const ageDiff = getAgeDiff(mother, father);

            if (isNaN(ageDiff)) {
                return 'can not calc age diff';
            }

            return ageDiff;
            // return Math.abs(ageDiff);
        }).filter(num => typeof num === 'number')
    );
}

console.log('task2: ', task2(ANCESTRY_DATA));

function getFamilyKey(motherName = 'mother unknown', fatherName = 'father unknown') {
    return `${motherName} vs ${fatherName}`;
}

/**
 * {
 *  key: string
 *  father: Person
 *  mother: Person
 *  children: Person[]
 * }
 */
function getFamilies(data) {
    return data.reduce(
        function (families, person) {
            const familyKey = getFamilyKey(person.mother, person.father);
            let family = families.find(family => family.key === familyKey);

            if (!family) {
                family = {
                    key: familyKey,
                    father: searchPerson(person.father, data),
                    mother: searchPerson(person.mother, data),
                    children: []
                };

                families.push(family);
            }

            family.children.push(person);

            return families;
        },
        []
    );
}

console.log('families', getFamilies(ANCESTRY_DATA));

function task3(data) {
    const families = getFamilies(data);
    const childrenCounts = families.map(family => family.children.length);

    return averageArr(childrenCounts);
}

console.log('task3: ', task3(ANCESTRY_DATA));

function task4v1(data) {
    const families = getFamilies(data);

    families.forEach(family => {
        family.childrenLifeTime = family.children
            .map(child => getLifeTime(child))
            .filter(lifeTime => !isNaN(lifeTime));

        family.averageChildrenLifeTime = averageArr(family.childrenLifeTime);
    });

    return averageArr(families.map(family => family.averageChildrenLifeTime));
}

console.log('task 4 v1: ', task4v1(ANCESTRY_DATA));

function task4v2(data) {
    return averageArr(
        getFamilies(data)
        .reduce(
            (children, family) => children.concat(family.children),
            [] // [family0.child0, family0.child1, family1.child0, family1.child1]
        )
        .map(child => getLifeTime(child))
        .filter(lifeTime => !isNaN(lifeTime))
    );
}

console.log('task 4 v2: ', task4v2(ANCESTRY_DATA));

// { 18: Person[], 19: Person[] }
function task5(data) {
    const centuries = data.reduce(
        function (centuries, person) {
            const century = getCentury(person);

            if (isNaN(century)) {
                return centuries;
            }

            let persons = centuries[century];

            if (!persons) {
                persons = [];
                centuries[century] = persons;
            }

            persons.push(person);

            return centuries;
        },
        {}
    );

    for (const century in centuries) {
        const persons = centuries[century];

        // getLifeTime(person, idx, persons)
        centuries[century] = averageArr(persons.map(getLifeTime));
        // centuries[century] = averageArr(persons.map(
        //     person => getLifeTime(person)
        // ));
    }

    return centuries;
}

console.log('task 5', task5(ANCESTRY_DATA));
