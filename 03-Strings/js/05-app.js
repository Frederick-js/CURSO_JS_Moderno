const producto = " Monitor 20 Pulgadas";

console.log(producto);

// metodo  .replace para reemplazar
console.log(producto.replace('Pulgadas','"'));
console.log(producto.replace('Monitor','Monitor curvo'));

// metodo  .slice para cortar
console.log(producto.slice(0,10));
console.log(producto.slice(8));
console.log(producto.slice(2,1));

// Alternativa a slice
console.log(producto.substring(0,10)); // donde inicia a cortar 0, donde termina de cortar 10
console.log(producto.substring(2,1)); // si trata de mostrar algo y  lo modifica


const usuario = "Juan";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0)); // charAt le dice al sistema bueno corta la primera letra