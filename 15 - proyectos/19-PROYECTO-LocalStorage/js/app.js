/// Declarar variables
const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");

let tweets = [];

// Eventlisteners
eventListeners();

function eventListeners() {
  // cuando el usuario agrega un nuevo tweet
  formulario.addEventListener("submit", agregarTweet);

  // cuando el documento esta listo
  document.addEventListener("DOMContentLoaded", () => {
    tweets = JSON.parse(localStorage.getItem("tweets")) || [];
    crearHtml();
  });
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

  const tweetObj = {
    id: Date.now(),
    tweet,
  };

  // anadir el arreglo de tweets
  tweets = [...tweets, tweetObj];

  // Una vez agregado vamos a crear el html
  crearHtml();

  // Reiniciamos el  formulario
  formulario.reset();
}

// Mostrar mensaje de error
function mostrarError(error) {
  const mensajeError = document.createElement("P");
  mensajeError.textContent = error;
  mensajeError.classList.add("error"); // agregamos el claslist de css error

  // Insertarlo en el contenido
  const contenido = document.querySelector("#contenido");
  contenido.appendChild(mensajeError);

  // eliminamos el mensaje de error luego de pasar 3 segundos
  setTimeout(() => {
    mensajeError.remove();
  }, 3000);
}

// muestra un listado de los tweets

function crearHtml() {
  limpiarHTML();
  if (tweets.length > 0) {
    tweets.forEach((tweet) => {
      // crear el html
      const li = document.createElement("li");

      // anadir el texto
      li.innerText = tweet.tweet;

      // insertarlo o agregarlo en el html
      listaTweets.appendChild(li);
    });
  }

  sincronizarStorage();
}

// Agregar los tweets actuales a localstorage

function sincronizarStorage() {
  localStorage.setItem("tweets", JSON.stringify(tweets));
}

// Limpiar html
function limpiarHTML() {
  while (listaTweets.firstChild) {
    listaTweets.removeChild(listaTweets.firstChild);
  }
}
