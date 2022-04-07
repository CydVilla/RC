const fizzBuzz = () => {
    console.log('fired')
    let i = document.querySelector('#number').value
    let result = document.querySelector('#output')
        if (i%15 === 0) {
            result.innerHTML = 'Fizzbuzz'
        } else if (i%3 === 0) {
            result.innerHTML = 'Fizz'
        } else if (i%5 === 0) {
            result.innerHTML = 'Buzz'
        } else {
            result.innerHTML = 'READ THE RULES'
        }
    }
    document.querySelector('#fire').addEventListener('click', fizzBuzz)
