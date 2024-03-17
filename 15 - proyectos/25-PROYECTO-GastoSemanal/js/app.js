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
    this.calcularRestante();
  }

  calcularRestante() {
    const gastado = this.gastos.reduce(
      (total, gasto) => total + gasto.cantidad,
      0
    );
    this.restante = this.presupuesto - gastado;
    console.log(this.restante);
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

  agregarGastoListado(gastos) {
    // limpiar html
    this.limpiarHTML();

    // iterar sobre los gastos
    gastos.forEach((gasto) => {
      // body
      const { cantidad, nombre, id } = gasto;

      // crear un li
      const nuevoGasto = document.createElement("li");
      nuevoGasto.className =
        "list-group-item d-flex justifi-content-between aling-items-center"; // esto son clases de bootstrap

      /* estos dos codigos hacen lo mismo
      nuevoGasto.setAttribute("data-id", id);
      nuevoGasto.dataset.id = id;      // se utiliza mas esta forma
      */
      nuevoGasto.dataset.id = id;

      // agregar el html del gasto

      nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill"> $${cantidad}</span>`;

      // boton para borrar el gasto
      const btnBorrar = document.createElement("button");
      btnBorrar.classList.add("btn", "btn-danger", "borrar-gasto");
      btnBorrar.textContent = "Borrar";
      nuevoGasto.appendChild(btnBorrar);

      // Agregar el HTML
      gastoListado.appendChild(nuevoGasto);
    });
  }

  limpiarHTML() {
    while (gastoListado.firstChild) {
      gastoListado.removeChild(gastoListado.firstChild);
    }
  }

  actualizarRestante(restante) {
    // Agregar al html
    document.querySelector("#restante").textContent = restante;
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

  // Imprimir los gastos
  const { gastos, restante } = presupuesto;
  ui.agregarGastoListado(gastos);
  ui.actualizarRestante(restante);

  // Reinicia el formulario
  formulario.reset();
}
