// Numeros del 1 al 100; si es multiplo de 3 y 5 muestra FizzBuzz; si es solo de 3: Fizz; y solo de 5: Buzz
for(var i=1; i<=100; i++) {
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    }
    else if(i % 3 == 0){
        console.log("Fizz");
    }
    else if(i % 5 == 0){
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}