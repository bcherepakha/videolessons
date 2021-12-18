/**
 * Напишите код, выполнив задание из каждого пункта отдельной строкой:

    1.  Создайте пустой объект user.
    2.  Добавьте свойство name со значением Alexander.
    3.  Добавьте свойство group со значением fe2809
    4.  Измените значение свойства name на Ilya.
    5.  Удалите свойство name из объекта.
    6.  Создайте копию обьекта user.
    7.  Проверьте, что созданный обьект не пустой.
    8.  Узнайте количество свойств в нем.
    9.  Измените в копии свойство name на Ivan.
    10. Сравните свойства этих двух обьектов и придумайте структуру данных для отображения их разницы.
*/
const user = {
    name: 'Alexander',
    group: 'fe2809',
};

console.log( user.group );

user.group = 'videolessons';

console.log( user.group );

delete user.group;

console.log( user );

user['group'] = 'fe2809';

let key = 'name';

console.log( user[key] );
console.log( user.key );

console.log( user );

for (const key in user) {
    console.log('key: ', key);
    console.log('value:', user[key]);
}

const user2 = {};

for (const key in user) {
    user2[key] = user[key];
}

user2.name = 'Vasya';

console.log( user2 );
console.log( user );
