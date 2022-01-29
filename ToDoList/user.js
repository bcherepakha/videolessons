const user = {
    firstName: 'Vasya',
    lastName: 'Pupkin'
}

Object.defineProperty(user, 'fullName', {
    set: function setFullName(newValue) {
        const [firstName, ...lastName] = newValue.split(' ');

        this.firstName = firstName;
        this.lastName = lastName.join(' ');
    },
    get: function getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
});

console.log( user.fullName );

user.fullName = 'Petya Qwertin Voithovsky';

console.log( user );

user.firstName = 'Sasha';

console.log( user.fullName, user);
