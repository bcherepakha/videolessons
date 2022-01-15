import { Timer } from './timer.js';

const timerEl = document.querySelector('.timer');
const timer = new Timer( timerEl );

console.log( timer );

console.dir( Timer );

timer.addEventListener('run', function (e) {
    console.log('timer start', e);
})
