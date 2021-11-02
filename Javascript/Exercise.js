/** Rock, Paper, or Scissors
Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors.
The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
boom destroys everything
If there’s a tie, then the game ends in a draw. */

const getUserChoice = (userInput) => {
  let choice = '';
  userInput = userInput.toLowerCase();
  if (userInput === 'rock'){
    choice = userInput;
  } else if (userInput === 'paper'){
    choice = userInput;
  } else if (userInput === 'scissors'){
    choice = userInput;
  } else if (userInput === 'boom'){
    choice = userInput;
  } else {
    console.log('You write the wrong choice')
  }
  return choice;
};

var getComputerChoice  = () => {
  let choice = '';
  var number = Math.floor(Math.random() *3);
  switch(number){
    case 0:
      choice = 'rock';
      break;
    case 1:
      choice = 'paper';
      break;
    case 2:
      choice = 'scissors';
      break;
    default:
      console.log('Invalid Item');
      break;
  }
  return choice;
}

var determineWinner = (userChoice, computerChoice) => {
  var winner = '';
  if(userChoice === computerChoice){
    return 'This is a tie';
  } else if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      winner = 'Computer wins';
    } else {
      winner = 'User wins';
    }
  } else if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      winner = 'Computer wins';
    } else {
      winner = 'User wins';
    }
  } else if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      winner = 'Computer wins';
    } else {
      winner = 'User wins';
    }
  } else if (userChoice === 'boom'){
      winner = 'User wins';
    }
  return winner;
};

const playGame = () => {
   const userChoice = getUserChoice('boom');
   const computerChoice = getComputerChoice();
   console.log('You threw: ' + userChoice);
   console.log('The computer threw: ' + computerChoice);
   console.log(determineWinner(userChoice, computerChoice));
};
 
playGame();