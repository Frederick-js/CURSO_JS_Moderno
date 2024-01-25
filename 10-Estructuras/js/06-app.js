const usuario = true;
const puedesPagar = false;

if (usuario && puedesPagar) {
  console.log("si puedes comprar");
} else if (!usuario && !puedesPagar) {
  console.log("no puedes comprar");
} else if (!usuario) {
  console.log("Inicia sesion o saca una cuenta");
} else if (!puedesPagar) {
  console.log("No tienes fondos suficientes");
}
