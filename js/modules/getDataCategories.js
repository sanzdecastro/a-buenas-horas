
export async function getDataCategories(categoriesJSON) {
    // Hacer una solicitud para obtener los datos
    try {
      const url = categoriesJSON;
      const response = await fetch(url)

      // Verifica si la respuesta es exitosa
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
        const categories = await response.json();
        // Imprimir todas las categories
    
        console.log(categories);
        let taskContainer = document.querySelector("form.add .categories-container");
    
        for (let task of categories) {
            let titleCat = task.title;
            taskContainer.innerHTML += `<div class="tag">${titleCat}</div>`
        }
    
      }
      catch (error) {
        console.error('Error:', error);
     }
  }