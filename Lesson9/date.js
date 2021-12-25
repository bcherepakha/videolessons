const currentDate = new Date();
const newYearDate = new Date(currentDate.getFullYear() + 1, 0, 1, 0, 0, 0, 0);
const timeDiff = Math.floor((newYearDate.getTime() - currentDate.getTime()) / (1000*60*60*24));
const timeDiffRest = (newYearDate.getTime() - currentDate.getTime()) % (1000*60*60*24);
const timeDiffHH = timeDiffRest / (1000*60*60);

// const titleEl = document.querySelector('h1');
const currentDayEl = document.querySelector('.current-day');
const newYearDay = document.querySelector('.new-year');
const todaySpanEl = currentDayEl.querySelector('span');
const newYearSpanEl = newYearDay.querySelector('span');

console.dir( document.body );

todaySpanEl.innerText = currentDate.toString();
newYearSpanEl.innerHTML = `${timeDiff} days`;

const newYearHHSpanEl = document.createElement('span');

newYearHHSpanEl.innerText = ` ${Math.floor(timeDiffHH)} hours`;

console.log( newYearHHSpanEl );

newYearDay.append( ...[newYearHHSpanEl] );


const firstDateOfMonth = new Date( currentDate );

firstDateOfMonth.setDate(1);

const lastDateOfMonth = new Date(firstDateOfMonth);

lastDateOfMonth.setMonth( lastDateOfMonth.getMonth() + 1 );
lastDateOfMonth.setDate( 0 );
