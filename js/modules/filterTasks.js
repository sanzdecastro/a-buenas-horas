export function filterTasks(tasks) {
    // Mostrar según tipo de prioridad
    const seeTasksButtons = document.querySelectorAll(".highlight");
    
    seeTasksButtons.forEach(function(seeTaskButton){
        let seeTaskButtonType = seeTaskButton.getAttribute("data-type");
        seeTaskButton.addEventListener("click", function(){
            
            seeTasks(seeTaskButtonType, seeTaskButton)
        });
    })

    // Filter tasks
    function seeTasks(seeTaskButtonType, seeTaskButton) {
        let tasksActive = seeTaskButtonType;

        seeTasksButtons.forEach(function(seeTaskButton){
            seeTaskButton.classList.remove("active");
        })
        seeTaskButton.classList.add("active");

        let tasks = document.querySelectorAll(".tasks-container .task");
        tasks.forEach(task => {
          task.classList.remove("visible");
          if(tasksActive === "Alta" && task.classList.contains("Alta")) {
            task.classList.toggle("visible");
          } else if (tasksActive === "Media" && task.classList.contains("Media")) {
            task.classList.toggle("visible");
          } else if (tasksActive === "Baja" && task.classList.contains("Baja")) {
            task.classList.toggle("visible");
          } else if (tasksActive === "Todos") {
            task.classList.add("visible");
          }
        })
      }
}