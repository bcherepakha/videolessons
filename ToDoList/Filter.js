import EventSource from './EventSource.js';

export class Filter extends EventSource {
    constructor() {
        super();
        this.rootEl = document.querySelector('.filters');
        this.links = Array.from(this.rootEl.querySelectorAll('a'));
        this.value = 'all';
        this.availableValues = this.getAvailableValues();

        let value = this.readValueFromURL(location);

        if (value && this.availableValues.includes(value)) {
            this.value = value;
        }

        this.links.forEach(link => {
            link.addEventListener('click', this.clickHandler.bind(this));
        });

        this.render();
    }

    clickHandler(e) {
        e.preventDefault();
        const { currentTarget } = e;
        const { href } = currentTarget;
        const filterValue = this.readValueFromURL(currentTarget);

        if (filterValue !== this.value) {
            history.pushState(null, null, href);

            this.setValue(filterValue);
        }
    }

    setValue(filterValue) {
        this.value = filterValue;
        this.render();
        this.dispatch('change');
    }

    getAvailableValues() {
        return this.links.map(this.readValueFromURL);
    }

    readValueFromURL(link) {
        const { search } = link;
        const params = new URLSearchParams(search);
        const value = params.get('filter');

        return value;
    }

    render() {
        this.links.forEach(link => {
            if (this.readValueFromURL(link) === this.value) {
                link.classList.add('selected');
            } else {
                link.classList.remove('selected');
            }
        });

        return this.rootEl;
    }
}
