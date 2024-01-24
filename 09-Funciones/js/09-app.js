// supongamos que vamos a crear un reproductor de musica

const reproductor = {    // Esto serian un objeto
    reproducir: function(id){ // reproducir: seria una propiedad de un objeto pero como es una funcion se conoce como metodo de propiedad
        console.log(`Reproduciendo cancion... ${id}`);
    },
    pausar: function(){
        console.log('Pausando...');
    },
    borrar: function(id){
        console.log(`borrando cancion... ${id}`);
    },
    playList: function(nombre){
        console.log(`Creando la playList de... ${nombre}`);
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciondo playList ${nombre}`);
    }
}

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.playList('lofi');
reproductor.reproducirPlaylist('music lofi 1');

