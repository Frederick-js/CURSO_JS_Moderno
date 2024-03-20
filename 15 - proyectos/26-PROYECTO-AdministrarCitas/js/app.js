//! campos del formulario

const mascotaInput = document.querySelector("#mascota");
const propietarioInput = document.querySelector("#propietario");
const telefonoInput = document.querySelector("#telefono");
const fechaInput = document.querySelector("#fecha");
const horaInput = document.querySelector("#hora");
const sintomasInput = document.querySelector("#sintomas");

//! UI  - interfaz de usuario
const formulario = document.querySelector("#nueva-cita");
const contenedorCitas = document.querySelector("#citas");

//! creamos las dos clases  citas y  UI
// class citas
class Citas {
  constructor() {
    this.citas = [];
  }

  agregarCita(cita) {
    console.log(cita);
    this.citas = [...this.citas, cita];
    console.log(this.citas);
  }
}

// class UI - interfaz
class UI {
  imprimirAlerta(mensaje, tipo) {
    const divMensaje = document.createElement("div");
    divMensaje.classList.add("text-center", "alert", "d-block", "col-12");

    // agregar clase en base al tipo de rror
    if (tipo === "error") {
      divMensaje.classList.add("alert-danger");
    } else {
      divMensaje.classList.add("alert-succsess");
    }

    // mensaje de error
    divMensaje.textContent = mensaje;

    // agregar al DOM
    document
      .querySelector("#contenido")
      .insertBefore(divMensaje, document.querySelector(".agregar-cita"));

    // quitar la alerta despues de 3 segundos
    setTimeout(() => {
      divMensaje.remove();
    }, 5000);
  }

  imprimirCitas(citas) {
    console.log(citas);
  }

  //
}

//! instanciamos
const ui = new UI();
const administrarCitas = new Citas();

//! Registrar eventos
eventListgeners();
function eventListgeners() {
  mascotaInput.addEventListener("change", datosCita);
  propietarioInput.addEventListener("change", datosCita);
  telefonoInput.addEventListener("change", datosCita);
  fechaInput.addEventListener("change", datosCita);
  horaInput.addEventListener("change", datosCita);
  sintomasInput.addEventListener("change", datosCita);

  formulario.addEventListener("submit", nuevaCita);
}

//!objeto con la informacion de la cita
// creamos el objeto para ir agregando las propiedades
const citaObj = {
  // los inputs tienen  name='mascota'     name= 'propietario' cuando es asi se puede llamar por name.
  mascota: "",
  propietario: "",
  telefono: "",
  fecha: "",
  hora: "",
  sintomas: "",
};

//! funciones

// agrega datos al objeto de cita
function datosCita(e) {
  citaObj[e.target.name] = e.target.value;
}

// valida y agrega una nueva cita a la clase de citas
function nuevaCita(e) {
  e.preventDefault(); // evita que el formulario se envie
  // extraer la informacion del objeto de la cita
  const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj; // aplicamos una destructuracion

  // luego validamos si estan vacios
  if (
    mascota === "" ||
    propietario === "" ||
    telefono === "" ||
    fecha === "" ||
    hora === "" ||
    sintomas === ""
  ) {
    ui.imprimirAlerta("Todos los campos son obligatorios", "error");
    return;
  }

  // generar un id unico
  citaObj.id = Date.now();

  //creando una nueva cita
  administrarCitas.agregarCita({ ...citaObj });

  // reiniciamos el objeto para la validacion
  reiniciarObjeto();

  // reiniciar el formulario
  formulario.reset();

  // mostrar el html de las citas
  ui.imprimirCitas(administrarCitas);
}

function reiniciarObjeto() {
  citaObj.mascota = "";
  citaObj.propietario = "";
  citaObj.telefono = "";
  citaObj.fecha = "";
  citaObj.hora = "";
  citaObj.sintomas = "";
}
