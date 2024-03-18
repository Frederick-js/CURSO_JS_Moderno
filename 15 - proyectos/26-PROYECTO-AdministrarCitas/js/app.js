// campos del formulario

const mascotaInput = document.querySelector("#mascota");
const propietarioInput = document.querySelector("#propietario");
const telefonoInput = document.querySelector("#telefono");
const fechaInput = document.querySelector("#fecha");
const horaInput = document.querySelector("#hora");
const sintomasInput = document.querySelector("#sintomas");

// UI  - interfaz de usuario
const formulario = document.querySelector("#nueva-cita");
const contenedorCitas = document.querySelector("#citas");

// creamos las dos clases  citas y  UI

// class citas
class Citas {
  constructor() {
    this.citas = [];
  }
}

// class UI - interfaz
class UI {
  //
}

// instanciamos
const ui = new UI();
const administrarCitas = new Citas();

// Registrar eventos
eventListgeners();
function eventListgeners() {
  mascotaInput.addEventListener("change", datosCita);
  propietarioInput.addEventListener("change", datosCita);
  telefonoInput.addEventListener("change", datosCita);
  fechaInput.addEventListener("change", datosCita);
  horaInput.addEventListener("change", datosCita);
  sintomasInput.addEventListener("change", datosCita);
}

//objeto con la informacion de la cita
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

// funciones

// agrega datos al objeto de cita
function datosCita(e) {
  citaObj[e.target.name] = e.target.value;
  console.log(citaObj);
}
