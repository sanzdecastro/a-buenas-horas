import { getDataTasks } from './modules/getDataTasks.js';
import { getDataCategories } from './modules/getDataCategories.js';
import { postData } from './modules/postData.js';
import { postCategory } from './modules/postData.js';

import { printTasks } from "./modules/printTasks.js";
import { printCategories } from "./modules/printCategories.js";

import { countTasks } from "./modules/countTasks.js";
import { filterTasks } from "./modules/filterTasks.js";

import { createLabelCategory } from './modules/createLabel.js';
import { selectCategories } from './modules/selectedCategories.js';

import { deleteTask } from "./modules/deleteTask.js";
import { editTask } from "./modules/editTask.js";
import { openTask } from './modules/openTask.js';

import { closeCard } from './modules/closeCard.js';
import { closeWindow } from './modules/closeWindow.js';
import { addTaskButton } from './modules/addTaskButton.js';

// URL de los datos de tareas (creado con json server)
const tasksJSON = 'http://localhost:3000/tasks';

// URL de los datos de tareas (creado con json server)
const categoriesJSON = 'http://localhost:3000/categories';

const categories = await getDataCategories(categoriesJSON);
const tasks = await getDataTasks(tasksJSON);

console.log(tasks);

printTasks(tasks);
printCategories(categories);
countTasks(tasks);
filterTasks(tasks);
openTask(tasks, deleteTask, editTask);
createLabelCategory();
selectCategories();

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
      submitTask();
    }
  })
}

// Submit nueva tarea
function submitTask() {
    // Obtener los valores del formulario
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const date = document.querySelector('#date').value;
    const time = document.querySelector('#time').value;
    const priority = document.querySelector('#priority').value;
    // Reunir todas las categorías para asociarlas a la task
    let divsCategories = document.querySelectorAll(".categories-added .tag.selected, .categories-added .selected.new-tag")
    let categories = [];
    divsCategories.forEach(function(category) {
        // Obtener el contenido de cada div y concatenarlo a la variable contenidoCombinado
        categories.push(category.innerHTML);
    });

    // Reunir y postear las nuevas categorías
    let divsNewCategories = document.querySelectorAll(".selected.new-tag")
    divsNewCategories.forEach(function(category) {
       let title = category.innerHTML
        // Crear objeto de nueva categoría
        const newCategories = {
            title: title
        };
        postCategory(newCategories, categoriesJSON);
    });

    

    // Crear objeto de nueva tarea
    const newTask = {
      title: title,
      description: description,
      date: date,
      time: time,
      categories : categories,
      priority: priority
    };

   

    postData(newTask, tasksJSON);

}


// Abrir card para añadir tarea

addTaskButton();

// Cerrar card
const buttonsCloseCard = document.querySelectorAll("form .close-bar .close");
buttonsCloseCard.forEach(buttonClose => buttonClose.addEventListener("click", closeCard))

// Cerrar tarea abierta
const buttonCloseWindow = document.querySelector(".task-detail .close-bar .close");
buttonCloseWindow.addEventListener("click", closeWindow);




