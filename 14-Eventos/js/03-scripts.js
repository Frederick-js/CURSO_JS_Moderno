const busqueda = document.querySelector('.busqueda');

console.log(busqueda);

// busqueda.addEventListener('keydown', () => {
//     console.log('escribiendo...');
// })

// busqueda.addEventListener('input', (comotudesees) => {
//     console.log(comotudesees);
// })



busqueda.addEventListener('input', (e) => {
    if (e.target.value === '') {
        console.log('fallo la validacion');
    }
    
})