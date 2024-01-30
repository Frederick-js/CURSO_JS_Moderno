const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio']; // es un arreglo con indices
const meses2 =['Agosto','Septiembre'];
const meses3 =['Octubre','Nomviembre'];

// .concat
const resultado = meses.concat(meses2, meses3); // .concat sirve para unir
console.log(resultado);


// spread operator
const resultado2 = [...meses, ...meses2, ...meses3];
console.log(resultado2);