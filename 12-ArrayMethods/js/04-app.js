const carrito = [ // y esto es un arreglo de objetos
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


let resultado ;
let resultado2 ;
let resultado3 ;
let resultado4 ;

resultado = carrito.filter(producto=> producto.precio > 400 );

resultado2 = carrito.filter(producto => producto.precio < 600);

console.log(resultado);

console.log(resultado2);

// ejemplo trae todos los objetos menos tablet

resultado3 = carrito.filter(producto=> producto.nombre !== 'Tablet');

console.log(resultado3);

resultado4 = carrito.filter((producto)=>{
    return producto.nombre == 'Television';
})

console.log(resultado4);