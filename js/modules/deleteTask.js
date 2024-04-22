// Eiminar entrada

export async function deleteTask(idTask) {
    
    try {
       const url = `http://localhost:3000/tasks/${idTask}`; // Asegúrate de reemplazar con la URL correcta
       const respuesta = await fetch(url, {
         method: 'DELETE',
         headers: {
           'Content-Type': 'application/json',
           // Aquí puedes agregar otros headers si es necesario, como Authorization
         }
       });
   
       if (!respuesta.ok) {
         throw new Error(`Error al eliminar la entrada: ${respuesta.statusText}`);
       }
   
       console.log('Entrada eliminada con éxito');
    } catch (error) {
       console.error('Error:', error);
    }
}