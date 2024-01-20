const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible : true

}
console.log(producto);
producto.disponible = false;
console.log(producto);

delete producto.precio;
console.log(producto);