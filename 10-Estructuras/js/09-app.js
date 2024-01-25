const autenticado = true;
const puedePagar = false;

console.log(autenticado ? 'si esta autenticado': 'no estas autenticado' );

console.log(autenticado && puedePagar ? 'si esta autenticado y puede pagar': 'no estas autenticado' );

console.log(autenticado ? puedePagar ? 'si esta autenticado y puede pagar' : 'si autenticado pero no puede pagar' : ' no no esta autenticado');