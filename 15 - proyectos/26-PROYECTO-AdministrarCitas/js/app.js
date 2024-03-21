// selectores
const pacienteInput = document.querySelector("#paciente");
const propietaInput = document.querySelector("#propietario");
const emailInput = document.querySelector("#email");
const fechaInput = document.querySelector("#fecha");
const sintomasInput = document.querySelector("#sintomas");

// Eventos
pacienteInput.addEventListener("change", datosCita);
propietaInput.addEventListener("change", datosCita);
emailInput.addEventListener("change", datosCita);
fechaInput.addEventListener("change", datosCita);
sintomasInput.addEventListener("change", datosCita);

// objeto de cita
const citaObj = {
  paciente: "",
  propietario: "",
  email: "",
  fecha: "",
  sintomas: "",
};

function datosCita(e) {
  citaObj[e.target.name] = e.target.value;
  console.log(citaObj);
}
