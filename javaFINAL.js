const chatDisplay = document.getElementById('chat-display');
const userInput = document.getElementById('user-input');
const optionsContainer = document.getElementById('options');

// Preguntas predefinidas y sus respuestas
const preguntas = [
  {
    pregunta: '¿Qué es la computación cuántica?',
    respuesta: 'La computación cuántica es un campo de la informática que utiliza los principios de la mecánica cuántica para realizar cálculos en ordenadores cuánticos, lo que potencialmente permite resolver problemas complejos de manera más eficiente que los ordenadores clásicos.'
  },
  {
    pregunta: '¿Cuál es el impacto de la computación cuántica?',
    respuesta: 'La computación cuántica tiene el potencial de revolucionar numerosas industrias, incluyendo la criptografía, la simulación de procesos cuánticos, la optimización de algoritmos y la inteligencia artificial, entre otros.'
  },
  // Agrega más preguntas y respuestas aquí
];

// Resto de tu JavaScript permanece igual


// Función para enviar un mensaje
function sendMessage() {
  const message = userInput.value.trim();
  if (message !== '') {
    chatDisplay.innerHTML += `<div class="user-message">${message}</div>`;
    processMessage(message);
    userInput.value = '';
  }
}

// Función para procesar el mensaje del usuario
function processMessage(message) {
  const lowerCaseMessage = message.toLowerCase();
  let respuestaEncontrada = false;
  preguntas.forEach((pregunta) => {
    if (lowerCaseMessage.includes(pregunta.pregunta.toLowerCase())) {
      chatDisplay.innerHTML += `<div class="bot-message">${pregunta.respuesta}</div>`;
      respuestaEncontrada = true;
    }
  });
  if (!respuestaEncontrada) {
    showOptions();
  }
}

// Mostrar opciones de preguntas
function showOptions() {
  optionsContainer.innerHTML = '<div>Selecciona una opción:</div>';
  preguntas.forEach((pregunta, index) => {
    optionsContainer.innerHTML += `<div><button onclick="selectOption(${index})">${pregunta.pregunta}</button></div>`;
  });
}

// Función para seleccionar una opción de pregunta
function selectOption(index) {
  const preguntaSeleccionada = preguntas[index];
  chatDisplay.innerHTML += `<div class="user-message">${preguntaSeleccionada.pregunta}</div>`;
  chatDisplay.innerHTML += `<div class="bot-message">${preguntaSeleccionada.respuesta}</div>`;
  optionsContainer.innerHTML = ''; // Limpiar las opciones
}

// Enfocar el input al cargar la página
window.onload = function() {
  userInput.focus();
}

// Obtener el pie de página
const footer = document.getElementById('footer');

// Función para verificar si el usuario ha llegado al final de la página
function mostrarFooter() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    footer.classList.remove('oculto');
  } else {
    footer.classList.add('oculto');
  }
}

// Escuchar el evento de desplazamiento de la página
window.addEventListener('scroll', mostrarFooter);

window.addEventListener('scroll', mostrarFooter);
