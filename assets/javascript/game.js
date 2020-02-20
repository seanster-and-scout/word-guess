$(document).ready(function() {
  const dictionary = ["HeyJude", "ComeTogether", "SargentPepper"];
  let randomNumber;
  const imgs = [
    "https://images.pexels.com/photos/210764/pexels-photo-210764.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/586415/pexels-photo-586415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/6966/abstract-music-rock-bw.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  ];
  let currentImg;
  let currentWord;
  let underscore;
  let currentWordArray;
  let guesses;
  let guessCheck = false;
  let lettersGuessed;

  newGame();

  function getRandomWord() {
    randomNumber = Math.floor(Math.random() * dictionary.length);
    underscore = [];
    currentWord = dictionary[randomNumber].toUpperCase();
    currentWordArray = currentWord.split("");
    initializeArray(currentWord);
  }

  function setImage() {
    randomNumber = Math.floor(Math.random() * dictionary.length);
    currentImg = imgs[randomNumber];
  }

  function getImage() {
    return $("img").attr("src", imgs[randomNumber]);
  }

  function initializeArray(currentWord) {
    for (let i = 0; i < currentWord.length; i++) {
      underscore.push("_ ");
    }
  }

  function setWord() {
    $("#underscore").html(underscore);
  }

  function getLettersGuessed() {
    $("#letters").html(lettersGuessed);
  }

  function hasWon(wordChecker) {
    if ($.inArray("_ ", wordChecker) == -1 && guesses > 0) {
      return true;
    }
    if (guesses == 0) {
      return false;
    }
  }

  function newGame() {
    getRandomWord();
    setImage();
    getImage();
    setWord();
    guesses = 7;
    guessCheck = false;
    lettersGuessed = "";
    $("#Guesses").html("Guesses Remaining: " + guesses);
  }

  $(document).keydown(function(event) {
    let code = event.keyCode;
    let letter = String.fromCharCode(code);
    if (code >= 48 && code <= 90) {
      for (let i = 0; i < currentWord.length; i++) {
        if (currentWordArray[i] == letter) {
          underscore[i] = currentWordArray[i];
          $("#underscore").html(underscore);
          guessCheck = true;
        }
        if (
          i == currentWord.length - 1 &&
          lettersGuessed.indexOf(letter) == -1
        ) {
          lettersGuessed += letter;
        }
      }
      if (guessCheck == false && guesses > 0) {
        guesses--;
      }
    }

    getLettersGuessed();
    guessCheck = false;

    if (hasWon(underscore) == true) {
      alert("Congrats you have won the Game. Press okay to begin the new game");
      newGame();
    }

    if (hasWon(underscore) == false) {
      alert("You have lost.");
      newGame();
    }

    $("#Guesses").html("Guesses Remaining: " + guesses);
  });
});
