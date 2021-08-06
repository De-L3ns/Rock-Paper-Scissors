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







*/

function computerPlay() {
    let possibilities = ['Rock', 'Paper', 'Scissors'];
    let anwser = Math.floor(Math.random() * possibilities.length);
    console.log(possibilities[anwser]);
    return(possibilities[anwser]);
}

computerPlay();