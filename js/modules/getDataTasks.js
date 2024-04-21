
export function getDataTasks(tasksJSON) {
    // Hacer una solicitud para obtener los datos
    fetch(tasksJSON)
      .then(response => {
        // Verificar si la solicitud fue exitosa
        if (!response.ok) {
          throw new Error('La solicitud no fue exitosa');
        }
        // Parsear la respuesta como JSON
        return response.json();
      })
      .then(data => {
        const tasks = data;
        
        // Imprimir todas las tasks
        console.log(tasks);
        let tasksContainer = document.querySelector(".tasks-container .section-wrapper");
    
        for (let task of tasks) {
            let idTask = task.id;
            let titleTask = task.title;
            let titleDescription = task.description;
            let categories = task.categories;
            let date = task.date;
            let time = task.time;
    
            let tagHTML = ""
            for (let category of categories){
                tagHTML += `<div class="tag">${category}</div>`
            }
            console.log(tagHTML);

            tasksContainer.innerHTML += `<div class="task" onClick="openTask('${idTask}')"><h2>${titleTask}</h2><div class="date-time">${date ? date : "No date"}${time ? time : "No time"}</div><div class="categories">${tagHTML}</div><p>${titleDescription}</p>`
        }
      })
      .catch(error => {
        console.error('Se produjo un error al obtener los datos:', error);
      });
    }