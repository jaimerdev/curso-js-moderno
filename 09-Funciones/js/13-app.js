const reproductor = {
    reproducir: id => `Reproduciendo canción con el id ${id}`,
    pausar: () => console.log('Pausando...'),
    borrar: id => 'Borrando canción... ${id}'
}

reproductor.reproducir(30);