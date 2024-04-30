// Abrir card para añadir tarea

export function addTaskButton() {
    document.querySelector(".add").addEventListener("click", function(){
        let card = document.querySelector("form")
        card.classList.toggle("visible");

        // AÑADIR BLUR
        let sections = document.querySelectorAll(".tasks-container, header")
        sections.forEach((section) => section.classList.add("blur"));
    })
}