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
    mostrarAutos(autos); // Muestra los automoviles al cargar

    // llena las opciones de years
    llenarSelect();
})


// event listener para los select de busqueda
marca.addEventListener('change', e=> {
    datosBusqueda.marca = e.target.value;
    filtrarAuto(autos);
})

year.addEventListener('change', e=> {
    datosBusqueda.year = e.target.value;
    filtrarAuto(autos);
})

minimo.addEventListener('change', e=> {
    datosBusqueda.minimo = e.target.value;
    filtrarAuto(autos);
})

maximo.addEventListener('change', e=> {
    datosBusqueda.maximo = e.target.value;
    filtrarAuto(autos);
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
function mostrarAutos(autos) {
    limpiarHtml();  // elimina el html previo
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


function limpiarHtml() {
    while(resultado.firstChild)
    resultado.removeChild(resultado.firstChild);
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
function filtrarAuto(autos) {
    
    const resultado = autos.filter( filtraMarca ).filter( filtrarYear).filter( filtrarMinimo).filter( filtrarMaximo);
    console.log(resultado);
    mostrarAutos(resultado);
}

function filtraMarca(auto) {
    const {marca} = datosBusqueda;
    if (marca) {
        return auto.marca === marca;
    }
    return auto;
}


function filtrarYear(auto) {
    const {year} = datosBusqueda;
    if (year) {
        return auto.year === parseInt(year);
    }
    return auto;
}





function filtrarMinimo(auto) {
    const {minimo} = datosBusqueda;
    if (minimo) {
        return auto.precio >= minimo;
    }
    return auto;
}

function filtrarMaximo(auto) {
    const {maximo} = datosBusqueda;
    if (maximo) {
        return auto.precio <= maximo;
    }
    return auto;
}