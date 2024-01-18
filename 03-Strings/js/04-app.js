const producto = '     Monitor 20 Pulgadas         ';

console.log(producto);
console.log(producto.length);

// Eliminar del inicio... los espacios en blanco
console.log( producto.trimStart());

// Eliminar del final... los espacios en blanco
console.log(producto.trimEnd());

// eliminar en ambas direcciones
console.log(producto.trim());

// aqui elimina tanto inicio como final espacios
console.log(producto.trimStart().trimEnd());

