const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio']; // es un arreglo con indices

const carrito = [ // y esto es un arreglo de objetos
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// conocer el indice de un elememto usando foreach por ejemplo en que indice se encuentra Abril

meses.forEach((mes, i) => {
    if (mes === 'Abril') {
        console.log(`Encontrado en el indice ${i}`)
    }

})


console.log('-----------------');


// Encontrar el indice de Abril

const indice = meses.findIndex(mes=> mes === 'Abril');
console.log(indice);


console.log('-----------------');


// intenta comprobar alguno de los valores del arreglo de objetos

const indice2 = carrito.findIndex(producto => producto.precio === 100);
console.log(indice2);

console.log('-----------------');

const indice3 = carrito.findIndex(producto => producto.nombre === 'Celular');
console.log(indice3);