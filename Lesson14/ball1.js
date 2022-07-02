class Ball {
    constructor() {
        this.root = document.querySelector('.circle');
        this._moving = Promise.resolve();
    }

    setPosition(x, y) {
        const p = new Promise((resolve) => {
            this.root.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;

            this.root.addEventListener('transitionend', function() {
                resolve();
            }, { once: true });
        });

        return p;
    }

    move(x, y) {
        this._moving = this._moving
            .then(() => this.setPosition(x, y))
            .then(() => console.log('on position', x, y, this.root.style.transform));
    }
}

const ball = new Ball();

window.addEventListener('click', function (e) {
    console.log(e);

    ball.move(e.clientX, e.clientY);
});
