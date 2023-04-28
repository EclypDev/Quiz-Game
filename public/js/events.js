const form = document.getElementById('message-form'); // elemento del formulario de mensaje
import { loadQuestions, loadChoicesNum } from "./questions.js"; // importar funciones de preguntas desde un archivo externo
import { randomNumber } from './randomNum.js'; // importar función para generar un número aleatorio desde un archivo externo
let numeroPreguntas;

const displayquestion = async() => { // función para mostrar preguntas en el chat
  let numeroDePreguntas = form.message.value; // obtener el número de preguntas del usuario
  
  if(numeroPreguntas < numeroDePreguntas) { // si el usuario ingresa un número mayor a 10
    numeroDePreguntas = numeroPreguntas; // establecer 10 como el número máximo de preguntas
  } else {
    numeroDePreguntas = numeroDePreguntas; // de lo contrario, utilizar el número ingresado por el usuario
  } 
  if(isNaN(numeroDePreguntas)) {
    alert('El dato ingresado no es un número válido de preguntas.')
  } else {
    for (let i = 0; i < numeroDePreguntas; i++) { // bucle para mostrar las preguntas en el chat
      let numeropreguntaQ = randomNumber(1);
      const question = await loadQuestions(numeropreguntaQ); // cargar una pregunta aleatoria
      // cargar las respuestas aleatorias
      const message = question; // asignar la pregunta a una variable
      const container = document.getElementById('lista-preguntas-container'); // obtener el elemento contenedor del chat
      const messageEl = document.createElement('p'); // crear un elemento HTML de párrafo
      messageEl.textContent = message; // asignar el texto de la pregunta al elemento de párrafo
    
      const checkboxContainer = document.createElement('div'); // crear un contenedor para los checkboxes
      for (let j = 1; j <= 3; j++) {
        const choice = await loadChoicesNum(numeropreguntaQ, j-1)
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = `pregunta_${i-1}_respuesta_${j-1}`; // asignar un nombre único a cada checkbox
        const label = document.createElement('label');
        label.appendChild(document.createTextNode(choice));
        checkboxContainer.appendChild(checkbox);
        checkboxContainer.appendChild(label);
      }
      setTimeout(() => { // retrasar la carga y visualización de cada pregunta
        container.appendChild(messageEl);
        container.appendChild(checkboxContainer);
      }, i * 200)
    } 
  }
}

export {displayquestion}; // exportar la función para que pueda ser utilizada desde otro archivo
