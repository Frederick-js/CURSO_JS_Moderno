localStorage.setItem('Nombre', 'Miguel');

const producto = {
    nombre: "Monitor de 24 pulgadas",
    precio: 300
}

const productostring = JSON.stringify(producto);
localStorage.setItem('producto', productostring);

const meses = ['Enero','Febrero','Marzo'];
const mesesString = JSON.stringify(meses);

localStorage.setItem('meses', mesesString);
