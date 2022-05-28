function login(userName, passwd) {
    if (userName === 'user1') {
        return passwd === 'qwerty';
    }

    if (userName === 'user2') {
        return passwd === 'zxcvbn';
    }

    return false;
}

console.log(login('user1', 'qwerty')); // true
console.log(login('user2', 'asdfgh')); // false
console.log(login('user3', 'asdfgh')); // false
