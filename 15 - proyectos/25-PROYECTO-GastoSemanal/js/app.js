// variables y selectores
const formulario = document.querySelector("#agregar-gasto");
const gastoListado = document.querySelector("#gastos ul");

/// eventos - cuando demos click o cuando el documento este listo
eventlisteners();

function eventlisteners() {
  document.addEventListener("DOMContentLoaded", preguntarPresupuesto);
  formulario.addEventListener("submit", agregarGasto);
}

// classes
class Presupuesto {
  constructor(presupuesto) {
    // se convierte a numero con Number
    this.presupuesto = Number(presupuesto);
    this.restante = Number(presupuesto);
    this.gastos = [];
  }

  nuevoGasto(gasto) {
    this.gastos = [...this.gastos, gasto];
    console.log(this.gastos);
  }
}

class UI {
  insertarPresupuesto(cantidad) {
    // extrayendo los valores
    const { presupuesto, restante } = cantidad;

    // Agregar al html
    document.querySelector("#total").textContent = presupuesto;
    document.querySelector("#restante").textContent = presupuesto;
  }

  imprimirAlerta(mensaje, tipo) {
    // crear el div
    const divMensaje = document.createElement("div");
    divMensaje.classList.add("text-center", "alert");

    if (tipo === "error") {
      divMensaje.classList.add("alert-danger");
    } else {
      divMensaje.classList.add("alert-success");
    }

    // Mensaje de error
    divMensaje.textContent = mensaje;

    // insertar en el html
    document.querySelector(".primario").insertBefore(divMensaje, formulario);

    // quitar el html
    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }
}

// instanciar
const ui = new UI();
let presupuesto;

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

  // presupuesto valido
  presupuesto = new Presupuesto(presupuestoUsuario);

  ui.insertarPresupuesto(presupuesto);
}

// agregar gastos

function agregarGasto(e) {
  // esto previene la accion por default
  e.preventDefault();

  // leer los datos del formulario
  const nombre = document.querySelector("#gasto").value;
  const cantidad = Number(document.querySelector("#cantidad").value);

  // validar
  if (nombre === "" || cantidad === "") {
    ui.imprimirAlerta("Ambos campos son obligatorios", "error");
    return;
  } else if (cantidad <= 0 || isNaN(cantidad)) {
    ui.imprimirAlerta("Cantidad no valida", "error");
    return;
  }

  // generar un objeto con el gasto
  const gasto = { nombre, cantidad, id: Date.now() };

  // agrega un nuevo gasto
  presupuesto.nuevoGasto(gasto);

  // Mensaje de todo bien
  ui.imprimirAlerta("Gasto agregado correctamente");

  // Reinicia el formulario
  formulario.reset();
}
