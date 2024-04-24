

export async function getDataTasks(tasksJSON) {
    try {
      const url = tasksJSON;
      const response = await fetch(url)

      // Verifica si la respuesta es exitosa
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

       // Convierte la respuesta a JSON
       const tasks = await response.json();
        
       return tasks;
       
        
    } catch (error) {
      console.error('Error:', error);
   }
  }