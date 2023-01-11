const carrito = [
    {nombre: 'monitor', precio: 500},
    {nombre: 'celular', precio: 300},
    {nombre: 'tablet', precio: 600},
    {nombre: 'teclado', precio: 20},
    {nombre: 'ps5', precio: 900},
    {nombre: 'audifonos', precio: 200}
]


for(let i = 0; i < carrito.length; i++) {
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

carrito.forEach(function(p) {
    console.log(`${p.nombre} - Precio: ${p.precio}`);
})