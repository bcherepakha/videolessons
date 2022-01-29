const WAIT_FOR_INPUT = 500;

function whitWait(fn, time = WAIT_FOR_INPUT) {
    let timeoutID;

    return function () {
        if (timeoutID) {
            clearTimeout(timeoutID);
        }

        timeoutID = setTimeout(() => fn.apply(this, arguments), time);
    }
}

export default class AddTaskForm {
    constructor( onTaskCreate, onSearch ) {
        this.rootEl = document.querySelector('.header');
        this.completeAllEl = this.rootEl.elements.complete;
        this.taskTextEl = this.rootEl.elements.task;
        this.onTaskCreate = onTaskCreate;
        this.onSearch = onSearch;

        this.rootEl.addEventListener('submit', this.onSubmit.bind(this));
        this.taskTextEl.addEventListener('input', whitWait(this.onChange.bind(this)));
    }

    get search() {
        return this.taskTextEl.value;
    }

    onChange(e) {
        if (this.onSearch) {
            this.onSearch( this.taskTextEl.value );
        }
    }

    onSubmit(e) {
        e.preventDefault();
        // console.log( this.completeAllEl.checked, this.taskTextEl.value);
        const {
            completeAllEl: { checked: completed },
            taskTextEl: { value: text }
        } = this;
        const task = { completed, text };

        this.taskTextEl.value = '';

        if (this.onTaskCreate) {
            this.onTaskCreate(task);
        }
    }
}
