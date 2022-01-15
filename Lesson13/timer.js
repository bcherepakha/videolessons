import { EventSource } from './EventSource.js';

export class Timer extends EventSource {
    constructor( rootEl ) {
        super();
        this.rootEl = rootEl;
        this.showEl = this.rootEl.querySelector('span');
        this.startBtn = this.rootEl.querySelector('[data-action="start"]');

        this.startTime = null;
        this.timerID = null;

        this.startBtn.addEventListener('click', this.run.bind(this));

        this.render();
    }

    run() {
        console.log('run');
        this.startTime = Date.now();
        this.timerID = setInterval(this.render.bind(this), 1000);
        this.dispatchEvent('run');
    }

    getTime() {
        if (!this.startTime) {
            return 0;
        }

        return Date.now() - this.startTime;
    }

    getTimeStr() {
        const time = Math.floor(this.getTime() / 1000);
        const ss = time % 60;
        const mm = Math.floor((time % 3600) / 60);
        const hh = Math.floor(time / 3600);

        return [hh,mm,ss]
            .map(num => num.toString().padStart(2, '0'))
            .join(':');
    }

    render() {
        const timeStr = this.getTimeStr();

        this.showEl.innerText = timeStr;
    }

}
