$(document).ready(function() {
  const dictionary = ["test", "test2", "test3"];
  let randomNumber = Math.floor(Math.random() * dictionary.length);
  let currentWord = dictionary[randomNumber];
  let letterCounter = currentWord.length;
  let underscore = [];
  let currentWordArray = currentWord.split("");
  let guesses = 7;
  let guessCheck = false;
  let wordChecker = $("#underscore").html(underscore);

  for (let i = 0; i < currentWord.length; i++) {
    underscore.push("_ ");
  }

  $("#underscore").html(underscore);

  $(document).keydown(function(event) {
    let code = event.keyCode;
    let letter = String.fromCharCode(code);
    for (let i = 0; i < currentWord.length; i++) {
      if (currentWordArray[i].toUpperCase() == letter) {
        underscore[i] = currentWordArray[i];
        $("#underscore").html(underscore);
        wordChecker = $("#underscore").html(underscore);
        guessCheck = true;
      }
    }
    if (guessCheck == false && guesses > 0) {
      guesses--;
    }

    if (hasWon(wordChecker) == true) {
      alert("Congrats you have won the Game. Would you like to play again?");
    }
    guessCheck = false;

    $("#Guesses").html("Guesses Remaining: " + guesses);
    console.log(currentWordArray);
    console.log(code);
    console.log(letter);
  });

  function hasWon(wordChecker) {
    if (wordChecker.find("_") == null && guesses > 0) {
      hasWon = true;
      return true;
    } else {
      return false;
    }
  }
});
