function Car() {
    //? this = {};
    //? this.__proto__ = Car.prototype;

    this.position = 0;
    this.speed = 0;

    //? return this;
}

Car.prototype.run = function (t, a) {
    this.position += this.speed*t + a*t*t;
    this.speed += a*t;
}

const bmw = new Car();

bmw.run(10, 10);

console.log( bmw.position );
console.log( bmw );
console.log( bmw.__proto__ );
