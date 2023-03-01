//create an array of numbers from 1 to 100

let numbers = [];                   //create an empty array
for (let i = 1; i <= 100; i++) {    //loop through the numbers
    numbers.push(i);                //add the numbers to the array
}


// create a click event for the Generate button

let generate = document.getElementById("generate-btn") // get the generate button
generate.addEventListener("click", function() {

    alert("You clicked the button!") //text purpose only
    let random = Math.floor(Math.random() * 100) + 1;   //generate a random number
    let output = document.getElementById("number").value;     //get the output element
    output.innerHTML = random;                          //display the random number
    console.log(random);                                //display the random number in the console
  }

)

// create a click event for the Guess button

let guess = document.getElementById("guess-btn") // get the guess button
guess.addEventListener("click", function() { 

    alert("You clicked the button!") //text purpose only

  } 

)

// create a click event for the Reset button

let reset = document.getElementById("reset-btn") // get the reset button
reset.addEventListener("click", function() {

    alert("You clicked the button!") //text purpose only

  }
); 












// let guess = document.getElementById("guess").value; //get the user's guess
// let random = Math.floor(Math.random() * 100) + 1;   //generate a random number
// let output = document.getElementById("number");     //get the output element

// guess.addEventListener("click", function() {        //when the button is clicked
//     if (guess == random) {                          //if the guess is correct
//         output.innerHTML = "You guessed it!";       //display a message
//     } else {                                        //otherwise
//         output.innerHTML = "Sorry, the number was " + random; //display the number
//     }
// });


// in the above line:
// Math.random() * 100 generates a random number between 0 and 100
// Math.floor() rounds the number down to the nearest integer ie 1.9 becomes 1
// + 1 adds 1 to the number so that the range is 1 to 100 instead of 0 to 99..
//...because arrays start at 0 and end at 99 so we need to add 1 to the range


// create a click event for the Reset button

// create a function to generate a random number

