// variables y selectores
const formulario = document.querySelector("#agregar-gasto");
const gastoListado = document.querySelector("#gastos ul");

/// eventos - cuando demos click o cuando el documento este listo
eventlisteners();

function eventlisteners() {
  document.addEventListener("DOMContentLoaded", preguntarPresupuesto);
}

// classes

// funciones

function preguntarPresupuesto() {
  const presupuestoUsuario = prompt("Cual es tu presupuesto");

  // validamos si esta vacio si da null o si es negativo
  if (
    presupuestoUsuario === "" ||
    presupuestoUsuario === null ||
    isNaN(presupuestoUsuario) ||
    presupuestoUsuario <= 0
  ) {
    window.location.reload();
  }
}
