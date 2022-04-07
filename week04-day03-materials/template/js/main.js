const convert = () => {
    // get the value
    let celsius = document.querySelector('#temp').value
    //figure out formula
    let fahrenheit = celsius * (9/5) + 32
    document.querySelector('#showMeWhatYouGot').innerText = celsius
}

document.querySelector('#btn').addEventListener('click', convert)


