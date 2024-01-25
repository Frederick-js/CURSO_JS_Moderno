// Operador mayor que y menor que

const dinero = 500;
const totalApagar = 502;
const tarjeta = true;
const cheque = true;

if (dinero > totalApagar) {
    console.log('si puede pagar..');
}else if (cheque) {
    console.log('si puede pagar por que tengo cheque');
}
else if (tarjeta) {
    console.log('si puedo pagar por que tengo la tarjeta');
}else{
    console.log('no tienes saldo suficiente');
}