class Settings {
    constructor() {
        this.formEl = document.querySelector('.actions');

        this.robotNameEl = this.formEl.elements.robotName;

        this.eventSource = new EventSource();

        this.formEl.addEventListener('submit', this.onSubmit.bind(this));
    }

    getData() {
        return {
            robotName: this.robotNameEl.value
        };
    }

    onSubmit(e) {
        e.preventDefault();

        this.eventSource.dispatchEvent('submit');
    }
}
