export async function getDataTasks(tasksJSON) {  
    const url = tasksJSON;
    const response = await fetch(url)
    // Convierte la respuesta a JSON
    const tasks = await response.json();
        
    return tasks;
}

export async function getDataCategories(categoriesJSON) {
    // Hacer una solicitud para obtener los datos
    const url = categoriesJSON;
    const response = await fetch(url)

    const categories = await response.json();
    return categories;
}

export async function postData(newTask, tasksJSON) {
    const url = tasksJSON;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
    })

    return await response.json();
}

export async function postCategory(newCategory, categoriesJSON) {
    const url = categoriesJSON;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCategory)
    })

    return await response.json();
}


export async function deleteTask(id, tasksJSON) {
    
    const url = `${tasksJSON}/${id}`; 
    const response = await fetch(url, {
         method: 'DELETE',
         headers: {
           'Content-Type': 'application/json',
         }
    });

    console.log('Entrada eliminada con éxito');
    return await response.json();
    
}

export async function editTask(id, updatedData, tasksJSON) {
    const url = `${tasksJSON}/${id}`; 
    const response = await fetch(url, {
         method: 'PATCH',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(updatedData)
       });
   
    return await response.json();
}