import { getDataTasks, getDataCategories } from './services/taskService.js';

import { submitTask } from './events/submitTask.js';
import { printTasks } from "./events/printTasks.js";
import { printCategories } from "./events/printCategories.js";

import { countTasks } from "./events/countTasks.js";
import { filterTasks } from "./events/filterTasks.js";

import { createLabelCategory } from './events/createLabel.js';
import { selectCategories } from './events/selectedCategories.js';

import { openTask } from './events/openTask.js';

import { closeCard } from './events/closeCard.js';
import { closeWindow } from './events/closeWindow.js';
import { addTaskButton } from './events/addTaskButton.js';

const baseUrl = "http://localhost:3000";

// URL de los datos de tareas (creado con json server)
const tasksJSON = baseUrl + "/tasks";

// URL de los datos de tareas (creado con json server)
const categoriesJSON = baseUrl + "/categories";

const categories = await getDataCategories(categoriesJSON);
const tasks = await getDataTasks(tasksJSON);

console.log(tasks);

printTasks(tasks);
printCategories(categories);
countTasks(tasks);
filterTasks(tasks);
openTask(tasks, tasksJSON);
createLabelCategory();
selectCategories();
addTaskButton();

// Listener Submit nueva tarea
const buttonSubmit = document.getElementById("submitTask");
buttonSubmit.addEventListener("click", checkInputs);

// Checkear que no haya inputs required vacíos
function checkInputs() {
  let inputs = document.querySelectorAll("input[required]");
  inputs.forEach( (input) => {
    if (input.value =="") {
      input.classList.add("--incomplete")
    } else {
      submitTask(tasksJSON, categoriesJSON);
    }
  })
}

// Cerrar card
const buttonsCloseCard = document.querySelectorAll("form .close-bar .close");
buttonsCloseCard.forEach(buttonClose => buttonClose.addEventListener("click", closeCard))

// Cerrar tarea abierta
const buttonCloseWindow = document.querySelector(".task-detail .close-bar .close");
buttonCloseWindow.addEventListener("click", closeWindow);




