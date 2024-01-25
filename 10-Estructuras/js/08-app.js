const autenticado = true;


if (autenticado) {
    console.log('esta autenticado');
}

// const puntaje = 400;




function revisarPuntaje(puntaje) {
    if (puntaje >= 400) {
        console.log('excelente!!');
        return;
    }

    if ((puntaje < 400 ) && (puntaje >= 300 )) {
        console.log('muy buen puntaje!!!');
        return;
    }
    
    if (puntaje < 300){ 
        console.log('pesimo puntaje');
    }
    return;
}

revisarPuntaje(400)