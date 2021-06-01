const AVAILABLE_wordToGuessS = ['qualification', 'reactor', 'electricity', 'concide', 'sakura']

const KEYBOARD_TOP = 'QWERTYUIOP'
const KEYBOARD_MID = 'ASDFGHJKL'
const KEYBOARD_BOTTOM = 'ZXCVBNM'

let wordToGuess = null

window.onload = function() {
    play()
}


function play() {
    wordToGuess = generateRandomwordToGuess().toUpperCase()

    document.getElementById('healthContainer').innerHTML = ''
    document.getElementById('mid').innerHTML = ''
    document.getElementById('bot').innerHTML = ''
    document.getElementById('healthContainer').innerHTML = ''

    

    displayHealthPoints()
    displayGuesswordToGuess()
    dispplayVirtualKeyboard()
}

function displayHealthPoints() {
    let healthContainer = document.getElementById('healthContainer')
}
  
function generateRandomwordToGuess() {
    let ri = Math.floor(Math.random() * AVAILABLE_wordToGuessS.length)
    return AVAILABLE_wordToGuessS[ri]
}

function displayGuesswordToGuess() {
    let mid = document.getElementById('mid')

    let middleLetters = document.createElement('div')
    middleLetters.id = 'middleLetters'
    middleLetters.className = 'guessWord'
    mid.appendChild(middleLetters)

    for (let i = 0; i < wordToGuess.length; i++) {
        let emptyLetter = document.createElement('div')
        emptyLetter.className = 'letterContainer'
        emptyLetter.style.color = 'transparent'
        emptyLetter.innerText = wordToGuess[1]
        middleLetters.appendChild(emptyLetter)
    }

    makeFirstAndLastVisible(middleLetters)
}

function makeFirstAndLastVisible(middleLetters) {
    let firstLetter = wordToGuess[0]
    let lastLetyer = wordToGuess[wordToGuess.length - 1]

    let letters = middleLetters.children
    for (letter of letters) {
        if (letterContainers.innerText === firstLetter || letter.innerText === lastLettter) {
            letter.style.color = 'black'
        }
    }
}

function dispplayVirtualKeyboard() {
    let keyboard = document.createElement('div')
    let bot = document.getElementById('bot')
    bot.appendChild(keyboard)

    displayKeyboardRow(keyboard, KEYBOARD_TOP)
    displayKeyboardRow(keyboard, KEYBOARD_MID)
    displayKeyboardRow(keyboard, KEYBOARD_BOT)

}

function displayKeyboardRow(keyboardRowContainer, keyboardRowLetters) {
    let keyboardRowContainer = document.createElement('div')
    keyboardRowContainer,className = 'keyboardRow'

    for (const char of keyboardRowLetters) {
        let letterContainer = document.createElement('div')
        letterContainer.className = 'letterContainer'
        letterContainer.className += 'keyboardLetter'
        letterContainer.innerText = char

        let firstLetter = wordToGuess[0]
        let lastLetyer = wordToGuess[wordToGuess.length - 1]
        if (char === firstLetter || char === lastLetyer) {
            letterContainer.style.pointerEvents = 'none'
            letterContainer.style.backgroundColor = 'darkgrey'
        }

        letterContainer.onclick = () => {handleKeyboardButtonClick(letterContainer, char)} {     ///
            let guessWordLeeterIndex = wordToGuess.indexOf(char)
            if (guessWordLeeterIndex !== -1) {
                let middleLetters = document.getElementById('middleLetters').children
                letterContainer.style.backgroundColor = 'green'


                for (ml of middleLetters) {
                    if (ml.innerText === char) {    /////
                        ml.style.color = 'black'
                    }
                }
            } else {
                letterContainer.style.backgroundColor = 'red'
                let healthContainer = document.getElementById('healthContainer')
                let hpToRemove = healthContainer.lastElementChild
                healthContainer.removeChild(hpToRemove)
                hp--

                if (hp === 0) {
                    let bot = document.getElementById('bot')
                    bot.style.pointerEvents = 'none'
                    bot.style.userSelect = 'none'

                    document.body.style.backgroundColor = '#dea49e'
                }
            }
            letterContainer.style.pointerEvents = 'none'
        }
    }

        function disableKeyBoard()