document.addEventListener("DOMContentLoaded", function () {

  const email= {
    email: '',
    asunto: '',
    autor: '',
    mensaje: ''
  };

  
  //Seleccionar los elementos de la interfaz
  const inputEmail = document.querySelector("#email");
  const inputAsunto = document.querySelector("#asunto");
  const inputAutor = document.querySelector("#autor");
  const inputMensaje = document.querySelector("#mensaje");
  const formulario = document.querySelector("#formulario");
  const btnSubmit = document.querySelector("#formulario button[type='submit']");
  const btnReset = document.querySelector("#formulario button[type='reset']");
  const spinner = document.querySelector("#spinner");
  
console.log(spinner);

  // Asignar eventos
  inputEmail.addEventListener("input", validar); // colocar validar sin() es llamar una funcion hasta que suceda el evento. colocando si o si llama la funcion
  inputAsunto.addEventListener("input", validar);
  inputAutor.addEventListener("input", validar);
  inputMensaje.addEventListener("input", validar);

  formulario.addEventListener('submit', enviarEmail);


  btnReset.addEventListener("click", function(e){
    e.preventDefault();

      // reiniciar el objeto
      email.email = '';
      email.asunto = '';
      email.autor = '';
      email.mensaje = '';

      formulario.reset();
      comprobarEmail();
  });


  // funcion enviar email
  function enviarEmail(e) {
    e.preventDefault();
    
    spinner.classList.add('flex');
    spinner.classList.remove('hidden');
    
  }

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
          return;
      }

      btnSubmit.classList.remove('opacity-50');
      btnSubmit.disabled = false;
    }

  
});
