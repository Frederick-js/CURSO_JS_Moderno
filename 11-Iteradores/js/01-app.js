// for(let i = 0; i<= 20; i++){
// console.log(`numero: ${i}`);
// }

// for (let i = 1; i <= 20; i++) {
//     if(i%2 === 0){
//     console.log(`El numero ${i} es Par`);
//     } else{
//             console.log(`El numero ${i} es Impar`);
//     }
    
    
// }

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
// los arreglos inician de 0
// aqui buscamos en el array por indice en este caso 0

console.log(carrito.length);
console.log(carrito[0]);

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
    
}

console.log('----------------------');

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].precio);
    
}