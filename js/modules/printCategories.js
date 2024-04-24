

export function printCategories(categories) {
    // Imprimir todas las categories
        
    console.log(categories);
    let taskContainer = document.querySelector("form.add .categories-container");

    for (let task of categories) {
        let titleCat = task.title;
        taskContainer.innerHTML += `<div class="tag">${titleCat}</div>`
    }
}