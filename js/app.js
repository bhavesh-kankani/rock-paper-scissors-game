var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock-image");
const paper_div = document.getElementById("paper-image");
const scissors_div = document.getElementById("scissors-image");

function getComputerChoice() {
    choices = ['rock-image', 'paper-image', 'scissors-image'];
    randomNumber = Math.floor(Math.random() * 3);
    return (choices[randomNumber]);
}

function convert(str) {
    if (str === "rock-image") return "Rock";
    if (str === "paper-image") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "computer".fontsize(3).sub();
    result_div.innerHTML = `${convert(userChoice)}${smallUserWord} beats ${convert(computerChoice)}${smallCompWord}. You Win!`;
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 400)
}



function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "computer".fontsize(3).sub();
    result_div.innerHTML = `${convert(userChoice)}${smallUserWord} loses to ${convert(computerChoice)}${smallCompWord}. You Lost..`;
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 400)
}

function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "computer".fontsize(3).sub();
    result_div.innerHTML = `${convert(userChoice)}${smallUserWord} equals ${convert(computerChoice)}${smallCompWord}. Its a draw.`;
    document.getElementById(userChoice).classList.add("gray-glow");
    setTimeout(() => document.getElementById(userChoice).classList.remove('gray-glow'), 400)
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rock-imagescissors-image":
        case "paper-imagerock-image":
        case "scissors-imagepaper-image":
            win(userChoice, computerChoice);
            break;
        case "rock-imagepaper-image":
        case "paper-imagescissors-image":
        case "scissors-imagepaper-image":
            lose(userChoice, computerChoice);
            break;
        case "rock-imagerock-image":
        case "paper-imagepaper-image":
        case "scissors-imagescissors-image":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener("click", () => game("rock-image"))
    paper_div.addEventListener("click", () => game("paper-image"))
    scissors_div.addEventListener("click", () => game("scissors-image"))
}

main();
