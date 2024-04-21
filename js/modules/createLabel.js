// Crear labels de categorías en el form
import { selectCategories } from './selectedCategories.js';

export function createLabelCategory() {
    const categoriesAdded = document.querySelector(".categories-added");
    const inputAddCategories = document.querySelector("#newTag");

    inputAddCategories.onkeyup = function(e) {
        if (e.key == " " ||
            e.code == "Space" ||      
            e.keyCode == 32
        ) {
            // Consigo el valor del input de categories
            let tagValue = inputAddCategories.value;
            // Lo imprimo en la caja de caegories
            categoriesAdded.innerHTML += `<div class="tag new-tag selected">${tagValue}</div>`
            // Limpio el campo del input
            inputAddCategories.value = ""

            selectCategories();
        }
    }


}