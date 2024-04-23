import { deleteTask } from "./deleteTask.js";
import { editTask } from "./editTask.js";

export async function getDataTasks(tasksJSON) {
    try {
      const url = tasksJSON;
      const response = await fetch(url)

      // Verifica si la respuesta es exitosa
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

       // Convierte la respuesta a JSON
       const tasks = await response.json();
        
        // Imprimir todas las tasks
        console.log(tasks);
        let tasksContainer = document.querySelector(".tasks-container .section-wrapper");

        // Recuento de tasks totales
        let numTasks = tasks.length;
        let numTasksCont = document.querySelector(".highlights .numTasks")
        numTasksCont.innerHTML += numTasks;
        
        // Recuento de tareas prioridad alta
        let numHighTasksCont = document.querySelector(".highlights .numTasksHigh")
        let highTasks = tasks.filter(task => task.priority === "Alta").length;
        numHighTasksCont.innerHTML += highTasks;

        // Recuento de tareas prioridad media
        let numMediumTasksCont = document.querySelector(".highlights .numTasksMedium")
        let mediumTasks = tasks.filter(task => task.priority === "Media").length;
        numMediumTasksCont.innerHTML += mediumTasks;

        // Recuento de tareas prioridad baja
        let numLowTasksCont = document.querySelector(".highlights .numTasksLow")
        let lowTasks = tasks.filter(task => task.priority === "Baja").length;
        numLowTasksCont.innerHTML += lowTasks;
        
        
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

            

            tasksContainer.innerHTML += `
            <div class="task" data-id="${idTask}">
              <div class="header-task">
                <h2>${titleTask}</h2>
                <div class="priority ${priority.toLowerCase()}">${priority}</div>
              </div>
            <div class="date-time">${date ? `<span>${date}</span>` : "<span>No date</span>"}${time ? `<span>${time}</span>` : "<span>No time</span>"}</div>
            <div class="categories">${tagHTML}</div>
            </div>`
        }

        // Open Task 
        
            let tasksDivs = document.querySelectorAll(".task");
            console.log(tasksDivs);
            tasksDivs.forEach(function(tasksDiv){
                tasksDiv.addEventListener('click', function(){
                    let id = this.getAttribute('data-id');

                    let taskView = document.querySelector(".task-detail");
                    let taskViewTitle = document.querySelector(".task-detail h2");
                    let taskViewDate = document.querySelector(".task-detail .date");
                    let taskViewTime = document.querySelector(".task-detail .time");
                    let taskViewPriority = document.querySelector(".task-detail .priority");
                    let taskViewDesc = document.querySelector(".task-detail p");
                    let taskViewCategories = document.querySelector(".task-detail .categories-container");
                    let deleteButton = document.querySelector(".task-detail button.delete");
                    let editButton = document.querySelector(".task-detail button.edit");
                    
                    taskView.classList.add("opened")
                    taskViewTitle.innerHTML = "";
                    taskViewDate.innerHTML = "";
                    taskViewTime.innerHTML = "";
                    taskViewDesc.innerHTML= "";
                    taskViewCategories.innerHTML = "";
                    taskViewPriority.innerHTML = "";
                    taskViewPriority.classList.remove();
                    deleteButton.setAttribute("data-id", "")

                    for (let task of tasks) {
                        if (task.id === id) {
                            taskViewTitle.innerHTML += task.title;
                            taskViewDate.innerHTML += task.date;
                            taskViewTime.innerHTML += task.time;
                            taskViewDesc.innerHTML += task.description;
                            taskViewPriority.innerHTML += task.priority;
                            taskViewPriority.classList.add(task.priority.toLowerCase());
                            deleteButton.setAttribute("data-id" , id);
                            
                            let categories = task.categories;
                            for (let category of categories) { 
                              taskViewCategories.innerHTML += `<div class="tag">${category}</div>`
                            }
                            
                        }
                        
                    }

                    // Eliminar tarea
                    deleteButton.addEventListener("click", function(){
                        
                        let id = deleteButton.getAttribute("data-id")
                        console.log(id);
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
        
    } catch (error) {
      console.error('Error:', error);
   }
  }