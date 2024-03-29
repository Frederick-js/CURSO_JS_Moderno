const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {

  // Cuando agregas un curso presionando "Agregar al carrito"
  listaCursos.addEventListener("click", agregarCurso); //

  // elimina cursos del carrito
  carrito.addEventListener('click', eliminarCurso)

  // boton vaciar carrito
  vaciarCarritoBtn.addEventListener ('click', vaciarCarrito);
}

function vaciarCarrito(e) {
  articulosCarrito = [];  // reseteamos el arreglo
  limpiarHtml(); // eliminamos todo el html
}

// Funciones
function agregarCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = e.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado);
  }
}


 // Eliminar un curso del carrito
 function eliminarCurso(e) {
  if (e.target.classList.contains('borrar-curso')) {
    const cursoId = e.target.getAttribute('data-id');

    // Elimina del arreglo de articulosCarrito por el data-id
    articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId );
    
    carritoHtml(); // iterar sobre el carrito y mostrar su html
  }
 
 }





// lee el contenido del html y extrae informacion
function leerDatosCurso(curso) {
  // crear un objeto con el contenido del curso actual
  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };

  // Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id);
    if (existe) {
        // actualizamos la cantidad
        const cursos = articulosCarrito.map(curso => {
        if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso;  // retorna el objeto actualizado
            } else {
              return curso; // retorna los objetos que no son los duplicados
            }
        })
        articulosCarrito = [...cursos]
    }else{
        // agrega elementos al arreglo de carrito
  articulosCarrito = [...articulosCarrito, infoCurso];
    }

  console.log(articulosCarrito);
  carritoHtml();
}

// MUestra el carrito de compras en el html
function carritoHtml() {
  //Limpiar el html
  limpiarHtml(); // con esta funciona limpiamos el html colocandolo vacio

  // recorre el carrito y genera el html
  articulosCarrito.forEach((curso) => {
    const { imagen, titulo, precio, cantidad, id} = curso;  // destructuración 
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>
       <img src='${curso.imagen}' width='100'>
    </td>
    <td>
       ${titulo}
    </td>
    <td>
      ${precio}
    </td>
     <td>
        ${cantidad}
    </td> 
    <td>
        <a href='#' class= 'borrar-curso' data-id='${id}'>X
    </td>  
        `;

    // agrega el html del carrito en el tbody
    contenedorCarrito.appendChild(row); // appendChild Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado.
  });
}

//Eliminar los curcos del tbody
function limpiarHtml() {
  // forma lenta
  // contenedorCarrito.innerHTML = '';

  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild); // este elimina los elementos hijos creado asi verificamos q no hallan
  }
}
