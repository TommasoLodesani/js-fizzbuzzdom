

const mySquares = document.querySelector(".my_container");

// programma che stampi in log numeri da 1 a 100
for (let i = 1 ; i < 101; i++){
    let element;

    if (i % 3 == 0 && i % 5 == 0){
        element = `<div class = "square fizzBuzz">${i}</div>`;
        console.log("FizzBuzz");
    } else if (i % 3 == 0){
        element = `<div class = "square fizz">${i}</div>`;
        console.log("Fizz");
    } else if (i % 5 == 0){
        element = `<div class = "square buzz">${i}</div>`;
        console.log("Buzz");
    } else{
        element = `<div class = "square normal">${i}</div>`;
        console.log(i);
    }

    mySquares.innerHTML += element;


    

}




