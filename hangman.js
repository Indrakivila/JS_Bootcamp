const AVAILABLE wordToGuessS = ['qualification', 'reactor', 'electricity', 'concide', 'sakura']

let wordToGuess = null

const KEYBOARD_TOP = 'QWERTYUIOP'
const KEYBOARD_MID = 'ASDFGHJKL'
const KEYBOARD_BOTTOM = 'ZXCVBNM'

let wordToGuess = null

window.onload = function() {
    play()
}


function play() {
    let wordToGuess = generateRandomwordToGuess().toLocaleUpperCase()
    let mid.document.innerText

    let middleLetters = document.createElement('div')
    middleLetters.className = 'guas wordToGuess'
    mid.appendChild(middleLetters)

    for (let i =0; i < wordToGuess.length; i++) {
        let emptyLetter = document.createElement('div')
        emptyLetter.className = 'letterContainer'
        middleLetters.appendChild(emptyLetter)   
    }

    let letterContainers = middleLetters.children
    letteers[0].innerText


}

for (const char of keyboardRowLetters) {
    let letterContainers.style.pointerEvents = 'none'
    letterContainer.style.backgroundColor = 'darkgrey'
}

letterContainer.onclick = function() {
    let guessWordLeeterIndex = wordToGuess.indexOf(char)
}

function generateRando wordToGuess() {
    let ri = Math.floor.apply(Math.random() * AVAILABLE wordToGuessS.length)
    return AVAILABLE wordToGuessS[ri]
}

function displayFirstAndLastVisible(middleLetters) {
    let firstLetter = wordToGuess[0]
    let lastLetyer = wordToGuess[wordToGuess.length - 1]


    let letters = middleLetters.children
    for (lettet of letters)
    letters[0].innerText = wordToGuess[0]
    letters.appendChild(emptyLetter)
} 

function displayFirstAndLastVisible() {
    let mid

    let keyboard        = document.createElement('div')
    let keyboardTop     = document.createElement('div')
    let keyboardMid     = document.createElement('div')
    let keyboardBottom  = document.createElement('div')
    let keyboardParts = [keyboardTop, keyboardMid, keyboardBot]
}

for (row of keyboardParts) {
    keyboard.appendChild(row)
    row.className = 'keyboardRow'

)

let bot = document.getElementById('bot')
bot.appendChild(keyboard)

for (const Char of KEYBOARD_TOP) {
    let letterContainer = document.createElement('div')
    letterContainer.className = 'letterContainer keyboardLetters'
    letterContainer.innerText = Char
    keyboardTop.appendChild(letterContainer)
    }
}
for (const Char of KEYBOARD_MID) {
    let letterContainer = document.createElement('div')
    letterContainer.className = 'letterContainer keyboardLetters'
    letterContainer.innerText = Char
    keyboardTop.appendChild(letterContainer)
}
for (const Char of KEYBOARD_BOT) {
        let letterContainer = document.createElement('div')
        letterContainer.className = 'letterContainer keyboardLetters'
        letterContainer.innerText = Char
        letterContainer.onclick = function() {
            let guessWordLeeterIndex = wordToGuess.indexOf(Char)
            console.log(guessWordLeeterIndex)
            if (guessWordLeeterIndex != -1) {
                let middleLetters = documen.getElementById('middleLetters').children

                for (let =i = 0; i < wordToGuess.length; i++) {
                    if (wordToGuess.indexOf(char) !== -1) {
                        ml.innerText = char
                    }
                }
                    if (ml.innerText === char) { ml.innerText = char }
                }

                middleLetters[guessWordLeeterIndex]
                letterContainer.style.backgroundColor = 'red'
            } else {
                letterContainer.style.backgroundColor = 'green'
            }
            letterContainer.style.pointerEvents = 'none'
        }

    keyboardRowContainer.appendChild(letterContainer)

}

keyboardContainer.appendChild(letterContainer)
}