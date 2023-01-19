const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar'];

for(let pendiente in pendientes) {
    console.log(pendiente);
}

const automovil = {
    modelo: 'Camaro',
    año: '1969',
    motor: '2.0'
}

for(let propiedad in automovil) {
    console.log(propiedad);
}

for(let [llave, valor] of Object.entries(automovil)) {
    console.log(valor);
}