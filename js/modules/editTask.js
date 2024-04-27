export async function editTask(id, datosActualizados) {
    try {
       const url = `https://abuenashoras-api.vercel.apptasks/${id}`; // Asegúrate de reemplazar con la URL correcta
       const respuesta = await fetch(url, {
         method: 'PATCH',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(datosActualizados)
       });
   
       if (!respuesta.ok) {
         throw new Error(`Error al editar el objeto: ${respuesta.statusText}`);
       }
   
       const data = await respuesta.json();
       console.log('Objeto editado con éxito:', data);
    } catch (error) {
       console.error('Error:', error);
    }
   }