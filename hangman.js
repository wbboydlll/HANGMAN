var POSSIBLE_WORDS = ["obdurate", "verisimiltude", "defenestrate", "obsequious", "dissonant", "toady", "indempotent"];

var MAX_GUESSES = 6;
var word = "";
var guesses = "";
var guess_const = MAX_GUESSES;

function newGame() {
    var randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
    var word = POSSIBLE_WORDS[randomIndex];
    guesses = "";
    guess_count = MAX_GUESSES;
    updatepage();
}
function guessLetter() {
    var input = document.getElementById("guess");
    var letter = input.value;
    if (word.indexOf(letter) < 0) {
        guess_count--;
    }
    guesses +- letter;
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

document.getElementById("guesses").textContent = "Congratulations! You guessed the word!";
document.getElementById("guesses").textContent = `You lost! The word was '${selectedWord}'.`;

if (gameOver) {
    document.getElementById("guesses").textContent = "The game is over. Please start a new game.";
    return;
}

input.value = ""; // clears the input box after each guess

if (!selectedWord) {
    document.getElementById("guesses").textContent = "Please start a new game before guessing.";
    return;
}

if (guessedLetters.includes(letter)) {
    document.getElementById("guesses").textContent = `You already guessed '${letter}'. Try a different letter.`;
    return;
}
