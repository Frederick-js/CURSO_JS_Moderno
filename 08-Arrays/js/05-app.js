// forma imperativa - modifica la varible original sobre ella misma trabaja

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


carrito.push(producto);

console.table(carrito);

carrito.push(producto2);
console.table(carrito);

carrito.unshift(producto3); // unshift lo manda al principio del arreglo
console.table(carrito);