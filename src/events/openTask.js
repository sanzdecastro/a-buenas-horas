import { deleteTask } from "../services/taskService.js";
import { editTask } from "../services/taskService.js";

export function openTask(tasks, tasksJSON) {
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
            taskViewDate.innerHTML = "📅";
            taskViewTime.innerHTML = "⏰";
            taskViewDesc.innerHTML= "";
            taskViewCategories.innerHTML = "";
            taskViewPriority.innerHTML = "";
            taskViewPriority.classList.remove();
            deleteButton.setAttribute("data-id", "")

            for (let task of tasks) {
                if (task.id === id) {
                    taskViewTitle.innerHTML += task.title;
                    taskViewDate.innerHTML += `${task.date ? task.date : "No date"}`;
                    taskViewTime.innerHTML += `${task.time ? task.time : "No time"}`;
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
                deleteTask(id, tasksJSON);
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
                
                formEdit.classList.add("visible");
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
                    const updatedData = {
                        title: titleEdit.value,
                        description: descriptionEdit.value,
                        date: dateEdit.value,
                        time: timeEdit.value,
                        //categories : categoryEdit,
                        priority: priorityEdit.value
                      };
                    editTask(id, updatedData, tasksJSON);
                  });
            })
        })
    })
}