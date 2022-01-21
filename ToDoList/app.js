import AddTaskForm from './AddTaskForm.js';
import { Task } from './Task.js';
import { List } from './List.js';
import TaskStorage from './TaskStorage.js';

const addTaskForm = new AddTaskForm( onTaskCreate );
const list = new List();
const storage = new TaskStorage();

init();

function init() {
    if (storage.data && storage.data.length) {
        storage.data.forEach(onTaskCreate);
    }
}

function onTaskCreate(taskData) {
    const task = new Task(taskData);

    console.log( task );

    task.addEventListener('change', onTaskChange);
    task.addEventListener('destroy', onTaskDestroy);

    list.addItem(task);
    storage.setData(list.getData());
}

function onTaskChange( e ) {
    const { target: task, data } = e;

    task.setData(data);
    storage.setData(list.getData());
}

function onTaskDestroy(e) {
    const { target: task } = e;

    list.removeItem(task);
    storage.setData(list.getData());
}
