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
        alert('Please enter a valid response!')
    }
}

let computerSelection = computerPlay();
let playerSelection = getPlayerSelection();
console.log(computerSelection);
console.log(playerSelection);