
export function printTasks(tasks) {
    // Imprimir todas las tasks
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

        tasksContainer.innerHTML += `
        <div class="task visible ${priority}" data-id="${idTask}">
        <div class="header-task">
            <h2>${titleTask}</h2>
            <div class="priority ${priority.toLowerCase()}">${priority}</div>
        </div>
        <div class="date-time">${date ? `<span>📅 ${date}</span>` : "<span>📅 No date</span>"}${time ? `<span>⏰ ${time}</span>` : "<span>⏰ No time</span>"}</div>
        <div class="categories">${tagHTML}</div>
        </div>`
    }
}
