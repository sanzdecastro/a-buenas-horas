import { deleteTask } from "./deleteTask.js";
import { editTask } from "./editTask.js";

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
            let priority = task.priority;


            let tagHTML = ""
            for (let category of categories){
                tagHTML += `<div class="tag">${category}</div>`
            }

            tasksContainer.innerHTML += `<div class="task" data-id="${idTask}"><h2>${titleTask}</h2><div class="priority">${priority}</div><div class="date-time">${date ? date : "No date"}${time ? time : "No time"}</div><div class="categories">${tagHTML}</div><p>${titleDescription}</p>`

            
        }

        // Open Task 
        setTimeout(function(){
            let tasksDivs = document.querySelectorAll(".task");
            console.log(tasksDivs);
            tasksDivs.forEach(function(tasksDiv){
                tasksDiv.addEventListener('click', function(){
                    let id = this.getAttribute('data-id');

                    let taskViewTitle = document.querySelector(".task-detail h2");
                    let taskViewDate = document.querySelector(".task-detail .date");
                    let taskViewTime = document.querySelector(".task-detail .time");
                    let taskViewDesc = document.querySelector(".task-detail p");
                    let taskViewCategories = document.querySelector(".task-detail .categories");
                    let deleteButton = document.querySelector(".task-detail button.delete");
                    let editButton = document.querySelector(".task-detail button.edit");
                    

                    taskViewTitle.innerHTML = "";
                    taskViewDate.innerHTML = "";
                    taskViewTime.innerHTML = "";
                    taskViewDesc.innerHTML= "";
                    taskViewCategories.innerHTML = "";
                    

                    for (let task of tasks) {
                        if (task.id === id) {
                            taskViewTitle.innerHTML += task.title;
                            taskViewDate.innerHTML += task.date;
                            taskViewTime.innerHTML += task.time;
                            taskViewDesc.innerHTML += task.description;
                            taskViewCategories.innerHTML += task.categories;

                            
                            
                        }
                    }

                    // Eliminar tarea
                    deleteButton.addEventListener("click", function(){
                        deleteTask(id);
                    })

                    // Editar tarea
                    editButton.addEventListener("click", function(){
                        let formEdit = document.querySelector("form.edit")
                        let titleEdit = document.querySelector("form.edit #title")
                        let descriptionEdit = document.querySelector("form.edit #description")
                        let dateEdit = document.querySelector("form.edit #date")
                        let timeEdit = document.querySelector("form.edit #time")
                        let categoryEdit = document.querySelector("form.edit .categories-added")
                        let priorityEdit = document.querySelector("form.edit #priority")
                        
                        formEdit.classList.add("editing");
                        for (let task of tasks) {
                            if (task.id === id) {
                                titleEdit.value = task.title;
                                descriptionEdit.value = task.description;
                                dateEdit.value = task.date;
                                timeEdit.value = task.time;
                                //categoryEdit = task.categories;
                                priorityEdit.value = task.priority;
                            }
                        }

                          let saveEditButton = document.getElementById("submitEditTask")
    
                          saveEditButton.addEventListener("click", function(){
                            const datosActualizados = {
                                title: titleEdit.value,
                                description: descriptionEdit.value,
                                date: dateEdit.value,
                                time: timeEdit.value,
                                //categories : categoryEdit,
                                priority: priorityEdit.value
                              };
                            editTask(id, datosActualizados);
                          });

                    })

                   
                    
                })

            })
        }, 1000);
      })
      .catch(error => {
        console.error('Se produjo un error al obtener los datos:', error);
      });
    }