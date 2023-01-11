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

//Eliminar el último elemento de un arreglo...

carrito.pop();
console.table(carrito);

//Eliminar el primer elemento del arreglo
carrito.shift();
console.table(carrito);

//Eliminar cualquier elemento del arreglo sabiendo la posición

carrito.splice(1, 2);
console.table(carrito);