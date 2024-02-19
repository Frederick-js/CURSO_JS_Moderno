// variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear();
const min = max - 10


//EVENTOS

// cuando cargue la web se llama una funcion
document.addEventListener('DOMContentLoaded', ()=>{
    mostrarAutos(); // Muestra los automoviles al cargar

    // llena las opciones de years
    llenarSelect();
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