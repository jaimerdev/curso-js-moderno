//Switch case
const metodoPago = 'efectivo';
switch(metodoPago) {
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    default:
        console.log('Método de pago no válido');
        break;
}