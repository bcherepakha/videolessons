export default class AddTaskForm {
    constructor( onTaskCreate ) {
        this.rootEl = document.querySelector('.header');
        this.completeAllEl = this.rootEl.elements.complete;
        this.taskTextEl = this.rootEl.elements.task;
        this.onTaskCreate = onTaskCreate;

        this.rootEl.addEventListener('submit', this.onSubmit.bind(this));
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
