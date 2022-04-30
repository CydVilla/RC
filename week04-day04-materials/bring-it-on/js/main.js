// *Variables*
// Create a variable and console log the value
    const cheeto = (n) => {
        n = 2
    }
    console.log(cheeto)

// Create a variable, add 10 to it, and alert the value
const dorito = (n) => {
let num = 10
let value = n + num
alert(value);
}
// dorito(1)


// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
const subtractFourNums = (n1, n2, n3 ,n4) => { 
    let result = n1 - n2 - n3 - n4
    alert(result)
}
// subtractFourNums(10,6,2,2)

// Create a function that divides one number by another and returns the remainder
const oneNumberByAnother = (n1, n2) => {
    let remainder = n1%n2
    return remainder
}
console.log(oneNumberByAnother(5 ,3))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
const addTwo = (n1, n2) => {
    if (n1 + n2 > 50) {
        alert('Jumangi')
    } else {
        alert('not Jumangi')
    }
}
// addTwo(50, 1)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
    const threeNumbers = (n1, n2 ,n3) => {
        if ((n1 * n2 * n3)%3 == 0) {
            alert('ZEBRA')
        } else {
            alert('not zebra')
        }
    }
    // threeNumbers(2, 3, 2)



//*Loops*
// Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
const wumber = (str, num) => {
    for (let i = 0; i <= num-1; i++) {
        console.log(str)
    }
}
wumber('sup', 5)