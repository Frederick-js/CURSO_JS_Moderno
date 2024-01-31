// seleccionar elementos por su clase
console.log('-------1-----');
const header = document.getElementsByClassName('header'); // getElementsByClassName retorna todos los resultados
console.log(header);

console.log('-------2-----');
const hero = document.getElementsByClassName('hero');
console.log(hero);



// si las clases existen mas de 1 vez
console.log('-------3-----');
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);


// si una clase no existe
console.log('-------4-----');
const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste);

// la sintaxis anteriores son menos comunes pero puede que nos encontremos con ella. 


