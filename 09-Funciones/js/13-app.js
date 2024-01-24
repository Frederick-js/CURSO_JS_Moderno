// arrow functions metodos flecha en el reproductor de musica

const reproductor = {
  cancion : '',
  reproducir: id => console.log(`Reproduciendo cancion... ${id}`),
  pausar: () => console.log("Pausando..."),
  borrar: id => console.log(`borrando cancion... ${id}`),
  playList: nombre => console.log(`Creando la playList de... ${nombre}`),
  reproducirPlaylist: nombre => console.log(`Reproduciondo playList ${nombre}`),
  set nuevaCancion(cancion) {
    this.cancion = cancion;
    console.log(`Añadiendo ${cancion}`);
  },
  get obtenerCancion(){
    console.log(`${this.cancion}`);
  }
}

reproductor.nuevaCancion = 'Enter Sadman';
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.playList("lofi");
reproductor.reproducirPlaylist("music lofi 1");
