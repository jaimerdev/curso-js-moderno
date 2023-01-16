const carrito = [
    {nombre: 'monitor', precio: 500},
    {nombre: 'celular', precio: 300},
    {nombre: 'tablet', precio: 600},
    {nombre: 'teclado', precio: 20},
    {nombre: 'ps5', precio: 900},
    {nombre: 'audifonos', precio: 200}
]

//.forEach
const nuevoArreglo1 = carrito.forEach(p => `${p.nombre} - Precio: ${p.precio}`);

//.map crea un arreglo nuevo
const nuevoArreglo2 = carrito.map(p => `${p.nombre} - Precio: ${p.precio}`);

