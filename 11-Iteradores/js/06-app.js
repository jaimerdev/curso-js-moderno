//forEach

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar'];

pendientes.forEach( (pendiente, i) => {
    console.log(`${i}: ${pendiente}`)
})//Modifica el arreglo original


pendientes.map( (pendiente, i) => {
    console.log(`${i}: ${pendiente}`)
}) //Crea un nuevo arreglo