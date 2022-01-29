import AddTaskForm from './AddTaskForm.js';
import { Task } from './Task.js';
import { List } from './List.js';
import { Server } from './Server.js';
import { Filter } from './Filter.js';
import { Counter } from './Counter.js';

const addTaskForm = new AddTaskForm( onTaskCreate, onSearch );
const list = new List( onListChange );
const api = new Server();
const filter = new Filter();
const counter = new Counter();

init();

async function init() {
    const data = await api.getTasks();
    const tasks = data.map(createTask);

    list.addItems(tasks);

    filter.addEventListener('change', onFilterChange);
}

function onFilterChange() {
    list.items.forEach(task => {
        task.hidden = isTaskHidden(task.data);
    });
}

function isTaskHidden({ completed, text }) {
    const { value } = filter;
    let result = false;

    switch (value) {
        case 'all':
            result = false;
            break;
        case 'active':
            result = completed;
            break;
        case 'completed':
            result = !completed;
            break;
    }

    if (result) {
        return result;
    }

    const { search } = addTaskForm;

    if (!search) {
        return result;
    }

    return text.search(search) < 0;
}

function createTask(taskData) {
    const task = new Task(taskData);

    task.hidden = isTaskHidden(task.data);
    task.addEventListener('change', onTaskChange);
    task.addEventListener('destroy', onTaskDestroy);

    return task;
}

async function onTaskCreate(taskData) {
    const taskServerData = await api.createTask(taskData);
    const task = createTask(taskServerData);

    list.addItem(task);
    onSearch('');
}

async function onTaskChange( e ) {
    const { target: task, data } = e;
    const newData = await api.updateTask(data);

    task.setData(newData);
    task.hidden = isTaskHidden(task.data);

    onListChange();
}

function onTaskDestroy(e) {
    const { target: task } = e;

    return api.deleteTask(task.data.id)
        .then( list.removeItem(task) );
}

function onSearch(search) {
    list.items.forEach(task => {
        task.hidden = isTaskHidden(task.data);
    });
}

function onListChange() {
    counter.setItemsCount(
        list.items.length,
        list.items
            .filter( ( { data : { completed }} ) => completed )
            .length
    );
}
