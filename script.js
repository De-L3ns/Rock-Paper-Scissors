/*
### Rock Paper Scissors ###

@WHAT DOES THE SCRIPT DO?

This script let's a person play the popular, simple game rock-paper-scissors
versus the computer.
- The script will take the users input, either rock paper or scissors.
- The computer will select a random awnser.
- The script declares a winner based on the rules.

@PSEUDOCODE

- Step 1: Create the function that generates a random anwser -
function ComputerPlay() {
    List of the possibilities
    random function that takes on of the possibilities of the list
    return that possibility

}

- Step 2: Create the PlayerSelection. The player should be able to select either rock, paper or scissors.
    The choise should be given with a pop up screen. There should be no issue about case sensitivty.
    The choice of the player should be stored in a variable, playerSelection.

- Step 3: round logic
    We create a function that takes computer and player selection.
    This checks the player awnser vs the computer answer and checks for the rules
    IF playerSelection == computerSelection -> Draw
    ELSE IF playerselection == 'Scissor' and computerselection == 'paper' -> player wins
    ELSE IF playerselection == 'paper' and computerSelection == 'Rock' -> player wins
    Else IF playerselection == 'Rock' and computerSelection == 'scissors' -> player wins
    Else -> computer wins.


- step 4: game logic
    Creating a new function to play 5 rounds.
    function playGame =>
    rounds = 5
    if rounds < 0 then play another round
    rounds -= 1

    if rounds == 0 end the game and announce the winner.


*/

function computerPlay() {
    let possibilities = ['Rock', 'Paper', 'Scissors'];
    let anwser = Math.floor(Math.random() * possibilities.length);
    return(possibilities[anwser]);
}

function getPlayerSelection() {
    let selection = prompt('Would you like to play Rock, Paper or Scissors this turn? Enter below.');
    if (selection.toLowerCase() == 'rock' || selection.toLowerCase() == 'paper' || selection.toLowerCase() == 'scissors') {
        return selection;
    } else {
        prompt('Please enter a valid response!')
        selection = getPlayerSelection();
        return selection;
    }
}


let computerScore = 0;
let playerScore = 0;

function playRound() {
    
    let computerSelection = computerPlay();
    let playerSelection = getPlayerSelection();

    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        alert(`Its a draw this round! The computer used ${computerSelection} and you used ${playerSelection}`);

    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'scissors') {
        alert(`You win this round! ${playerSelection} beats ${computerSelection}`);
        playerScore += 1;

    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock') {
        alert(`You win this round! ${playerSelection} beats ${computerSelection}`);
        playerScore += 1;
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'paper') {
        alert(`You win this round! ${playerSelection} beats ${computerSelection}`);
        playerScore += 1;
    } else {
        alert(`The computer wins this round! ${computerSelection} beats ${playerSelection}`);
        computerScore += 1;
    }
}

function playGame() {
    let rounds = 5;

    while (rounds > 0) {
        playRound();
        rounds -= 1;
        console.log(rounds)

    }
    if (playerScore > computerScore) {
        alert(`You win! You scored ${playerScore} and the computer scored ${computerScore} points`)
    } else if (playerScore == computerScore) {
        alert(`It's a draw! You scored ${playerScore} and the computer scored ${computerScore} points`)
    } else {
        alert(`You lose! You scored ${playerScore} and the computer scored ${computerScore} points`)
    }


}

playGame();