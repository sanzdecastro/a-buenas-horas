import { postData, postCategory } from '../services/taskService.js';

// Submit nueva tarea
export function submitTask(tasksJSON, categoriesJSON) {
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

