const aprendiendo = function(){
 console.log('Aprendiendo JavaScript');   
}

const aprendiendo2 = () => {
    console.log('Aprendiendo JavaScript'); 
    console.log('Aprendiendo 2'); 
   }



// cuando solo tienes una funcion con una linea estas llaves ya no son
const aprendiendo3 = () => console.log('Aprendiendo 3') ;   
   
// cuando solo tienes una funcion con una linea dan po implicito el return
const aprendiendo4 = () => 'Aprendiendo 4' ;   
   

aprendiendo();
aprendiendo2();
aprendiendo3();
aprendiendo4();