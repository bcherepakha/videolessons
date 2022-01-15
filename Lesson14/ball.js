class Ball {
    constructor(el) {
        this.rootEl = el;

        this.calcCenter();
        this._move = Promise.resolve();
    }

    calcCenter() {
        const rect = this.rootEl.getBoundingClientRect();

        this.rootEl.style.left = `${-rect.width / 2}px`;
        this.rootEl.style.top = `${-rect.height / 2}px`;
    }

    addMove(x, y) {
        this._move = this._move
            .then(() => this.move(x, y));
    }

    move(x = 0, y = 0) {
        const currentTransform = `translate(${x}px, ${y}px)`;
        const currentMove = new Promise(resolve => {
            const promiseDone = (e) => {
                if (currentTransform === e.target.style.transform) {
                    resolve();
                }

                e.target.removeEventListener('transitionend', promiseDone);
            };

            this.rootEl.style.transform = currentTransform;

            this.rootEl.addEventListener('transitionend', promiseDone);
        });

        return currentMove;
    }
}

const ball = new Ball(document.querySelector('.circle'));

document.addEventListener('click', function (e) {
    console.log( e.clientX, e.clientY, ball );
    ball.addMove(e.clientX, e.clientY);
});
