document.addEventListener("DOMContentLoaded", function () {

  const email= {
    email: '',
    asunto: '',
    autor: '',
    mensaje: ''
  };

  console.log(email);
  //Seleccionar los elementos de la interfaz
  const inputEmail = document.querySelector("#email");
  const inputAsunto = document.querySelector("#asunto");
  const inputAutor = document.querySelector("#autor");
  const inputMensaje = document.querySelector("#mensaje");
  const formulario = document.querySelector("#formulario");
  const btnSubmit = document.querySelector("#formulario button[type='submit']");

  console.log(btnSubmit);
  // Asignar eventos
  inputEmail.addEventListener("blur", validar); // colocar validar sin() es llamar una funcion hasta que suceda el evento. colocando si o si llama la funcion
  inputAsunto.addEventListener("blur", validar);
  inputAutor.addEventListener("blur", validar);
  inputMensaje.addEventListener("blur", validar);

  function validar(e) {
    if (e.target.value.trim() === "") {
      mostrarAlerta(
        `El Campo ${e.target.id} es obligatorio`,
        e.target.parentElement
      );
      email[e.target.name] = ""; // reiniciamos
      comprobarEmail(); // comprobamos el email
      return;
    }
   
    if (e.target.id === 'email' && !validarEmail(e.target.value)) {
      mostrarAlerta('El email no es valido', e.target.parentElement);
      email[e.target.name] = "";// reiniciamos
      comprobarEmail();// comprobamos el email
      return;
    }
    

    limpiarAlerta(e.target.parentElement);

    //Asignar los valores
    email[e.target.name] = e.target.value.trim().toLowerCase();
    
    // comprobar el objeto del email
    comprobarEmail();

  }

  function mostrarAlerta(mensaje, referencia) {
    limpiarAlerta(referencia);
    // Generar alerta en HTML
    const error = document.createElement("P");
    error.textContent = mensaje; // se agrega color de fondo
    error.classList.add("bg-red-600", "text-white", "p-2", "text-center");

    // Inyectar al error del formulario
    referencia.appendChild(error);
  }

  // funcion limpiar alerta
  function limpiarAlerta(referencia) {
    // Comprueba si ya existe una alerta
    const alerta = referencia.querySelector(".bg-red-600");
    if (alerta) {
      alerta.remove();
    }
  }

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const resultado = regex.test(email);
    return resultado;
  };

    function comprobarEmail() {
      if (Object.values(email).includes('')) {
        btnSubmit.classList.add('opacity-50');
          btnSubmit.disabled = true;
      }else{
          btnSubmit.classList.remove('opacity-50');
          btnSubmit.disabled = false;
      }
    }
});
