/**
 * Дан обьект с баллами за задание
*/
const grade = {
    Anton: getRandomBall(0, 90),
    Maksym: 90,
    Vladyslav: getRandomBall(),
    Oleksii: getRandomBall(40),
    Vadim: getRandomBall(40, 70),
    Andrey: getRandomBall(15, 80)
};

function getRandomBall(min = 0, max = 100) {
    return Math.round( min + Math.random() * (max - min) );
}

console.log(grade);

/** Требуется:
 1. Указать имя учащегося с максимальным количеством баллов
 2. Указать максимальный балл.
 3. Указать средний балл.
 4. Указать учащегося с баллом ближайшим к среднему.
 5. Перечислить учащихся с баллом ниже среднего.
 6. Перечислить учащихся занявших первые три места в порядке убывания рейтинга.
 7. Перечислим всех учащихся в порядке убывания баллов.
*/

function getLeader( grade ) {
    let leaderName = '';

    for (const userName in grade) {
        //? true || true => true
        //? true || false => true
        //? false || true => true
        //? false || false => false
        if (!leaderName || grade[userName] > grade[leaderName]) {
            leaderName = userName;
        }
    }

    return leaderName;
}

console.log( 'Leader: ', getLeader( grade ) );

function getAverageBall( grade ) {
    let sum = 0;
    let count = 0;

    for (const name in grade) {
        sum += grade[name];
        count++;
    }

    return sum / count;
}

console.log( 'Average', getAverageBall( grade ) );

function getLatestUser( grade ) {
    const result = [];
    const avBall = getAverageBall( grade );

    for (const name in grade) {
        if (grade[name] < avBall) {
            result.push(name);
        }
    }

    return result;
}

console.log( 'Latest: ', getLatestUser( grade ) );

function getLeaders( grade ) {
    const result = [];
    let currentGrade = cloneObj( grade );

    for (let i=0; i < 3; i++) {
        const currentLeaderName = getLeader( currentGrade );

        delete currentGrade[currentLeaderName];

        result.push(currentLeaderName);
    }

    return result;
}

function cloneObj( grade ) {
    const result = {};

    for (const key in grade) {
        result[key] = grade[key];
    }

    return result;
}

console.log( 'Leaders: ', getLeaders( grade ) );
