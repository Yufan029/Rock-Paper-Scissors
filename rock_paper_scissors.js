const rock = `rock`;
const paper = `paper`;
const scissors = `scissors`;

let options = [rock, paper, scissors];

function getComputerChoice() {
    let index = Math.floor(Math.random() * 3);
    return options[index];
}

function getHumanChoice() {
    let humanChoice = prompt("Please input your choice: r(rock), p(paper), s(scissors), q(quit).");
    if (humanChoice === null) {
        console.log("Please make your decision.");
        return null;
    }

    let lowerHumanChoice = humanChoice.toLowerCase();
    if (lowerHumanChoice === 'q' || lowerHumanChoice === 'quit') {
        console.log(`Exit`);
        return 'q';
    }

    if (lowerHumanChoice === 's' || lowerHumanChoice === scissors) {
        return scissors;
    } else if (lowerHumanChoice === 'r' || lowerHumanChoice === rock) {
        return rock;
    } else if (lowerHumanChoice === 'p' || lowerHumanChoice === paper) {
        return paper;
    }

    console.error("Please input your choice: r(rock), p(paper), s(scissors), q(quit).");
    return null;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === rock && computerChoice === paper ||
        humanChoice === paper && computerChoice === scissors ||
        humanChoice === scissors && computerChoice === rock) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }

    if (humanChoice === rock && computerChoice === scissors ||
        humanChoice === paper && computerChoice === rock ||
        humanChoice === scissors && computerChoice === paper) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
}

function playGame() {
    let i = 0;
    while (i < 5) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        if (humanChoice === 'q') {
            console.log(`End the game by user!`);
            break;
        }
        
        if (humanChoice === null) {
            alert("Wrong choice, please choose another one: r(rock), p(paper), s(scissors), q(quit). ")
            continue;
        }
        
        if (humanChoice === computerChoice) {
            console.log("Same, play again!");
            continue;
        }

        console.log("==========================");
        console.log(`This is ${i+1} round: `);
        playRound(humanChoice, computerChoice);
        i++;
    }
    
    console.log(`Human: ${humanScore} Vs Computer: ${computerScore}`);
    console.log(`End of the game.`);
}

playGame();