
export function getDataCategories(categoriesJSON) {
    // Hacer una solicitud para obtener los datos
    fetch(categoriesJSON)
      .then(response => {
        // Verificar si la solicitud fue exitosa
        if (!response.ok) {
          throw new Error('La solicitud no fue exitosa');
        }
        // Parsear la respuesta como JSON
        return response.json();
      })
      .then(data => {
        const categories = data;
        // Imprimir todas las categories
    
        console.log(categories);
        let taskContainer = document.querySelector(".categories-container");
    
        for (let task of categories) {
            let titleCat = task.title;
            taskContainer.innerHTML += `<div class="tag">${titleCat}</div>`
        }
    
      })
      .catch(error => {
        console.error('Se produjo un error al obtener los datos:', error);
      });
    }