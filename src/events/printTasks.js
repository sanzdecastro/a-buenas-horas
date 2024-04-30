
export function printTasks(tasks) {
    // Imprimir todas las tasks
    let tasksContainer = document.querySelector(".tasks-container .section-wrapper");
    
    for (let task of tasks) {
        let tagHTML = ""
        for (let category of task.categories){
            tagHTML += `<div class="tag">${category}</div>`
        }

        tasksContainer.innerHTML += `
        <div class="task visible ${task.priority}" data-id="${task.id}">
        <div class="header-task">
            <h2>${task.title}</h2>
            <div class="priority ${task.priority.toLowerCase()}">${task.priority}</div>
        </div>
        <div class="date-time">${task.date ? `<span>📅 ${task.date}</span>` : "<span>📅 No date</span>"}${task.time ? `<span>⏰ ${task.time}</span>` : "<span>⏰ No time</span>"}</div>
        <div class="categories">${tagHTML}</div>
        </div>`
    }
}
