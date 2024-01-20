const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible : true,
    informacion : {
        medidas : {
            peso: "1kg",
            medida: "1m"
        },
        fabricacion: {
            pais: "china"
        }
    }
        
}

const {nombre,precio, informacion: {fabricacion:{pais}}} = producto;
console.log(precio);
console.log(nombre);
console.log(pais);
