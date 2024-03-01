/// Declarar variables
const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");
let tweets = [];

// Eventlisteners
eventListeners();

function eventListeners() {
  formulario.addEventListener("submit", agregarTweet);
}

// Funciones
function agregarTweet(e) {
  e.preventDefault(); //prevenir la accion predeterminada

  // Textarea donde el usuario escribe
  const tweet = document.querySelector("#tweet").value;

  // Validacion..
  if (!tweet) {
    mostrarError("Un mensaje no puede ir vacio"); // llamamos funcion de mostrar error

    return; // previene que se siga ejecutando mas lineas de codigo
  }

  console.log("Agregando tweet");
}

// Mostrar mensaje de error
function mostrarError(error) {
  const mensajeError = document.createElement("P");
  mensajeError.textContent = error;
  mensajeError.classList.add("error"); // agregamos el claslist de css error

  // Insertarlo en el contenido
  const contenido = document.querySelector("#contenido");
  contenido.appendChild(mensajeError);
}
