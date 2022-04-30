//Create a function that grabs the number of snacks from the input and tells you to stop that many times


document.querySelector('#help').addEventListener('click', stop)

const stop = () => {
    let timesToStop = Number(document.querySelector('input').value)
    document.querySelector('#stops').innterText += ''
    for (let i =1; i <= timesToStop; i++) {
        document.querySelector('#stops').innterText += ' STOP'
    }
}