let letter = 'ABC'

let charCode = letter.charCodeAt(0)
// console.log(charCode)
// console.log(letter.charCodeAt(1))

// google ascii chart - table of numbers representing letters
// capital leters - 65-90, lower case letters  - 97 - 122

// let i = String.fromCharCode(77)
// // console.log(i)
// // JUlius Caesar
// 'Hello this is message' , 1 // shift by 1
// 'Ifmmp '
// function caesarsCipher(text, key) {

// }//around 20 lines of code homework


// // let random = Math.random() //// 0,. - 0.999

// let random = Math.random() * 10
// let floored = Math.floor(random)

// console.log(floored) // get random numbers fom 0 to 9

// // Math.floor(4.5) === 4
// // Math.floor(5.7) === 5

// // alert('HEYYYY!')
// // let answer = prompt('What day is today?')

// // console.log('dasdasdas')

// let guess = prompt('What number I am thinking of (0-9)')
// if (guess === floored) {
//     alert ('Good job, you have guessed the number! It was' + floored)
// } else {
//     alert ('Sorry! you lost! The number was ' + floored)
// }

// function generateRandomNumber() {
//     let random = Math.random() * 10
//     let floored = Math.floor(random)
//     return floored
// }
// let guess = prompt('What number I am thinking of (0-9)')
// if (guess === generateRandomNumber()) {
//     alert ('Good job, you have guessed the number! It was' + floored)
// } else {
//     alert ('Sorry! you lost! The number was ' + floored)
// }

function generateRandomNumber(upperBound) {
    let random = Math.random() * upperBound
    let floored = Math.floor(random)
    return floored
}
// let firsRandom = generateRandomNumber(10) // 0-10
// let secondRandom = generateRandomNumber(20) // 0-20

let random = generateRandomNumber(10)

// let guess = prompt('What number I am thinking of (0-9)')
// if (guess === random) {
//     alert ('Good job, you have guessed the number! It was' + random )
// } else {
//     alert ('Sorry! you lost! The number was ' + random )
// }

// function greet() {
//     console.log('Hello world!')
// }

// function changeText() {
//     let text = document.getElementById('myText')
//     text.innerHTML = 'ABCDEF'
// }


// function changeText() {
//     let b = document.body
//     b.style.backgroundColor = 'red'
// }

// let isGreen = true

// function changeBackground() {
//     let b = document.body

//     if (isGreen) {
//         b.style.backgroundColor = 'red'
//     } else {
//         b.style.backgroundColor = '#00FF00'
//     }   

//     isGreen = !isGreen

// }

let isGreen = true
let colors = ['red', 'green', 'blue', 'purple', 'yellow', 'cyan']
function changeBackground() {
    let b = document.body
    let randomIndex = Math.floor(Math.random() * colors.length)
    let randomColor = colors[randomIndex]
   

    b.style.backgroundColor = randomColor

    isGreen = !isGreen

}










