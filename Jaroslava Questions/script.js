// // function findSum(numbers) {
// //     let sum = 0
//     // for (let i = 0; i < numbers.length; i++) {
//     //     sum += numbers[i]
//     // }
// //     for (let nr of numbers) {
// //         sum += nr
// //     }
// //     return sum

// // }

// // let nr = 8
// // let shifted = nr >> 1
// // console.log(shifted)


// // console.log(findSum([1, 5, 10]))

// // let hundredNumbers = ''
// // for (let i = 0; i <= 100; i++) {
// //     hundredNumbers += i + ','
// // }
// // console.log(hundredNumbers)

// // let arr = [1, 9, 5]
// // arr.sort(function(a,b) {
// //     return b - a

// // })
// // console.log(arr)

// // let arr = [1, 2, 3]

// // class Array {

// //     constructor() {
// //         this.collection = []
// //     }

//     at(index) {
//         return this.collection[index]
//     }
//     push(el) {
//         this.collection.push(el)
//     }

//     sort()

//     for (let i = 0; i < this.collection.length; i++) {
//         let min = this.collection[i]
//         let ri = -1
//         for (let j = i + 1; j < this.collection.length; j++) {
//             if (this.collection[j] <min) {
//                 min = this.collection[]
//                 ri = j
//             }
//         }

//         if (ri !== -1) {
//             let replacble = this.collection[i]
//             this.collection[i] = minthis.collection[ri] = replacble
//             }
//         }
//     }

// // bubbleSort() {
// //     let sorted = true
// //     for (let _ = 0; this.collection.length - 1; _++) {
// //     for (let i = 0; i < this.collection.length - 1; i++) {
// //         console.log(this.collection)
// //         if (this.collection[i] > this.collection[i + 1]) {
// //             let original = this.collection[i]
// //             this.collection[i] = this.collection[i + 1]
// //             this.collection[i + 1] = original
// //             sorted = false
// //                 }
// //             }
// //         } 
// //     }
// // }

// // let myArray = new Array()
// // myArray.push(4)
// // myArray.push(1)
// // myArray.push(5)
// // console.log(myArray)
// // myArray.sort()
// // console.log(myArray)



// // class Dog {
// //     eat() {
// //         console.log('nom nom nom')
// //     }

// //     static talk() {
// //         console.log('Woof')
// //     }
// // }

// // Dog.talk()

// // let r = calculate(add, 5, 10)
// // console.log(r)

// // let r = calculate(subtract, 5, 10)
// // console.log(r)


// let numbers = ''
// for (let i = 137; i >= 22; i--) {
//     numbers += i + ''
// }

// function startsWith One(arrOne, arrTwo) {

// if (arrOne[0] === 1 ) count++
// if (arr[0] === 1 ) count++
// return count}



// function sum2(arr) {
//     return arr[0] + arr[1]
// }


// function biggerTwo(arrOne, arrTwo) {
//     let sumOne = arrOne[0] + arrOne[1]
//     let sumTwo = arrTwo[0] + arrTwo[1]
//     if (sumOne === sumTwo) {
//         return arrOne
//     } else if { (sumOne === sumTwo || sumOne > sumTwo) 
//         return arrOne 
//     } else { 
//         return arrTwo
// }


// // countEvens([2, 1, 2, 3, 4]) =3



// function countEvens(arr) {
//     let even = 0
//     for(let nr of arr) {
//         if (nr % 2 === 0)
//         console.log(nr) {
//             even++
//         }
//     }
//     return even
// }

// let result = countEvens([1, 4, 6, 9])
// console.log(result)


// function countOdds(arr) {
//     let odds = 0
//     for(let nr of arr) {
//         if (nr % 2 !=== 0)
//         console.log(nr) {
//             odds++
//         }
//     }
//     return odds
// }

// let result = countEvens([1, 4, 6, 9])
// console.log(result)



// function sum13(arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 13) { 
//             break
//         }
//         sum += arr[i] 
//     }
//     return sum
// }
// console.log(sum13([1, 2, 13, 2]))

// // countEvens([2, 1, 2, 3, 4]) → 3
// // countEvens([2, 2, 0]) → 3
// // countEvens([1, 3, 5]) → 0
// function countEvens(arr) {

// }

// // modThree([2, 1, 3, 5]) → true
// // modThree([2, 1, 2, 5]) → false
// // modThree([2, 4, 2, 5]) → true
// function modThree(arr) {

// }


// function modThree(arr) {

//     if (arr.length < 3) { return false}


//     let count = 1
//     let previousEven = arr[0] % 2 === 0

//     for (let i = 1; i < arr.length; i++) {
//         if ((arr[i] % 2 === 0 && previousEven) || (arr[i] % 2 === 1 && !previousEven)) {
//             count++
//             if (count === 3) { return true }
//         } else {
//             count = 1
//             previousEven = arr[i] % 2 === 0
//         }
//     }

//     return count === 3
// }

// console.log(modThree([2, 1, 3, 5]))

const questions = document.querySelectorAll('.question')

for (const q of questions) {

    const btn = q.querySelectorAll('.question-btn')

    btn.onclick = function() {
            for (const qq of questions) {
                if (qq !== q) {
                    qq.classList.remove('show-text')
            }
        }
        q.classList.toggle('show-text')
    }
}

















