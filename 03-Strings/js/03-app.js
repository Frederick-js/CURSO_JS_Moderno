const producto = 'monitor 20 pulgadas ';
const precio = '30 usd';

// formas de concatenar
console.log(producto.concat(precio)); // concatena precio
console.log(producto.concat('en descuento')); // concatena precio
console.log(producto + precio); // concatena precio
console.log(producto + " con un precio de: " + precio);
console.log("el producto" + producto + "tiene un precio de " + precio);
console.log("el producto " , producto , "tiene un precio de " , precio);
console.log(`El producto ${producto} tiene un precio de $${precio}` );