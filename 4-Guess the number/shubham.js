let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#submit')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')

const p = document.querySelector('p')

let previousGuess = []
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);

    })

}
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please Enter a valid Number')

    } else if (guess < 1) {
        alert('Please enter Number more than 1')
    } else if (guess > 100) {
        alert('Please enter a Number less than 100')
    } else {
        previousGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over . Random Number Was ${randomNumber}`)
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }

}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guesses it right`)
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is tooo Low`);
    } else if (guess > randomNumber) {
        displayMessage(`Number is tooo high`);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}`
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`

}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p)
    playGame = false
    newGame()

}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1)
        previousGuess = []
        newGuess = 1
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - newGame}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true
    })

}