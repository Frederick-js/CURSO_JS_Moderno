// supongamos que vamos a crear un reproductor de musica

const reproductor = {    // Esto serian un objeto
    reproducir: function(id){ // reproducir seria una propiedad pero como es una funcion se conoce como metodo de propiedad
        console.log(`Reproduciendo cancion... ${id}`);
    }
}

reproductor.reproducir();
