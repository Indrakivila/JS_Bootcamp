function findSum(arr) {
    let sum = 0
    for (let nr of arr) {
        sum += nr
    }
    return sum
}

// console.log(findSum([1, 2, 3]))

function reversedText(text) {

    for (let i = text.length - 1; i >= 0; i--) {
        reversedText += text[i]
    }
    return rversedText 
}
// console.log(reverseText('ABC'))

function sumOfPowers(arr, power) {
    let sum = 0
    for(let i = 0; i < arr.length; i++) {
        sum += Mat.pow(arr[i], power)
    }
    return sum
}

// console.log(sumOfPowers([1, 2, 3], 2))




function printResult(a, b) {
    console.log(a + b)
}

function add(a, b, callback) {
    callback(a, b)
    return a + b
}

add(10, 20, printResult)



// let numbers = [5, 3, 2, 4, 1]
// numbers.sort()
// console.log(numbers)
// function sortFunction(a, b) {
//     return a - b
// }
// numbers.sort(sortFunction)
// console.log(numbers)


// let words = ['A', 'DASDAS','BC'] 
// words.sort(function(a, b) {
//     return a.length - b.length
// })
// console.log(words)


// let nrs = [1, 4, 7, 8, 9, 12, 13, 15, 16]

// nrs = nrs.map((nr) => { return nr * 3 })
//         .filter((nr) => { return nr % 2 === 0})
//         .sort((a, b) => { return b - a } )

// console.log(nrs)

// for (let i = 0; i < nrs.length; i++) {
//     nrs[i] = nrs[i] * 2
// }


// nrs.map(function(nr) {
//     return nr * 2
// })

// nrs = nrs.filter(function(nr) {
//     return nr % 2 === 0
// })



// console.log(nrs)


// function func(limit) {
//     if (limit < 0) {
//         return
//     }
//     console.log(limit)
//     func(limit - 1)
// }

// func(10)

function fibonacci(n) {

    let firstNumber = 0
    let secondNumber = 1
    let currentNumber = null

    for (let i = 2; i < n; i++) {
        currentNumber = firstNumber + secondNumber
        firstNumber = secondNumber
        secondNumber = currentNumber
    }
    return currentNumber
}

// console.log(fibonacci(9))
 
function fibonacciRecursive(n) {
    if (n <= 1) {
        return n
    }

    return fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1)

}

fibonacciRecursive(10)