document.addEventListener('DOMContentLoaded', function(){

    //Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');

   // Asignar eventos
   inputEmail.addEventListener('blur', validar);  // colocar validar sin() es llamar una funcion hasta que suceda el evento. colocando si o si llama la funcion
   inputAsunto.addEventListener('blur', validar);
   inputMensaje.addEventListener('blur', validar);

    function validar(e){
        console.log(e.target.value);
    }

});