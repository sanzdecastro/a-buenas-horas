// Eiminar entrada

export async function deleteTask(id) {
    
    try {
       const url = `https://abuenashoras-api.vercel.app/tasks/${id}`; // Asegúrate de reemplazar con la URL correcta
       const respuesta = await fetch(url, {
         method: 'DELETE',

       });
   
       if (!respuesta.ok) {
         throw new Error(`Error al eliminar la entrada: ${respuesta.statusText}`);
       }
   
       console.log('Entrada eliminada con éxito');
    } catch (error) {
       console.error('Error:', error);
    }
}