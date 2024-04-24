// Crear labels de categorías en el form
import { selectCategories } from './selectedCategories.js';

export function createLabelCategory() {
    const categoriesAdded = document.querySelector(".categories-added");
    const inputAddCategories = document.querySelector("#newTag");

    inputAddCategories.onkeyup = function(e) {
        if (e.key == " " ||
            e.code == "Space" ||      
            e.keyCode == 13
        ) {
            // Consigo el valor del input de categories
            let tagValue = inputAddCategories.value;
            // Lo imprimo en la caja de caegories
            categoriesAdded.innerHTML += `<div class="tag-group selected"><div class="new-tag selected">${tagValue}</div><div class="delete-tag">x</div></div>`
            // Limpio el campo del input
            inputAddCategories.value = ""
            // Botón para eliminar un tag creado que no quiero
            let groupsNewCategories = document.querySelectorAll(".tag-group .delete-tag");
            groupsNewCategories.forEach( 
                groupNewCategories => groupNewCategories.addEventListener("click" , function(){
                    groupNewCategories.parentElement.remove();
            }))

            selectCategories();
        }
    }


}