// variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');


// contenedor para los resultados
const resultado = document.querySelector('#resultado');


const max = new Date().getFullYear();
const min = max - 10

// Generar un objeto con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''

}




//EVENTOS

// cuando cargue la web se llama una funcion
document.addEventListener('DOMContentLoaded', ()=>{
    mostrarAutos(); // Muestra los automoviles al cargar

    // llena las opciones de years
    llenarSelect();
})


// event listener para los select de busqueda
marca.addEventListener('change', e=> {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
})

year.addEventListener('change', e=> {
    datosBusqueda.year = e.target.value;
})

minimo.addEventListener('change', e=> {
    datosBusqueda.minimo = e.target.value;
})

maximo.addEventListener('change', e=> {
    datosBusqueda.maximo = e.target.value;
})

puertas.addEventListener('change', e=> {
    datosBusqueda.puertas = e.target.value;
})

transmision.addEventListener('change', e=> {
    datosBusqueda.transmision = e.target.value;
})

color.addEventListener('change', e=> {
    datosBusqueda.color = e.target.value;
})


// Funciones
function mostrarAutos() {
    // vamos a iterar sobre autos
    // iteramos sobre cada automobil 
    autos.forEach(auto => {
        // creamos un parrafo para cada automovil
        const autoHtml = document.createElement('P');

        // textcontent el contenido va ser igual a un tempalte string
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        autoHtml.textContent = `${marca} ${modelo} - ${year} - ${puertas} puertas - Transmision: ${transmision} - Precio: ${precio} - Color: ${color}`;
    

        // Instertar el html
        resultado.appendChild(autoHtml);


    })

}


// Genera los years del select
function llenarSelect() {
    
    //  este orden hace que salga del ultimo year al minimo y no alcontrario
    for (let i = max; i >= min; i--) {
        
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); // agrega las opciones de year al select
    }

}


// funcion que filtra en base a la busqueda
function filtrarAuto() {
    const resultado = autos.filter( filtraMarca );
    console.log(resultado);
}

function filtraMarca(auto) {
    const {marca} = datosBusqueda;
    if (marca) {
        return auto.marca === marca;
    }
    return auto;
}