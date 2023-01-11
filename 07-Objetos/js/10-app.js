const producto = {
    nombre: 'Monitor',
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

const resultado = Object.assign(producto, medidas);

//Spread operator o Rest operator
const resultado2 = {...producto, ...medidas};

console.log(resultado);
console.log(resultado2);