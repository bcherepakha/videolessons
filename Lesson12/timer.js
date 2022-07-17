function Timer( rootEl ) {
    this.rootEl = rootEl;
    this.showEl = this.rootEl.querySelector('span');
    this.startBtn = this.rootEl.querySelector('[data-action="start"]');
    this.pauseBtn = this.rootEl.querySelector('[data-action="pause"]');
    this.resetBtn = this.rootEl.querySelector('[data-action="reset"]');
    this.stopBtn = this.rootEl.querySelector('[data-action="stop"]');

    this.startTime = null;
    this.shiftTime = 0;
    this.timerID = null;
    this.status = Timer.STOP;

    if (this.startBtn) {
        this.startBtn.addEventListener('click', this.run.bind(this));
    }

    if (this.pauseBtn) {
        this.pauseBtn.addEventListener('click', this.pause.bind(this));
    }

    if (this.resetBtn) {
        this.resetBtn.addEventListener('click', this.reset.bind(this));
    }

    if (this.stopBtn) {
        this.stopBtn.addEventListener('click', this.stop.bind(this));
    }

    this.render();
}

Timer.RUN = 'RUN';
Timer.STOP = 'STOP';
Timer.PAUSE = 'PAUSE';

Timer.prototype.run = function () {
    if (this.status === Timer.STOP) {
        this.shiftTime = 0;
    }

    if (this.status === Timer.RUN) {
        return ;
    }

    this.startTime = Date.now();
    this.timerID = setInterval(this.render.bind(this), 1000);
    this.status = Timer.RUN;

    this.render();
};

Timer.prototype.pause = function () {
    clearInterval(this.timerID);
    this.timerID = null;

    if (this.startTime) {
        this.shiftTime = this.getTime();
        this.startTime = null;
    }

    this.render();
    this.status = Timer.PAUSE;
}

Timer.prototype.stop = function () {
    this.pause();
    this.status = Timer.STOP;
}

Timer.prototype.reset = function () {
    this.startTime = null;
    this.shiftTime = 0;
    this.timerID = null;
    this.status = Timer.STOP;

    this.render();
}

Timer.prototype.getTime = function () {
    if (!this.startTime) {
        return this.shiftTime;
    }

    return this.shiftTime + Date.now() - this.startTime;
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
