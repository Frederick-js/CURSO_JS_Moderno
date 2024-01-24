// arrow functions metodos flecha en el reproductor de musica

const reproductor = {
  reproducir: id => console.log(`Reproduciendo cancion... ${id}`),
  pausar: () => console.log("Pausando..."),
  borrar: id => console.log(`borrando cancion... ${id}`),
  playList: nombre => console.log(`Creando la playList de... ${nombre}`),
  reproducirPlaylist: nombre => console.log(`Reproduciondo playList ${nombre}`)
}

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.playList("lofi");
reproductor.reproducirPlaylist("music lofi 1");
