const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponibilidad: true
}

// const nombre = producto.nombre;
// console.log(nombre);

// Destructuring
const {nombre} = producto;
console.log(nombre);

// Destructuring con arreglos
const numeros = [10,20,30,40,50];

// const  [primero, segundo, tercero] = numeros;
// console.log(segundo); // salida 20

// const [ , , tercero ] = numeros;
// console.log(tercero); // salida 30

const [primero, segundo, ...tercero] = numeros;
console.log(tercero); // va contener un arreglo de 30,40,50