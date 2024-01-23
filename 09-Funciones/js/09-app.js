// supongamos que vamos a crear un reproductor de musica

const reproductor = {    // Esto serian un objeto
    reproducir: function(id){ // reproducir: seria una propiedad de un objeto pero como es una funcion se conoce como metodo de propiedad
        console.log(`Reproduciendo cancion... ${id}`);
    },
    pausar: function(){
        console.log('Pausando...');
    }
}

reproductor.reproducir(30);
reproductor.pausar();

reproductor.borrar = function(){
    console.log('Borrando cancion...');
}

reproductor.borrar();