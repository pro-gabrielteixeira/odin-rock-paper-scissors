
const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

function getComputerChoice() {
	return parseInt(Math.random() * 10 / 3);
}

function getHumanChoice() {
	let choice = prompt("Rock, paper or scissors?").toUpperCase();
	return choice == "ROCK" ? 0 : choice == "PAPER" ? 1 : 2; 
}

function playRound(humanChoice, computerChoice) {
	if (humanChoice > computerChoice) {
		if (computerChoice == 1) {
			console.log("Human won! Scissors beats paper");
			return 1;
		} 
		else if (humanChoice == 2) {
			console.log("Computer won! Rock beats scissors!");
			return 0
		}
		console.log("Human won! Paper beats rock");
		return 1;
	}
	if (humanChoice == 1) {
		console.log("Computer won! Scissors beats paper");
		return 0;
	}
	else if (computerChoice == 2) {
		console.log("Human won! Rock beats scissors!");
		return 1
	}
	console.log("Computer won! Paper beats rock");
	return 0;
}


function playGame() {

	let humanScore = 0;
	let computerScore = 0;
	
	while (humanScore == 5 || computerScore == 5) {
		const humanChoice = getHumanChoice();
		const computerChoice = getComputerChoice();
		(humanChoice == computerChoice) ? 
			console.log("draw") : (playRound(humanChoice, computerChoice)) ? 
			humanScore++ : computerScore++;
		console.log(`Computer score: ${computerScore} VS. Human score: ${humanScore}`)
	}
	(humanScore > computerScore) ? console.log("You won the Game!! Congrats!") : (humanScore < computerScore) ? console.log("The computer won the game! Sorry. Don't cry.") : console.log("It's a draw!!")
}

playGame();