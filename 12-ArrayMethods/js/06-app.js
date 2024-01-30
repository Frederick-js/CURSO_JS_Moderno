const carrito = [ // y esto es un arreglo de objetos
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

const resultado = carrito.every(producto => producto.precio < 500);
console.log(resultado);


const resultado2 = carrito.some(producto => producto.precio < 500);
console.log(resultado2);
