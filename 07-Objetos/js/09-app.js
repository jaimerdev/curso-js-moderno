'use strict';

const producto = {
    nombre: 'Monitor',
    precio: 300,
    disponible: true
}
//seal solo permite modificar un objeto literal
Object.seal(producto);

producto.disponible = false;
//producto.imagen = 'imagen.jpg';
// delete producto.precio;

console.log(producto);

console.log(Object.isSealed(producto));