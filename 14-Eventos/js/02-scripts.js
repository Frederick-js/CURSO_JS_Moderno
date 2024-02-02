const nav = document.querySelector('.navegacion');

console.log(nav);

// Registrar un evento 
nav.addEventListener('mouseenter', () => {
    console.log('entrando a la navegacion');
    nav.style.backgroundColor = 'transparent';
})

nav.addEventListener('mouseout', () => {
    console.log('saliendo de la navegacion');
    nav.style.backgroundColor = 'white';
})

// mousedown - similar al clik]
// click
// dblclick = doble ckick
// mouseup  =  cuando suelto el mouse