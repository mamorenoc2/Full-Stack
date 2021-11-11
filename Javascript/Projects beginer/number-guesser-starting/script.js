let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10); 
}

const getAbsoluteDistance = (n1, n2) => {
    return Math.abs(n1-n2);
}

const compareGuesses = (human, number, computer) => {
    let humanChoice = getAbsoluteDistance(number, human);
    // console.log(humanChoice)
    let computerChoice = getAbsoluteDistance(number, computer);
    // console.log(computerChoice)
    return humanChoice <= computerChoice;
}

console.log(compareGuesses(6,3,2));

const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore += 1;
    } else if(winner === 'computer'){
        computerScore += 1;
    }
}

const advanceRound = () => {
    currentRoundNumber += 1;
}