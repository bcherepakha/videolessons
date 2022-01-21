export default class TaskStorage {
    constructor() {
        this.data = this.readItems();
    }

    readItems() {
        const { task } = localStorage;

        if (!task) {
            return [];
        }

        try {
            const data = JSON.parse(task);

            return data;
        } catch(ex) {
            return [];
        }
    }

    setData(data) {
        this.data = data;
        this.save();
    }

    save() {
        localStorage.task = JSON.stringify(this.data);
    }
}
