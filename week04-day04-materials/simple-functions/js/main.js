//---Easy
//create a function that subtracts two numbers and alerts the difference
function subTwoAndAlert(num1, num2) {
    alert(num1 - num2)
}
subTwoAndAlert(20, 5)
//create a function that divides three numbers and console logs the quotient
const divide = (num1, num2, num3) => {
}
divide(console.log(num1 / num2 / num3))

// let fixedQuotient = reduceToTwo(quotient)

//create a function that multiplys three numbers and returns the product
const multiply = (num1, num2, num3) => {
    return num1 * num2 * num3
}
multiply(console.log(1, 2, 3))


//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function addAndGetRemainder(num1, num2, num3) {
    return (num1 + num2) % num3
}
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function fourConditional(num1, num2, num3, num4) {
    let product = num1 * num2
    if (product > 100) {
        console.log(product + n3 + n4)
    } else if (product < 100) {
        console,log(product - n3 - n4)
    } else {
        let remainder = (num1 * num2 * num3) % num4
        alert(remainder)
    }
}