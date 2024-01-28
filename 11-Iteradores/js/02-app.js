// crea un for loop que al detectar el elemento numero 5 detenga su ejecucion.


for(let i = 0; i<= 10; i++){
    if (i == 5) {
        console.log('este es el 5');
        break;
    }
console.log(`numero: ${i}`);
}
console.log('--------------------');

for(let i = 0; i<= 10; i++){
    if (i == 5) {
        console.log('este es el 5');
        continue;
    }
console.log(`numero: ${i}`);
}
console.log('--------------------');

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200, descuento: true},
    { nombre: 'Audifonos', precio: 300, descuento: false, promo: true},
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].descuento) {
        console.log(`El articulo ${carrito[i].nombre} tiene descuento`);
        continue;
    }
    console.log(carrito[i].nombre);
}
console.log('--------------------');

for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].promo) {
        console.log(`El producto ${carrito[i].nombre} tiene una promocion del 70%`);
        continue;
    }
   
    console.log(carrito[i].nombre);
}