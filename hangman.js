var POSSIBLE_WORDS = ["obdurate", "verisimiltude", "defenestrate", "obsequious", "dissonant", "toady", "indempotent"];

var MAX_GUESSES = 6;
var word = "";
var guesses = "";
var guess_count = MAX_GUESSES;

function newGame() {
    var randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];
    guesses = "";
    guess_count = MAX_GUESSES;
    updatePage();
}
function guessLetter() {
    var input = document.getElementById("guess");
    var letter = input.value;
    if (word.indexOf(letter) < 0) {
        guess_count--;
    }
    guesses += letter;
    updatePage();
}
function updatePage() {
    var clueString = "";
    for (var i = 0; i < word.length; i++) {
        var currentLetter = word.charAt(i);
        if (guesses.indexOf(currentLetter) >= 0) {//you guessed it
            clueString += currentLetter + " ";
        }
        else
            clueString += "_ ";
    }
    //update the clue string
    var clue = document.getElementById("clue");
    clue.innerHTML = clueString;

    //update the guesses from the user
    var guessArea = document.getElementById("guesses");
    guessArea.innerHTML = "Guessed Letter: " + guesses;

    //update the image
    var image = document.getElementById("hangmanImage");
    image.src = "images/hangman" + guess_count + ".gif";
}

function guessLetter() {
    var input = document.getElementById("guess");
    var letter = input.value.toLowerCase();
    input.value = ""; // clear input each time

    // stop guessing before a new game
    if (!word) {
        document.getElementById("guesses").textContent =
            " Please start a new game before guessing.";
        return;
    }

    // prevent duplicate guesses
    if (guesses.includes(letter)) {
        document.getElementById("guesses").textContent =
            ` You already guessed '${letter}'. Try another letter.`;
        return;
    }

    // record and check guess
    if (word.indexOf(letter) < 0) {
        guess_count--;
        document.getElementById("guesses").textContent =
            ` '${letter}' is not in the word.`;
    } else {
        document.getElementById("guesses").textContent =
            ` Good guess! '${letter}' is in the word.`;
    }
    guesses += letter;
    updatePage();

    // win check
    let allFound = true;
    for (let i = 0; i < word.length; i++) {
        if (!guesses.includes(word[i])) allFound = false;
    }
    if (allFound) {
        document.getElementById("guesses").textContent =
            " Congratulations! You guessed the word!";
        gameOver = true;
        return;
    }

    // lose check
    if (guess_count <= 0) {
        document.getElementById("guesses").textContent =
            ` You lost! The word was '${word}'.`;
        gameOver = true;
    }
}
