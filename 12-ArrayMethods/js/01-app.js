const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio']; // es un arreglo con indices

const carrito = [ // y esto es un arreglo de objetos
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// comprobar si un arreglo existe en un arreglo

meses.forEach(mes => {
    if (mes == 'Enero') {
        console.log('Enero si existe');
    }
});

const resultado = meses.includes('Enero');

console.log(resultado);

console.log('-------------');


// En un arreglo de objetos se utiliza .some

const existe = carrito.some(producto => producto.nombre === 'Celular')

console.log(existe);

console.log('-------------');

// en un arreglo tradicional con .some

const existe2 = meses.some(mes => mes === 'Febrero')

console.log(existe2);