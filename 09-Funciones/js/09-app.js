
const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    pausar: function() {
        console.log('Pausando...');
    }
}

reproductor.reproducir(30);

reproductor.borrar = function() {
    console.log('Borrando canción...');
}