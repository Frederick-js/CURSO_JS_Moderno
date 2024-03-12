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

document.addEventListener("DOMContentLoaded", () => {
  console.log("hola");
});

UI.prototype.llenarOpciones();
