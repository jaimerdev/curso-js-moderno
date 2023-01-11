const producto = {
    nombre: 'Monitor',
    precio: 300,
    disponible: true
}

// const nombre = producto.nombre;
// console.log(nombre);

//Destructuring
const {nombre, precio, disponible} = producto;
console.log(precio);


//Destructuring con arreglos 
const numeros = [10, 20, 30, 40, 50];
// const [ , , tercero] = numeros

const [primero, ...tercero] = numeros;

console.log(tercero);