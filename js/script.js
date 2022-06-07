

const mySquares = document.querySelector(".my_container");

// programma che stampi in log numeri da 1 a 100
for (let i = 1 ; i < 101; i++){

    if (i % 3 == 0 && i % 5 == 0){
        element = `<div class = "square fizzBuzz">FizzBuzz</div>`;
        mySquares.innerHTML += element;
        console.log("FizzBuzz");
    } else if (i % 3 == 0){
        element = `<div class = "square fizz">Fizz</div>`;
        mySquares.innerHTML += element;
        console.log("Fizz");
    } else if (i % 5 == 0){
        element = `<div class = "square buzz">Buzz</div>`;
        mySquares.innerHTML += element;
        console.log("Buzz");
    } else{
        element = `<div class = "square normal">${i}</div>`;
        mySquares.innerHTML += element;
        console.log(i);
    }

    


    

}




