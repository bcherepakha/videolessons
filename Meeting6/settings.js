export default class Settings {
    constructor (settingsSelector, onSubmit) {
        this.formEl = document.querySelector(settingsSelector);
        this.buttons = Array.from(this.formEl.querySelectorAll('.action'));
        this.robotName = this.getRobotName() || this.getSelectedRobot() || 'X';

        this.render();

        this.formEl.addEventListener('submit', e => {
            const { submitter } = e;
            const { value: robotName } = submitter;
            const { search } = location;
            const params = new URLSearchParams(search.toLowerCase());

            params.set('robotname', robotName);

            // location.href = `${origin}${pathname}?robotName=${robotName}`;
            // location.search = `?${params.toString()}`;

            history.pushState(null, null, `?${params.toString()}`);

            this.robotName = this.getRobotName();
            this.render();

            e.preventDefault();

            onSubmit();
        });
    }

    render() {
        this.buttons.forEach(btn => btn.dataset.selected = String(btn.value.toLowerCase() === this.robotName.toLowerCase()) );
    }

    getRobotName() {
        const params = new URLSearchParams(location.search.toLowerCase());

        return params.get('robotname');
    }

    getSelectedRobot() {
        const selectedBtn = this.buttons.find(btn => btn.dataset.selected === 'true');

        return selectedBtn && selectedBtn.value;
    }

}
