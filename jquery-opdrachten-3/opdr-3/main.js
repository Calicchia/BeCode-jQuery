/*Generate a random number between 1 and 100.*/
//this is the correct way to do that
var randomNumber = Math.floor(Math.random() * 100) + 1;
//cache reference to the status output element
var statusOutput = document.getElementById('status_output');
//cache reference to the guess input field
var guessInput = document.getElementById('guessInput');
//start with 0 counter variable
var counter = 0;

/*
This function only needs to be run when you hit the "Guess" button.
So, instead of putting the code inside a loop, we can just put inside a function
with some if statements to check the value from the guess input!

Also, when you use document.write(), you overwrite everything on the page, so you
can't use your "status_output" element and also the user can't type anything anymore.

Avoid using document.write() unless you are testing a small piece of code!
*/

function checkGuess() {
  //cache guess value temporarily for function and store as integer
  var guessVal = parseInt(guessInput.value);
  //check to see if counter is less than 10 and that guessVal is not empty
  //by just putting "guessVal" the compiler makes sure that "guessVal" is a truthy value
  //there is a video here on Treehouse about truthy and falsey values: https://teamtreehouse.com/library/javascript-booleans
  //here is a great article about truthy/falsey values: http://www.sitepoint.com/javascript-truthy-falsy/
  if (counter < 100 && guessVal) {
    //add 1 to counter variable
    counter++;
    if (guessVal < randomNumber) {
      //change the status text
      statusOutput.value = "Too small! Guess again.";
    }
    if (guessVal > randomNumber) {
      //change the status text
      statusOutput.value = "Too large! Guess again.";
    }
    if (guessVal === randomNumber) {
      //change the status text
      statusOutput.value = "You guessed the correct number! It was " + randomNumber + "."
      +  " It only took you " + counter + " tries to get right.";
    }
  }
  //if counter has reached 10
  //10 tries have occurred and user couldn't guess correctly
  else if (counter === 100) {
    //update the status
    statusOutput.value = "You weren't able to guess the correct number, and your computer is going to self destruct! The number was " + randomNumber;
  }
    //puts function out of call stack
    return false;
}

/* Clear/Reset the text field */
function clearFields() {
  //reset guess value
  guessInput.value = "";
  //reset counter variable to 0
  counter = 0;
  //reset the text of status output back to the default text in the HTML
  statusOutput.value = "You have yet to guess anything.";
  //set randomNumber to be a new random number
  randomNumber = Math.floor(Math.random() * 100) + 1;
  //added to put function out of call stack
  return false;
}
