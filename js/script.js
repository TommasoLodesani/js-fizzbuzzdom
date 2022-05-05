// programma che stampi in log numeri da 1 a 100
let i;

for (let i = 1 ; i <101; i++){
    console.log(i);
    
    if (i % 3 == 0){
        console.log("Fizz");
    } else if (i % 5 == 0){
        console.log("Buzz");

    } else if (i % 15 == 0){
        console.log("FizzBuzz");
    }
    

    // Per i multipli di 3 stampi “Fizz” al posto del numero
   

}
// Per i multipli di 5 stampi Buzz

// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
