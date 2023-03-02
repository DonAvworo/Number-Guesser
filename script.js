// create a click event for the Generate button
let generate = document.getElementById("generate-btn")      // get the generate button
generate.addEventListener("click", function() {

    // alert("You clicked the button!")                     //text purpose only
    let random = Math.floor(Math.random() * 100) + 1;       //generate a random number
    let output = document.getElementById("result-info");    //get the output element
    let output2 = document.getElementById("result");        //get the output element
    output.innerHTML = random;                              //display the random number
    output2.innerHTML = random;                             //display the random number
    // console.log(random);                                    //display the random number in the console

    if (random == 43 && random == 39 && random == 5) {               //if the number is divisible by 3 and 5
        output.innerHTML = "Yass!!! You Got It!";                      //display FizzBuzz
    }

    else if (random % 3 == 0 && random % 5 == 0) {               //if the number is divisible by 3 and 5
        output.innerHTML = "Yass!!! You Got It!";                      //display FizzBuzz
    }

    else {                                  //otherwise
        //output.innerHTML = "Sorry, the number was " + random;         //display the number
        output.innerHTML = "Sorry, you didn't get it!. Try again!"; 
    }
  }
  
)
// in the above code:
// Math.random() * 100 generates a random number between 0 and 100
// Math.floor() rounds the number down to the nearest integer ie 1.9 becomes 1
// + 1 adds 1 to the number so that the range is 1 to 100 instead of 0 to 99..
//...because arrays start at 0 and end at 99 so we need to add 1 to the range

// create a click event for the Guess button

let guess = document.getElementById("guess-btn") // get the guess button
guess.addEventListener("click", function() { 

    // alert("You clicked the button!") //text purpose only

    let userInput = document.getElementById("number").value     //get the user's guess
    // let guess = parseInt(userInput); //convert the user's guess to a number
    let output = document.getElementById("result-info");        //get the output element
    let output2 = document.getElementById("result");            //get the output element
    output.innerHTML = userInput;                               //display the random number
    output2.innerHTML = userInput;   


    if (userInput == 43 && userInput == 39 && userInput == 5) {         //if the number is divisible by 3 and 5
        output.innerHTML = "Yass!!! You Got It!";                       //display FizzBuzz
    }
    else if (userInput % 3 == 0 && userInput % 5 == 0) {                //if the number is divisible by 3 and 5
        output.innerHTML = "Yass!!! You Got It!";                       //display FizzBuzz
    }

    else {                                                              //otherwise
        //output.innerHTML = "Sorry, the number was " + random;         //display the number
        output.innerHTML = "Sorry, you didn't get it!. Try again!";
    } 

  }
);

// create a click event for the Reset button
let reset = document.getElementById("reset-btn") // get the reset button
reset.addEventListener("click", function() {

    // alert("You clicked the button!") //text purpose only

    let clearNum = document.getElementById("number").value = ""; //clear the input field
    let clearOutput = document.getElementById("result").value = "";          //clear the output field



  }
); 

