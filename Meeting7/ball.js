class Ball {
    constructor(selector, speed) {
        this.el = document.querySelector(selector);
        this.speed = speed;

        const rect = this.el.getBoundingClientRect();
        const ballCenterX = rect.left + rect.width / 2;
        const ballCenterY = rect.top + rect.height / 2;

        this.movement = Promise.resolve({
            x: ballCenterX,
            y: ballCenterY
        });
    }

    setPosition(x, y) {
        this.el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    }

    move(x, y) {
        this.movement = this.movement
            .then((centerCoords) => new Promise(resolve => {
                // speed = d / t;
                // t = d / speed;
                const d = Math.sqrt(Math.pow(centerCoords.x - x, 2) + Math.pow(centerCoords.y - y, 2));
                const t = d / this.speed;

                if (!isNaN(t)) {
                    this.el.style.setProperty('--transformTime', `${t.toFixed(4)}s`);
                }

                this.el.addEventListener('transitionend', () => resolve({x, y}), { once: true });

                this.setPosition(x, y);
            }));
    }
}

const ball = new Ball('.circle', 500);

console.log(ball);

window.addEventListener('click', (e) => {
    ball.move(e.clientX, e.clientY);
});
