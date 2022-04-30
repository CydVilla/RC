// *Variables*
// Declare a variable, assign it a value, and alert the value
const yo = (num) => {
    num = 5
    alert(num)
}
// yo()

// Create a variable, divide it by 10, and console log the value
let fifty = 50
// console.log(fifty / 10 )

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
const threeNumbers = (n1, n2, n3) => {
    alert(n1 * n2 * n3)
}
// threeNumbers(1, 2, 3)

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
const fourNumbers = (n1, n2, n3, n4) => {
   let add = n1 + n2  
   let subtract = n3 - n4
   result = add + subtract
   return result
}
// console.log(fourNumbers(1, 2, 3,4))


// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
const treeNumbers = (n1, n2, n3) => {
    let result = (100 + n1 - n2) / n3
    console.log(result)
    if (result > 25) {
        console.log("WE HAVE A WINNNA")
    } else {
        console.log('WE HAVE A LOOOSAH')
    }
}
// (treeNumbers(3, 2, 1))

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
const daysOfWeek = (d) => {
    if (d.toLowerCase() === 'saturday' || d.toLowerCase() === 'sunday') {
        alert('weekend')
    } 
    else if (d.toLowerCase() === 'monday' || d.toLowerCase() === 'tuesday' ||  d.toLowerCase() === 'wednesday'  || d.toLowerCase() === 'thursday'  || d.toLowerCase() === 'Friday') {
        alert('weekday')
    }

    else {
        alert('Try again')
    }
}


// daysOfWeek('Saturday')

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
 const loop = (num)  => {
     for (let i = 1; i <= num; i += 3 )
     console.log(i)
 }
 loop(50)