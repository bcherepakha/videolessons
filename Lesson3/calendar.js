function renderCalendar(month, year, calendarElement) {
    const monthName = renderCalendar.MONTHES[month];
    const title = `${monthName} ${year}`;

    calendarElement.querySelector('.calendar__title').innerText = title;

    const firstDayOfMonth = new Date();

    firstDayOfMonth.setDate(1);
    firstDayOfMonth.setMonth(month);
    firstDayOfMonth.setFullYear(year);

    const firstWeekDayOfMonth = firstDayOfMonth.getDay();
    const firstRenderDay = new Date(firstDayOfMonth);
    // const firstDayShift = firstWeekDayOfMonth === 0 ? 6 : firstWeekDayOfMonth - 1;
    const firstDayShift = (6 + firstWeekDayOfMonth) % 7;

    firstRenderDay.setDate(firstRenderDay.getDate() - firstDayShift);

    const lastDateOfMonth = new Date(firstDayOfMonth);

    lastDateOfMonth.setMonth(month+1);
    lastDateOfMonth.setDate(0);

    const lastWeekDayOfMonth = lastDateOfMonth.getDay();
    const lastRenderDay = new Date(lastDateOfMonth);
    const lastDayShift = (7 - lastWeekDayOfMonth) % 7;

    lastRenderDay.setDate(lastRenderDay.getDate() + lastDayShift);

    const days = [];

    for (
        const renderDay = new Date(firstRenderDay);
        renderDay <= lastRenderDay;
        renderDay.setDate(renderDay.getDate() + 1)
    ) {
/*      <li class="calendar__day calendar__day--not-in-month">
            <a aria-label="Mon, 24 Fevruary, 2020" href="?day=2020-02-24">24</a>
        </li> */

        const dayEl = document.createElement('li');

        dayEl.className = 'calendar__day';

        if (renderDay.getMonth() !== month) {
            dayEl.classList.add('calendar__day--not-in-month');
        }

        const link = document.createElement('a');

        link.setAttribute('aria-label', renderDay.toLocaleString());
        link.href = `?day=${renderDay.toJSON()}`;

        link.innerText = renderDay.getDate();

        dayEl.append(link);

        days.push(dayEl);
    }

    const daysContaner = calendarElement.querySelector('.calendar__days');

    daysContaner.innerText = '';

    daysContaner.append( ...days );
}

renderCalendar.MONTHES = [
    'Jan',
    'Feb',
    'March',
    'Apr',
    'May',
    'Jun',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];

const calendarElement = document.querySelector('.calendar');
const calendarPrevBtn = calendarElement.querySelector('.calendar__btn--prev');
const calendarNextBtn = calendarElement.querySelector('.calendar__btn--next');
let currentDay = new Date('2022-03-10');
const calendar = {
    month: currentDay.getMonth(),
    fullYear: currentDay.getFullYear()
};

renderCalendar(calendar.month, calendar.fullYear, calendarElement);

calendarPrevBtn.addEventListener('click', function () {
    const firstDayOfMonth = new Date(calendar.fullYear, calendar.month, 1);

    firstDayOfMonth.setMonth(firstDayOfMonth.getMonth() - 1);

    calendar.month = firstDayOfMonth.getMonth();
    calendar.fullYear = firstDayOfMonth.getFullYear();

    renderCalendar(calendar.month, calendar.fullYear, calendarElement);
});
