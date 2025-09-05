const userChoiseRock = document.querySelector('#rock');
const userChoisePaper = document.querySelector('#paper');
const userChoiseScissors = document.querySelector('#scissors');

const displayMatchResult = document.querySelector('#display-match-result')
const UIComputerScore = document.querySelector('#computer-score');
const UIHumanScore = document.querySelector('#human-score');

const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
	return Math.floor(Math.random() * 3);
}

function getChoiceName(choice) {
	return (choice === ROCK) ? "rock" : (choice === PAPER) ? "paper" : "scissors";
}

function playRound(humanChoice, computerChoice) {
	if ((humanChoice > computerChoice && (computerChoice == 1 || humanChoice != 2)) || computerChoice == 2 && humanChoice == 0) {
			displayMatchResult.textContent = `Human won - ${getChoiceName(humanChoice)} beats ${getChoiceName(computerChoice)}`;
			return 1;
		}
	displayMatchResult.textContent = `Computer won - ${getChoiceName(computerChoice)} beats ${getChoiceName(humanChoice)}`;
	return 0;
}

function playGame(humanChoice) {
		const computerChoice = getComputerChoice();
		(humanChoice == computerChoice) ? 
			displayMatchResult.textContent = "Draw" : (playRound(humanChoice, computerChoice)) ? 
			UIHumanScore.textContent = ++humanScore : UIComputerScore.textContent = ++computerScore;
		if (humanScore == 5 || computerScore == 5) {
			(humanScore == 5) ? displayMatchResult.textContent = 'YOU WON the game!! Congratulations!' :
				displayMatchResult.textContent = 'You lose the game!! Sorry!'
			humanScore = 0;
			UIHumanScore.textContent = 0;
			computerScore = 0;
			UIComputerScore.textContent = 0;
		}
}

document.addEventListener('click', (e) => {
	const target = e.target;
	if (target === userChoiseRock)
		playGame(0);
	else if (target === userChoisePaper)
		playGame(1);
	else if (target === userChoiseScissors)
		playGame(2);
})
