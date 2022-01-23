import EventSource from './EventSource.js';

export class Task extends EventSource {
    constructor(data) {
        super();

        this.data = data;
        this.editing = false;
        this.createMarkup();

        Object.defineProperty(this, '_hidden', {
            configurable: true,
            enumerable: false,
            value: false,
            writable: true,
        });
    }

    get hidden() {
        return this._hidden;
    }

    set hidden(value) {
        this._hidden = value;

        this.render();
        this.dispatch('visibility-change');
    }

    createMarkup() {
        const el = document.createElement('li');
        const view = document.createElement('div');
        const completeEl = document.createElement('input');
        const textEl = document.createElement('span');
        const destroyBtn = document.createElement('button');
        const editEl = document.createElement('form');
        const editTextEl = document.createElement('input');
        const submitEl = document.createElement('button');

        view.className = 'view';
        view.append(completeEl, textEl, destroyBtn);

        completeEl.className = 'toggle';
        completeEl.type = 'checkbox';

        destroyBtn.className = 'destroy';

        editEl.append(editTextEl, submitEl);

        editTextEl.className = 'edit';
        submitEl.className = 'visually-hidden';
        submitEl.type = 'submit';
        submitEl.innerText = 'Изменить';

        el.append(view, editEl);

        completeEl.addEventListener('change', this.completeToggle.bind(this));
        destroyBtn.addEventListener('click', this.destroyBtnClick);
        addDbClick(textEl, this.startEditing.bind(this));
        editEl.addEventListener('submit', this.stopEditing.bind(this));

        this.rootEl = el;
        this.completeEl = completeEl;
        this.textEl = textEl;
        this.editTextEl = editTextEl;
    }

    startEditing() {
        this.editing = true;
        this.render();
    }

    stopEditing(e) {
        e.preventDefault();

        const { value } = this.editTextEl;
        const { data } = this;
        const newData = {
            ...data,
            text: value
        };

        this.dispatch('change', newData);

        this.editing = false;

        this.render();
    }

    remove() {
        this.rootEl.remove();
    }

    destroyBtnClick = () => {
        this.dispatch('destroy');
    }

    setData(newData) {
        this.data = {
            ...this.data,
            ...newData
        };

        this.render();
    }

    completeToggle() {
        const { data } = this;
        const newData = {
            ...data,
            completed: !data.completed
        };

        this.dispatch('change', newData);
        // this.render();
    }

    render() {
        const { data: { completed, text}, editing, hidden } = this;

        this.completeEl.checked = completed;
        this.textEl.innerText = text;
        this.editTextEl.value = text;
        this.rootEl.hidden = hidden;

        if (completed) {
            this.rootEl.classList.add('completed');
        } else {
            this.rootEl.classList.remove('completed');
        }

        if (editing) {
            this.rootEl.classList.add('editing');
        } else {
            this.rootEl.classList.remove('editing');
        }

        return this.rootEl;
    }
}

function addDbClick(el, callback, CLICK_TIMEOUT = 500) {
    let lastClickTime = 0;

    el.addEventListener('click', (e) => {
        const currentTime = Date.now();

        if (currentTime - lastClickTime < CLICK_TIMEOUT) {
            callback(e);
            lastClickTime = 0;
        } else {
            lastClickTime = currentTime;
        }
    });
}
