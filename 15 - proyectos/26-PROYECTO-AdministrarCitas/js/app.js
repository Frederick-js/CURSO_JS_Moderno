// Obtención de elementos del DOM
const pacienteInput = document.querySelector("#paciente");
const propietaInput = document.querySelector("#propietario");
const emailInput = document.querySelector("#email");
const fechaInput = document.querySelector("#fecha");
const sintomasInput = document.querySelector("#sintomas");

const formulario = document.querySelector("#formulario-cita");

// Eventos
pacienteInput.addEventListener("change", datosCita);
propietaInput.addEventListener("change", datosCita);
emailInput.addEventListener("change", datosCita);
fechaInput.addEventListener("change", datosCita);
sintomasInput.addEventListener("change", datosCita);

formulario.addEventListener("submit", submitCita);

// objeto de cita
const citaObj = {
  paciente: "",
  propietario: "",
  email: "",
  fecha: "",
  sintomas: "",
};

function datosCita(e) {
  // Esta función toma un evento como parámetro, que generalmente es un evento de cambio (por ejemplo, un evento 'change' en un input)

  // El objeto citaObj se utiliza para almacenar los datos de la cita.
  // Supongamos que citaObj es un objeto previamente definido fuera de esta función.
  // Al asignarle un valor a una propiedad con el nombre del target del evento, estamos actualizando el valor correspondiente en el objeto citaObj.
  citaObj[e.target.name] = e.target.value;
}

function submitCita(e) {
  e.preventDefault();

  if (Object.values(citaObj).some((valor) => valor.trim() === "")) {
    console.log("Todos los campos son obligatorios");
    return;
  }
}
