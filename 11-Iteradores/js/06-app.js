// forEach
console.log('----------1-----------');
const pendientes1 = ['Tarea', 'Comer','Proyecto','Estudiar JavaScript'];

pendientes1.forEach((pendiente)=>{
    console.log(pendiente);
   
});

console.log('----------2-----------');

const pendientes2 = ['Tarea', 'Comer','Proyecto','Estudiar JavaScript'];

pendientes2.forEach (pendiente => console.log(pendiente));

console.log('----------3-----------');

const pendientes3 = ['Tarea', 'Comer','Proyecto','Estudiar JavaScript'];

pendientes3.forEach((pendiente, indice)=>{
    console.log(`${indice} : ${pendiente}`);
   
});

console.log('----------4----------');

const carrito1 = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

carrito1.forEach((producto)=> {
    console.log(producto.nombre);
});

console.log('----------4----------');

const carrito2 = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

carrito2.forEach(producto=> console.log(producto.nombre));

console.log('----------4----------');

const carrito3 = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

const nuevoarreglo = carrito3.map(producto=> producto.nombre);
console.log(nuevoarreglo);
