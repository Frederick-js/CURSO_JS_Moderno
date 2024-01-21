// forma declarativa

const carrito = [];

// Definir un producto

const producto = {
    nombre : "Monitor 32 pulgadas",
    precio: 400
}

const producto2 = {
    nombre:"Celular",
    precio: 800
}

const producto3 = {
    nombre:"Teclado",
    precio: 50
}

let resultado;

resultado = [...carrito, producto];

console.table(carrito);
console.table(resultado);

resultado = [...resultado, producto2];
console.table(resultado);

resultado = [producto3, ...resultado, ]; // se puede agregar al inicio del array o al final fijarse en los ... 
console.table(resultado);