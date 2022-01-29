export class List {
    constructor( onListChange ) {
        this.rootEl = document.querySelector('.todo-list');
        this.items = [];
        this.onListChange = onListChange;

        this.clear();
    }

    getData() {
        return this.items.map(item => item.data);
    }

    addItem(item) {
        this.items.push(item);
        this.rootEl.append(item.render());

        if (this.onListChange) {
            this.onListChange();
        }
    }

    addItems(items) {
        this.items.push(...items);
        this.render();

        if (this.onListChange) {
            this.onListChange();
        }
    }

    removeItem(destroyedItem) {
        this.items = this.items.filter(item => item !== destroyedItem);
        destroyedItem.remove();

        if (this.onListChange) {
            this.onListChange();
        }
    }

    clear() {
        this.rootEl.innerText = '';
    }

    render() {
        this.clear();

        this.rootEl.append(
            ...this.items.map(item => item.render())
        );

        return this.rootEl;
    }
}
