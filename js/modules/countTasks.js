 export function countTasks(tasks) {
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

 }
