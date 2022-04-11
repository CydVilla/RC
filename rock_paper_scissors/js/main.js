var botScore = 0,
  playerScore = 0;
document.getElementById("rock").onclick = playerThrowsRock;
function playerThrowsRock() {
  var botsWeapon = getRandomWeapon();
  checkWhoWon(botsWeapon, "rock");
}
document.getElementById("scissors").onclick = playerThrowsScissors;
function playerThrowsScissors() {
  var botsWeapon = getRandomWeapon();
  checkWhoWon(botsWeapon, "scissors");
}
document.getElementById("paper").onclick = playerThrowsPaper;
function playerThrowsPaper() {
  var botsWeapon = getRandomWeapon();
  checkWhoWon(botsWeapon, "paper");
}
document.getElementById("win").onclick = playerThrowsWin;
function playerThrowsWin() {
  displayCompleteMessage("Cheaters never win!");
}
function getRandomWeapon() {
  var randomNumber = Math.random();
  var botsWeapon = "rock";
  if (randomNumber < 0.33) {
    botsWeapon = "scissors";
  } else if (randomNumber < 0.6666) {
    botsWeapon = "paper";
  }
  return botsWeapon;
}
function checkWhoWon(botsWeapon, playersWeapon) {
  if (botsWeapon == playersWeapon) {
    displayCompleteMessage("There was tie");
  } else if (
    (botsWeapon == "scissors" && playersWeapon == "paper") ||
    (botsWeapon == "paper" && playersWeapon == "rock") ||
    (botsWeapon == "rock" && playersWeapon == "scissors")
  ) {
    increaseBotScore();
  } else {
    increasePlayerScore();
  }
}
function increaseBotScore() {
  botScore += 1;
  document.getElementById("computerScore").innerHTML = botScore;
  displayCompleteMessage("Skynet wins");
}
function increasePlayerScore() {
  playerScore += 1;
  document.getElementById("humanScore").innerHTML = playerScore;
  displayCompleteMessage("Winner winner Chicken Dinner");
}
function displayCompleteMessage(msg) {
  document.getElementById("status").innerHTML = msg;
}
