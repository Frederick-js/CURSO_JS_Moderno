const meses = ['Enero','Febrero','Marzo', 'Abril', 'Mayo', 'Junio'];

console.table(meses);

// para recorrer un array lo primero que debemos saber es cuanto mide el arreglo

// cuanto mide el arreglo
console.log(meses.length); // el leng si inicia desde 1 2 3 4 5 6 etc no es como el indice que si inicia de 0

// para recorrerlo ya sabiendo cuanto mide el arreglo

for (let i = 0; i < meses.length; i++) {
    console.log(meses[i]);
    
}