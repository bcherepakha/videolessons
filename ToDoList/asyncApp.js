import AddTaskForm from './AddTaskForm.js';
import { Task } from './Task.js';
import { List } from './List.js';
// import TaskStorage from './TaskStorage.js';
import { Server } from './Server.js';

const addTaskForm = new AddTaskForm( onTaskCreate );
const list = new List();
// const storage = new TaskStorage();
const api = new Server();

init();

async function init() {
    const data = await api.getTasks();
    const tasks = data.map(createTask);

    list.addItems(tasks);
}

function createTask(taskData) {
    const task = new Task(taskData);

    task.addEventListener('change', onTaskChange);
    task.addEventListener('destroy', onTaskDestroy);

    return task;
}

async function onTaskCreate(taskData) {
    const taskServerData = await api.createTask(taskData);
    const task = createTask(taskServerData);

    list.addItem(task);
    // storage.setData(list.getData());
}

async function onTaskChange( e ) {
    const { target: task, data } = e;
    const newData = await api.updateTask(data);

    task.setData(newData);

    // storage.setData(list.getData());
}

function onTaskDestroy(e) {
    const { target: task } = e;

    return api.deleteTask(task.data.id)
        .then( list.removeItem(task) );
    // storage.setData(list.getData());
}
