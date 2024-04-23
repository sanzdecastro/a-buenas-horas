import { createLabelCategory } from './modules/createLabel.js';
import { getDataTasks } from './modules/getDataTasks.js';
import { getDataCategories } from './modules/getDataCategories.js';
import { selectCategories } from './modules/selectedCategories.js';

// URL de los datos de tareas (creado con json server)
const tasksJSON = 'http://localhost:3000/tasks';

// URL de los datos de tareas (creado con json server)
const categoriesJSON = 'http://localhost:3000/categories';


getDataTasks(tasksJSON);
getDataCategories(categoriesJSON);




// Solicitud de ENVÍO de datos

function postData(newTask) {
    fetch(tasksJSON, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('No se pudo crear la tarea');
        }
        return response.json();
      })
      .then(data => {
        console.log('Nueva tarea creada:', data);
        // Aquí podrías mostrar un mensaje de éxito o redirigir a otra página
      })
      .catch(error => {
        console.error('Se produjo un error al crear la tarea:', error);
        // Aquí podrías mostrar un mensaje de error al usuario
      });
}

function postCategory(newCategory) {
    fetch(categoriesJSON, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCategory)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('No se pudo crear la tarea');
        }
        return response.json();
      })
      .then(data => {
        console.log('Nueva categoría creada:', data);
        // Aquí podrías mostrar un mensaje de éxito o redirigir a otra página
      })
      .catch(error => {
        console.error('Se produjo un error al crear la categoría:', error);
        // Aquí podrías mostrar un mensaje de error al usuario
      });
}


// Submit nueva tarea
const buttonSubmit = document.getElementById("submitTask");
buttonSubmit.addEventListener("click", submitTask);

function submitTask() {
    // Obtener los valores del formulario
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const date = document.querySelector('#date').value;
    const time = document.querySelector('#time').value;
    const priority = document.querySelector('#priority').value;
    // Reunir todas las categorías para asociarlas a la task
    let divsCategories = document.querySelectorAll(".categories-added .tag.selected")
    let categories = [];
    divsCategories.forEach(function(category) {
        // Obtener el contenido de cada div y concatenarlo a la variable contenidoCombinado
        categories.push(category.innerHTML);
    });

    // Reunir y postear las nuevas categorías
    let divsNewCategories = document.querySelectorAll(".tag.new-tag")
    divsNewCategories.forEach(function(category) {
       let title = category.innerHTML
        // Crear objeto de nueva categoría
        const newCategories = {
            title: title
        };
        postCategory(newCategories);
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

    postData(newTask);
}

createLabelCategory();
selectCategories();

addTaskButton();
function addTaskButton() {
    document.querySelector(".add").addEventListener("click", function(){
        let card = document.querySelector("form")

        card.classList.toggle("visible");
    })
}

// closeCard();
// function closeCard() {

//     document.querySelector("body").addEventListener("click", function(){
//         let card = document.querySelector("form")

//         card.classList.toggle("visible");
//     })
    
// }




