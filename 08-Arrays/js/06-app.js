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

let resultado;
resultado = [...carrito, producto];

console.table(resultado);