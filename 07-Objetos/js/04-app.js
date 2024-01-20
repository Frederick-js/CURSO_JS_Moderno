const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible : true
}

// asignar un objeto a una variable
// const nombre = producto.nombre; // forma vieja de hacerlo con con ecmascript se mejoro

// a diferencia del anterior que no habia sido mejorado por ecmascript 
// extraer del objeto y crear la variable en un mismo paso
const {nombre, precio, disponible} = producto;
// const {nombre} = producto;
// const {precio} = producto;
console.log(nombre);
console.log(precio);
