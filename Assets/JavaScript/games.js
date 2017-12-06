var letterList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var incorrectGuesses = [];

var secretLetter = null;
var wins = 0;
var losses = 0;
var guessesRemaining = 0;
var myGuess = null;

var secretLetter = letterList[Math.floor(Math.random() * letterList.length)];

function getGuess () {
    document.onkeyup = function (event) {
        myGuess = String.fromCharCode(event.keyCode).toLowerCase();

        console.log(myGuess);
        return myGuess
    }
}



function answerChecker (myGuess, wins, secretLetter, guessesRemaining) {
    if (myGuess === secretLetter) {
        wins = wins++

        console.log(myGuess);
        console.log(wins)
    }
    if (myGuess !== secretLetter && guessesRemaining > 0) {
        getGuess()

        console.log(myGuess);
        guessesRemaining -= 1;
        console.log(guessesRemaining);
    }

}

function gamePlay() {
    secretLetter = letterList[Math.floor(Math.random() * letterList.length)];
    console.log(secretLetter)
    guessesRemaining = 10;
    console.log(guessesRemaining);
    document.getElementsByClassName('guessesLeft').innerHTML = guessesRemaining

    myGuess = getGuess(_ _ _ _)
    answerChecker(myGuess)

}
