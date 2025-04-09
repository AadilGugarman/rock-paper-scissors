let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("button");
let user = document.querySelector("#user-score");
let comp = document.querySelector("#computer-score");
let resetBtn = document.querySelector("#resetBtn");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    console.log(userChoice);
    let compChoice = genCompChoice();
    playGame(userChoice, compChoice);
  });
});

const genCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  let rdmIdx = Math.floor(Math.random() * 3);
  console.log(options[rdmIdx]);
  return options[rdmIdx];
};

const playGame = (userChoice, compChoice) => {
  if (userChoice === compChoice) {
    msg.style.backgroundColor = "#333";
    msg.innerText = "Play Again! Game is Draw";
  } else {
    let userWin = true;
    if (userChoice == "rock") {
      userWin = compChoice == "paper" ? false : true;
    } else if (userChoice == "paper") {
      userWin = compChoice == "scissors" ? false : true;
    } else {
      userWin = compChoice == "rock" ? false : true;
    }

    showWinner(userWin, userChoice, compChoice);
  }
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    msg.style.backgroundColor = "green";
    msg.innerText = `You win! ${userChoice} beats ${compChoice} `;
    userScore++;
    user.innerText = userScore;
  } else {
    msg.style.backgroundColor = "red";
    msg.innerText = `You Loss! ${compChoice} beats ${userChoice} `;
    compScore++;
    comp.innerText = compScore;
  }
};
resetBtn.addEventListener("click", () => {
  user.innerText = 0;
  comp.innerText = 0;
  msg.innerText = `Make your choice`;
  msg.style.backgroundColor = "#333";
});
