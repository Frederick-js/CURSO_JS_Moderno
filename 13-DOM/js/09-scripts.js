// const primerEnlace = document.querySelector('a');
// console.log(primerEnlace);
// primerEnlace.remove();  // aqui elimino el enlace vender de la barra de navegacion

//Eliminar desde el padre
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);

navegacion.removeChild(navegacion.children[2]);   // elimina registro del navegador