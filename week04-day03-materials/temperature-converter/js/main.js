//Write your pseduo code first! 

const convert = () => {
    // get the value
    let fahrenheit = document.querySelector('#temp').value
    //figure out formula
    let celsius = (fahrenheit - 32) * 5/9 
    //output to user
    document.querySelector('#output').innerText = celsius
}

document.querySelector('#button').addEventListener('click', convert)


