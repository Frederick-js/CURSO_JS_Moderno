// constructores

function Seguro(marca, year, tipo) {
  this.marca = marca;
  this.year = year;
  this.tipo = tipo;
}

function UI() {}

// Llena las opciones de los anos
UI.prototype.llenarOpciones = () => {
  const max = new Date().getFullYear(),
    min = max - 24;
  const selectYear = document.querySelector("#year");

  for (let i = max; i > min; i--) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    selectYear.appendChild(option);
  }
};

// Miestra alertar en pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
  const div = document.createElement("div");

  if (tipo === "error") {
    div.classList.add("error");
  } else {
    div.classList.add("correcto");
  }
  div.classList.add("mensaje", "mt-10");
  div.textContent = mensaje;

  // insertar en el html
  const formulario = document.querySelector("#cotizar-seguro");
  formulario.insertBefore(div, document.querySelector("#resultado"));

  // luego de 3 segundos borramos el div
  setTimeout(() => {
    div.remove();
  }, 3000);
};

// instanciar ui
const ui = new UI();

document.addEventListener("DOMContentLoaded", () => {
  ui.llenarOpciones(); // llena el select con los anos
});

addEventListener();
function addEventListener() {
  const formulario = document.querySelector("#cotizar-seguro");
  formulario.addEventListener("submit", cotizarSeguro);
}

function cotizarSeguro(e) {
  e.preventDefault();

  // Leer la marca seleccionada
  const marca = document.querySelector("#marca").value;
  console.log(marca);

  // leer el ano seleccionado
  const year = document.querySelector("#year").value;

  // leer el tipo de cobertura

  const tipo = document.querySelector('input[name="tipo"]:checked').value;

  if (marca === "" || year === "" || tipo === "") {
    ui.mostrarMensaje(" todos los campos son obligatorios", "error");
    return;
  }

  ui.mostrarMensaje("Cotizando...", "exito");

  // instanciar el seguro

  // utilizar el prototype que va a cotizar
}
