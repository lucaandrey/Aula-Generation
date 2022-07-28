const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoicesDisplay = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoicesDisplay.forEach((possibleChoices) =>
  possibleChoices.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = "👊";
  }
  if (randomNumber === 2) {
    computerChoice = "✌️";
  }
  if (randomNumber === 3) {
    computerChoice = "🖐️";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "EMPATE!";
  }
  if (computerChoice === "👊" && userChoice === "🖐️") {
    result = "Voce Venceu!";
  }
  if (computerChoice === "👊" && userChoice === "✌️") {
    result = "Voce Perdeu!";
  }
  if (computerChoice === "🖐️" && userChoice === "✌️") {
    result = "Voce Venceu!";
  }
  if (computerChoice === "🖐️" && userChoice === "👊") {
    result = "Voce Perdeu!";
  }
  if (computerChoice === "✌️" && userChoice === "👊") {
    result = "Voce Venceu!";
  }
  if (computerChoice === "✌️" && userChoice === "🖐️") {
    result = "Voce Perdeu!";
  }
  resultDisplay.innerHTML = result;
}
