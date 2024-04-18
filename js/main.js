
function getData() {
// URL donde se encuentran los datos
const tasksJSON = 'http://localhost:3000/tasks';

// Hacer una solicitud para obtener los datos
fetch(tasksJSON)
  .then(response => {
    // Verificar si la solicitud fue exitosa
    if (!response.ok) {
      throw new Error('La solicitud no fue exitosa');
    }
    // Parsear la respuesta como JSON
    return response.json();
  })
  .then(data => {
    // Obtener el título de la primera tarea
    const tasks = data;
    // Imprimir el título de la primera tarea
    console.log(tasks);
  })
  .catch(error => {
    console.error('Se produjo un error al obtener los datos:', error);
  });
}

// Solicitud de ENVÍO de datos

function postData(newTask) {
    fetch('http://localhost:3000/tasks', {
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

getData();

const buttonSubmit = document.getElementById("submitTask");
buttonSubmit.addEventListener("click", submitTask);

// document.getElementById('submitTask').addEventListener('click', submitTask());

function submitTask() {
    console.log("hi")
    // Obtener los valores del formulario
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const imageURL = document.querySelector('#image').value;
    
    // Crear objeto de nueva tarea
    const newTask = {
      title: title,
      description: description,
      imageURL: imageURL
    };
    
    postData(newTask);
}