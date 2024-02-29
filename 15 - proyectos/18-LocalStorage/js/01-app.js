localStorage.setItem('Nombre', 'Miguel');

const producto = {
    nombre: "Monitor de 24 pulgadas",
    precio: 300
}

const productostring = JSON.stringify(producto);
console.log(producto.nombre);