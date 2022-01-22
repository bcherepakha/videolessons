export class List {
    constructor() {
        this.rootEl = document.querySelector('.todo-list');
        this.items = [];

        this.clear();
    }

    getData() {
        return this.items.map(item => item.data);
    }

    addItem(item) {
        this.items.push(item);
        this.rootEl.append(item.render());
    }

    addItems(items) {
        this.items.push(...items);
        this.render();
    }

    removeItem(destroyedItem) {
        this.items = this.items.filter(item => item !== destroyedItem);
        destroyedItem.remove();
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
