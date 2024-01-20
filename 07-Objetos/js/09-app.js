
"use strict";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible : true

}
Object.seal(producto);

producto.disponible = false;  // se se puede modificar una propiedad
// producto.imagen = "imagen.jpg";  // pero con seal no deja agregar una propiedad en este caso imagen

console.log(producto);

