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

const producto4 = {
    nombre:"MOuse",
    precio: 30
}

// .push agrega al final de un arreglo
carrito.push(producto);
carrito.push(producto2);
carrito.push(producto4);

const producto3 = {
    nombre:"Teclado",
    precio: 50
}

carrito.unshift(producto3); // unshift lo manda al principio del arreglo

console.table(carrito);

// eliminar ultimo elemento del arreglo 
carrito.pop();
console.table(carrito);

//Eliminar del inicio del arreglo

carrito.shift();
console.table(carrito);


carrito.splice(1, 1);
console.table(carrito);