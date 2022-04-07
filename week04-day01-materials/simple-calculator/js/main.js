let total = 0

document.querySelector('#dominosPizza').addEventListener('click', jumanji)
document.querySelector('#pumpkin').addEventListener('click', zebra)
document.querySelector('#zebra').addEventListener('click', jum)
document.querySelector('#subtract').addEventListener('click', subtract)
document.querySelector('#addmore').addEventListener('click', addmore)


function jumanji() {
  total = total + 3
  document.querySelector('#placeToPutResult').innerText = total
}
function zebra() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}
function jum() {
  total = total + 9
  document.querySelector('#placeToPutResult').innerText = total
}
function subtract() {
  total = total - 2
  document.querySelector('#placeToPutResult').innerText = total
}
function addmore() {
  total = total + 16
  document.querySelector('#placeToPutResult').innerText = total
}
