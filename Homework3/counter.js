function increment() {
    let number = document.getElementById('number')
    number.innerText = parseInt(number.innerText) + 1
}

function decrement() {
    let number = document.getElementById('number')
    number.innerText = parseInt(number.innerText) - 1
}