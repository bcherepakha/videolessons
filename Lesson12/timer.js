function Timer( rootEl ) {
    this.rootEl = rootEl;
    this.showEl = this.rootEl.querySelector('span');
    this.startBtn = this.rootEl.querySelector('[data-action="start"]');

    this.startTime = null;
    this.timerID = null;

    this.startBtn.addEventListener('click', this.run.bind(this));

    this.render();
}

Timer.prototype.run = function () {
    this.startTime = Date.now();
    this.timerID = setInterval(this.render.bind(this), 1000);
};

Timer.prototype.getTime = function () {
    if (!this.startTime) {
        return 0;
    }

    return Date.now() - this.startTime;
};


Timer.prototype.getTimeStr = function () {
    const time = Math.floor(this.getTime() / 1000);
    const ss = time % 60;
    const mm = Math.floor((time % 3600) / 60);
    const hh = Math.floor(time / 3600);

    return [hh,mm,ss]
        .map(num => num.toString().padStart(2, '0'))
        .join(':');
};

Timer.prototype.render = function () {
    const timeStr = this.getTimeStr();

    this.showEl.innerText = timeStr;
};

const timerEl = document.querySelector('.timer');

console.log( timerEl );

console.log( new Timer( timerEl ) );
