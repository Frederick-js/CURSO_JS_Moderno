const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');
console.log(btnFlotante);
console.log(footer);

// btnFlotante.addEventListener('click', () =>{
//     console.log('Diste click en el boton');
// });

btnFlotante.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter() {
    console.log('Diste click en el boton');
};