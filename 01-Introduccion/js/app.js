/*
    ====================================
    === pregunta al usuario el nombre===
    ====================================
*/

const nombre = prompt('Cual es tu nombre');

//Toma el nombre y lo muestra en pantalla
document.querySelector('.contenido').innerHTML = `hola ${nombre}`;

// Asigna el valor hacia la variable producto
const producto = 'Monitor 24 pulgadas';