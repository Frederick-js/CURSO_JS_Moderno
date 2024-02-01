// const encabezado = document.querySelector('.contenido-hero h1');

// console.log(encabezado.style);

// encabezado.style.backgroundColor= 'red';  // cambiando a color rojo
// encabezado.style.fontFamily = 'Arial'; // cambia fuente
// encabezado.style.textTransform = 'uppercase'; // transforma a mayusculas
// console.log(encabezado);

const card = document.querySelector('.card');
card.classList.add('nueva-clase');
card.classList.add('nueva-clase2', 'segunda-clase');
card.classList.remove('nueva-clase2');
console.log(card.classList);

