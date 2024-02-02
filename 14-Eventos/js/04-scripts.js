const formulario = document.querySelector('#formulario');

console.log(formulario);

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    console.log('Buscando...');
    console.log(e.target.action);
}