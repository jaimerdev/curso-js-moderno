const autenticado = true;
const puedePagar = true;

console.log(autenticado || puedePagar ? 'Sí puede comprar' : 'No puede comprar');

//Condiciones anidadas

console.log(autenticado ? puedePagar ? 'Sí está autenticado y puede pagar' : 'Está autenticado pero no dispone del saldo suficiente' : 'No puede comprar');

