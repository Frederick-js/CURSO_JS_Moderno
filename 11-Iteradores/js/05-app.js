let i = 1;

do{
    
    if (i%3 === 0 && i % 5 === 0) {  // tambien  i % 15 === 0
        console.log(`${i} fizzbuzz`);
      }
      else if (i % 3 === 0) {
        console.log(`${i} fizz`);
      }
      else if (i % 5 == 0) {
        console.log(`${i} buzz`);
      }
    i++;// incremento
}while (i < 100); // condicion