// selectores
const pacienteInput = document.querySelector("#paciente");
const propietaInput = document.querySelector("#propietario");
const emailInput = document.querySelector("#email");
const fechaInput = document.querySelector("#fecha");
const sintomasInput = document.querySelector("#sintomas");

// objeto de cita
const citaObj = {
  paciente: "",
  propietario: "",
  email: "",
  fecha: "",
  sintomas: "",
};

// Eventos
pacienteInput.addEventListener("change", (e) => {
  citaObj.paciente = e.target.value;
  console.log(citaObj);
});
