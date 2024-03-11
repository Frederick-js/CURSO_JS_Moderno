// a esta sintaxis es la mas comun objetc literal
const cliente = {
  nombre: "juan",
  saldo: 500,
};

console.log(cliente);

// objet constructor
function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

const juan = new Cliente("juan", 500);
console.log(juan);
