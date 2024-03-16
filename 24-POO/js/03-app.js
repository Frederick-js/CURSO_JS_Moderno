// class declaration
class Cliente {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }

  mostrarInformacion() {
    return `Cliente: ${this.nombre} tu saldo es de: $${this.saldo}`;
  }

  static bienvenida() {
    return `Bienvenido al cajero`;
  }
}

// Herencia
class Empresa extends Cliente {
  constructor(nombre, saldo, telefono, categoria) {
    super(nombre, saldo);
    this.telefono = telefono;
    this.categoria = categoria;
  }

  static bienvenida() {
    return `Bienvenido al cajero de empresas`;
  }
}

const juan = new Cliente("Juan", 400);
const empresa = new Empresa(
  "Codigo con fai",
  500,
  3203344,
  "Aprendizaje en linea"
);
console.log(empresa);
console.log(empresa.mostrarInformacion());
console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());
