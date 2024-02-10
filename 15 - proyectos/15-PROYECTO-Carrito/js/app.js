const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos')
let articulosCarrito = [];




cargarEventListeners();
function cargarEventListeners() {
    // Cuando agregas un curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso); // 
}


// Funciones
function agregarCurso(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}


// lee el contenido del html y extrae informacion
function leerDatosCurso(curso) {

    // crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    
    // agrega elementos al arreglo de carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
    carritoHtml();
}




// MUestra el carrito de compras en el html
function carritoHtml(){

    //Limpiar el html
    limpiarHtml(); // con esta funciona limpiamos el html colocandolo vacio

// recorre el carrito y genera el html
    articulosCarrito.forEach(curso => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                ${curso.titulo}
            </td>
        `;

        // agrega el html del carrito en el tbody
        contenedorCarrito.appendChild(row); // appendChild Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado.
    })
}


//Eliminar los curcos del tbody
function limpiarHtml() {
    
    // forma lenta
    // contenedorCarrito.innerHTML = '';

    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}

vaciarCarritoBtn.addEventListener('click',()=>{
    limpiarHtml();
})

