const choiceButtons = document.querySelectorAll('[data-choice]');
const CHOICES = [
    {
        name: "rock",
        beats: "scissors"
    },
    {
        name: "paper",
        beats: "rock"
    },
    {
        name: "scissors",
        beats: "paper"
    }
]

// Buttons
choiceButtons.forEach(choiceButton => { 
   choiceButton.addEventListener('click', e => {
       const choiceName = choiceButton.dataset.choice;
       const choice = CHOICES.find(choice => choice.name === choiceName);
       getPlayerChoice(choice);
    })
})

// Get player choice
function getPlayerChoice(choice) {
    const computerChoice = getComputerChoice();
    const playerWinner = getWinner(choice, computerchoice);
    const computerWinner = getWinner(computerChoice, choice);
    console.log(choice);
}

function getWinner(yourChoice, theirChoice) {
    return yourChoice.beats === theirChoice.name;
}

// Get computer choice
function getComputerChoice() {
    let choices = ['ROCK', 'PAPER', 'SCISSORS']
    return choices[Math.floor(Math.random() * choices.length)]
}


// Get round winner
// function getRoundWinner(player, computer) {

//     if (player === computer) {
//         return "draw";
//     }
//     if ( (player=== "ROCK" && computer === "SCISSORS") ||
//                 (player === "PAPER" && computer === "ROCK") ||
//                 (player === "SCISSORS" && computer=== "PAPER") ) {
//                     playerScore++;
//                     return 'player';
//     } 
//     if ( (player === "ROCK" && computer === "PAPER") ||
//                 (player === "PAPER" && computer === "SCISSORS") ||
//                 (player === "SCISSORS" && computer=== "ROCK") ) {
//                     computerScore++;
//                     return 'computer';
//     } return response + " Your score is " + playerScore + 
//             ". The computer's score is " + computerScore + ".";
// }

// console.log(getRoundWinner())