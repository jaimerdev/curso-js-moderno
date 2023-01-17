const dinero = 500;
const totalAPagar = 300;
const tarjeta = true;


if(dinero >= totalAPagar) {
    console.log('Sí podemos pagar');
} else if(tarjeta) {
    console.log('Sí puedo pagar porque tengo la tarjeta');
} else {
    console.log('fondos insuficientes');
}