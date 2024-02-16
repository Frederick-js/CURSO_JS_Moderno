document.addEventListener('DOMContentLoaded', function(){

    //Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');

   // Asignar eventos
   inputEmail.addEventListener('blur', validar);  // colocar validar sin() es llamar una funcion hasta que suceda el evento. colocando si o si llama la funcion
   inputAsunto.addEventListener('blur', validar);
   inputMensaje.addEventListener('blur', validar);

    function validar(e){
        if (e.target.value.trim() === '') {
            mostrarAlerta();
        }else{
            console.log('Si hay algo');
        }
    }


    function mostrarAlerta() {
        // Generar alerta en HTML
        const error = document.createElement('P');
        error.textContent = 'Hubo un error...'; // se agrega color de fondo
        error.classList.add('bg-red-600','text-white','p-2','text-center');
        // Inyectar al error del formulario
        formulario.appendChild(error);
    }


});