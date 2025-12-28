let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game Was Draw. Play Again";
  msg.style.background = "#430257";
};

const showWinner = (userWin, userChoice, CompChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! ${userChoice} beats ${CompChoice}`;
    msg.style.background = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose ${CompChoice} beats Your ${userChoice}`;
    msg.style.background = "red";
  }
};
const playGame = (userChoice) => {
  // generate computer choice
  const CompChoice = genCompChoice();

  if (userChoice === CompChoice) {
    // draw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissors, paper
      userWin = CompChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock, scissors
      userWin = CompChoice === "scissors" ? false : true;
    } else {
      // rock, paper
      userWin = CompChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, CompChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
