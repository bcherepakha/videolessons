import AddTaskForm from './AddTaskForm.js';
import { Task } from './Task.js';
import { List } from './List.js';
import { Server } from './Server.js';
import { Filter } from './Filter.js';

const addTaskForm = new AddTaskForm( onTaskCreate );
const list = new List();
const api = new Server();
const filter = new Filter();

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

function isTaskHidden({ completed }) {
    const { value } = filter;

    switch (value) {
        case 'all':
            return false;
        case 'active':
            return completed;
        case 'completed':
            return !completed;
    }
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
}

async function onTaskChange( e ) {
    const { target: task, data } = e;
    const newData = await api.updateTask(data);

    task.setData(newData);
    task.hidden = isTaskHidden(task.data);
}

function onTaskDestroy(e) {
    const { target: task } = e;

    return api.deleteTask(task.data.id)
        .then( list.removeItem(task) );
}
