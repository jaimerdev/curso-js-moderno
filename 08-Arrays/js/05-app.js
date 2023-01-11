const carrito = [];

//Definir un producto

const producto = {
    nombre: 'monitor',
    precio: 400
}

const producto2 = {
    nombre: 'celular',
    precio: '800'
}

const producto3 = {
    nombre: 'teclado',
    precio: 50
}

carrito.push(producto);
carrito.unshift(producto3);

console.table(carrito);