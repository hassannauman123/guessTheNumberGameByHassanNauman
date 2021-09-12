let correctNumber = getRandomNumber();
console.log(correctNumber);
let guesses = [];

window.onload = function () { //Wait for html file to load, and allows to execute functions
  document.getElementById("number-submit").addEventListener("click", playGame);
  document.getElementById("restart-game").addEventListener("click", initGame);
}

function domEvents() {
  for (let i = 0; i < document.body.children.length; i++) {
    alert(document.body.children[i].firstChild);
  }

}


function playGame() {
  let numberGuess = document.getElementById('number-guess').value; //value attribute allows to get the value of this inputer
  console.log(numberGuess);
  displayResult(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory();
}


function displayResult(numberGuess) {
  if (numberGuess < correctNumber) {
    console.log("Your guess is too low")
    showNumberBelow();
  } else if (numberGuess > correctNumber) {
    console.log("Your guess is too high")
    showNumberAbove();
  } else {
    console.log("Correct");
    showYouWon();
  }
}

function initGame() {
  correctNumber = getRandomNumber();
  document.getElementById("result").innerHTML = "";
  guesses = [];
  document.getElementById("history").innerHTML = "";
}


function resetResultContent() {
  document.getElementById("result").innerHTML = "";
}


//Return a random number between 1 and 100

function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 100) + 1; //Math.floor rounds to whole
  return randomNumber;
}

function saveGuessHistory(guess) {
  guesses.push(guess); //push the number entered in the end of the array
  console.log(guesses);
}

function displayHistory() {
  let list = "<ul class='list-group'>";
  for (let i = guesses.length - 1; i >= 0; i--) {
    list += " <li class='list-group-item'>" + "You guessed: " + guesses[i] + "</li>";
  }
  list += '</ul>'
  document.getElementById("history").innerHTML = list;
}



/**
 * Retrieve the dialog based on if the guess is wrong or correct 
 */
function getDialog(dialogType, text) {
  let dialog;
  switch (dialogType) {
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>";
  return dialog;
}

function showYouWon() {
  const text = "Awesome job, you got it!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'won' and text parameters 
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog('won', text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
  const text = "Your guess is too high!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters 
   */
  // *CODE GOES BELOW HERE *

  let dialog = getDialog('warning', text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow() {
  const text = "Your guess is too low!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters 
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog('warning', text);
  document.getElementById("result").innerHTML = dialog;
}