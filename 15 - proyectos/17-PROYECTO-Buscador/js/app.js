// variables
const resultado = document.querySelector('#resultado');






//EVENTOS

// cuando cargue la web se llama una funcion
document.addEventListener('DOMContentLoaded', ()=>{
    mostrarAutos();
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
console.log(autos);