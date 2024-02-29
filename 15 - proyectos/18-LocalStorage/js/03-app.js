// eliminar de localstorage
localStorage.removeItem('Nombre');

// Actualizar un registro
const mesesArray = JSON.parse(localStorage.getItem('meses')); // convierte meses que esta en string ahora a objeto de array.
console.log(mesesArray);
mesesArray.push('Nuevo Mes');
console.log(mesesArray);
localStorage.setItem('meses', JSON.stringify(mesesArray));
localStorage.clear();
