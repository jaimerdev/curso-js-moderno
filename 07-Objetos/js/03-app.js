const producto = {
    nombre: 'Monitor',
    precio: 300,
    disponible: true
}

//Agregar nuevas propiedades al objeto
producto.imagen = 'imagen.jpg';
delete producto.disponible;

console.log(producto);