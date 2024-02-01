// crear un nuevo enlace
const enlace = document.createElement('a');

// agregandole texto
enlace.textContent = 'nuevo enlace';

// anadiendo href
enlace.href = '/nuevo-enlace';

// anadiendo _blank
enlace.target = '_blank';
console.log(enlace);

// seleccionar la navegacion
const navegacion = document.querySelector('.navegacion');
console.log(navegacion);
// navegacion.appendChild(enlace); // appenChild agrega al final de los hijos
navegacion.insertBefore(enlace, navegacion.children[1]); // lo agrega antes del hijo 1 


enlace.setAttribute('data-enlace', 'nuevo-enlace');
enlace.classList.add('alguna-clase');
console.log(enlace);

enlace.onclick = miFuncion;

function miFuncion() {
    alert ('Diste Click');
}

// Crear un Card
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('P');
parrafo3.textContent = '800 por persona';
parrafo3.classList.add('precio');



// Crear div con la clase de info
const info = document.createElement('div');
info.classList.add('info');

info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.alt = 'Texto alternativo';


// crear el card
const card = document.createElement('div');
card.classList.add('card');


// Asignar la imagen
card.appendChild(imagen);

// asignar info
card.appendChild(info);

// insertar en el html
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card); // agrega al final
contenedor.insertBefore(card, contenedor.children[0]); // agrega al inicio
