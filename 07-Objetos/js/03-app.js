const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible : true
}

console.log(producto);
console.log(producto.nombre);
console.log(producto['nombre']);

// agregar nuevas propiedades al objeto
producto.imagen = "imagen.jpg";

// Eliminar una propiedad de un objeto
delete producto.disponible;
console.log(producto);