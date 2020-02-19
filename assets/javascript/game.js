$(document).ready(function() {
  const dictionary = ["HeyJude", "ComeTogether", "SargentPepper"];
  let randomNumber;
  //   let video1 = $("iframe").attr(
  //     "src",
  //     "https://www.youtube.com/watch?v=7qMls5yxP1w"
  //   );
  //   let video2 = $("iframe").attr(
  //     "src",
  //     "https://www.youtube.com/watch?v=oolpPmuK2I8"
  //   );
  //   let video3 = $("iframe").attr(
  //     "src",
  //     "https://www.youtube.com/watch?v=naoknj1ebqI"
  //   );
  //   const videos = [video1, video2, video3];
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

  //   function getRandomSong() {
  //     return videos[randomNumber];
  //   }

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
    //getRandomSong();
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
