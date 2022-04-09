let total = 0;


function reset() {
  total = 0;
  document.querySelector("#poof").innerText = total;
}
document.querySelector("#reset").addEventListener("click", reset);

function add() {
  let firstField = +document.querySelector("#input1").value;
  let secondField = +document.querySelector("#input2").value;
  total = firstField + secondField;
  document.querySelector("#poof").innerText = total;
}
document.querySelector("#add").addEventListener("click", add);


function subtract() {
  let firstField = +document.querySelector("#input1").value;
  let secondField = +document.querySelector("#input2").value;
  total = firstField - secondField;
  total = document.querySelector("#poof").innerText = total;
}
document.querySelector("#subtract").addEventListener("click", subtract);


function multiply() {
  let firstField = +document.querySelector("#input1").value;
  let secondField = +document.querySelector("#input2").value;
  total = firstField * secondField;
  total = document.querySelector("#poof").innerText = total;
}
document.querySelector("#multiply").addEventListener("click", multiply);


function divide() {
  let firstField = +document.querySelector("#input1").value;
  let secondField = +document.querySelector("#input2").value;
  total = firstField / secondField;
  total = document.querySelector("#poof").innerText = total;
}
document.querySelector("#divide").addEventListener("click", divide);

