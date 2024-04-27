export function postData(newTask, tasksJSON) {
    fetch(tasksJSON, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('No se pudo crear la tarea');
        }
        return response.json();
      })
      .then(data => {
        console.log('Nueva tarea creada:', data);
        // Aquí podrías mostrar un mensaje de éxito o redirigir a otra página
      })
      .catch(error => {
        console.error('Se produjo un error al crear la tarea:', error);
        // Aquí podrías mostrar un mensaje de error al usuario
      });
}

export function postCategory(newCategory, categoriesJSON) {
    fetch(categoriesJSON, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCategory)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('No se pudo crear la tarea');
        }
        return response.json();
      })
      .then(data => {
        console.log('Nueva categoría creada:', data);
        // Aquí podrías mostrar un mensaje de éxito o redirigir a otra página
      })
      .catch(error => {
        console.error('Se produjo un error al crear la categoría:', error);
        // Aquí podrías mostrar un mensaje de error al usuario
      });
}
