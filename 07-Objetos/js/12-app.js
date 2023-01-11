//Object Literal
const producto = {
    nombre: 'Monitor',
    precio: 300,
    disponible: true
}

//Object Constructor

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}
const producto2 = new Producto('Televisión', 500);
console.log(producto2);