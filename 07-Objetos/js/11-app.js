// const nombre = "hola";
// const precio = 20;
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible : true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`);
    }
}

const producto2 = {
    nombre: "tablet 20 pulgadas",
    precio: 400,
    disponible : true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`);
    }
}

producto.mostrarInfo();

producto2.mostrarInfo();