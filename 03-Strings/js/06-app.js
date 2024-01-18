const producto = 'Monitor 20 pulgadas';

// .repeat te va a permitir repetir una cadena de texto...

const texto = ' en Promocion '.repeat(3);

console.log(texto);
console.log(`${producto} ${texto} !!!`);

// split, dividir una string

const actividad = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(", "));

const tweet = 'Aprendiendo Javascript #JSModerno';
console.log(tweet.split("#"));