const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

// Revisar si 2 numeros son iguales
// comparador igual no es estricto
console.log(numero1 == numero3); // devuelve false porque no se cumple no es igual.
console.log(numero1 == numero2); // devuelve true porque == es iguales asi sea un string y numero.

// comparador estricto
console.log(numero1 === numero2); // devuelve false porque es exactamente igual osea estricto.
console.log(numero1 === parseInt(numero2)); // devuelve true porque con parseInt convierte el string a numero.


console.log(typeof numero1);
console.log(typeof numero2);


// Diferente
const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2); // retorna true porque son diferentes.
console.log(numero1 != numero2); // retorna false porque no son diferentes ambos son 20

// Diferente estricto
console.log(numero1 !== numero2); // retorna true porque es verdad que numero1 es diferente a numero2