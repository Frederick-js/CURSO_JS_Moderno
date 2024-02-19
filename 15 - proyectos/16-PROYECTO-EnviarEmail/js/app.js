document.addEventListener("DOMContentLoaded", function () {
  const email = {
    email: "",
    asunto: "",
    autor: "",
    mensaje: "",
    cc: "false"
  };

  //Seleccionar los elementos de la interfaz
  const inputEmail = document.querySelector("#email");
  const inputAsunto = document.querySelector("#asunto");
  const inputAutor = document.querySelector("#autor");
  const inputCc = document.querySelector("#cc");
  const inputMensaje = document.querySelector("#mensaje");
  const formulario = document.querySelector("#formulario");
  const btnSubmit = document.querySelector("#formulario button[type='submit']");
  const btnReset = document.querySelector("#formulario button[type='reset']");
  const spinner = document.querySelector("#spinner");

  console.log(inputCc);

  // Asignar eventos
  inputEmail.addEventListener("input", validar); // colocar validar sin() es llamar una funcion hasta que suceda el evento. colocando si o si llama la funcion
  inputAsunto.addEventListener("input", validar); // 'blur' que es cuando sale del campo
  inputAutor.addEventListener("input", validar); // 'input' valida mientras se escribe
  inputMensaje.addEventListener("input", validar);
  inputCc.addEventListener("input", validar);

  formulario.addEventListener("submit", enviarEmail);

  btnReset.addEventListener("click", function (e) {
    e.preventDefault();
    // reiniciar objeto
    reiniciarObjeto();
  });

  // funcion enviar email
  function enviarEmail(e) {
    e.preventDefault();

    spinner.classList.add("flex");
    spinner.classList.remove("hidden");

    setTimeout(() => {
      spinner.classList.remove("flex");
      spinner.classList.add("hidden");
      reiniciarObjeto();

      // Crear una alerta
      const alertaExito = document.createElement("P");
      alertaExito.classList.add(
        "bg-green-500",
        "text-white",
        "p-2",
        "text-center",
        "rounded-lg",
        "mt-10",
        "font-bold",
        "text-sm",
        "uppercase"
      );
      alertaExito.textContent = "Mensaje enviado correctamente";
      formulario.appendChild(alertaExito);

      setTimeout(() => {
        alertaExito.remove();
      }, 3000);
    }, 3000);
  }

  function validar(e) {
    if (e.target.value.trim() === "" && e.target.id !== 'cc') {
      mostrarAlerta(
        `El Campo ${e.target.id} es obligatorio`,
        e.target.parentElement
      );
      email[e.target.id] = ""; // reiniciamos
      comprobarEmail(); // comprobamos el email
      return;
    }

    if ((e.target.id === "email" || e.target.id === "cc") && !validarEmail(e.target.value)) {

      mostrarAlerta("El email no es valido", e.target.parentElement);
      email[e.target.id] = ""; // reiniciamos
      comprobarEmail(); // comprobamos el email
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
    if (Object.values(email).includes("") && Object.values(email).includes("false")) {
      if (Object.values(email).includes("")) {
        
      }
      btnSubmit.classList.add("opacity-50");
      btnSubmit.disabled = true;
      console.log(Object.values(email));
      return;
    }

    btnSubmit.classList.remove("opacity-50");
    btnSubmit.disabled = false;
  }

  function reiniciarObjeto() {
    // reiniciar el objeto
    email.email = "";
    email.asunto = "";
    email.autor = "";
    email.mensaje = "";
    email.cc = "";

    formulario.reset();
    comprobarEmail();
  }
});
