/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'

// const playerChoice = document.querySelectorAll('.rpsButton')

// for(const choice of playerChoice){
//      let play
//      choice.addEventListener('click', function(event){
//      console.log(choice.value);
//      })
// }
const totalScore = {computerScore:0, playerScore : 0}

function getComputerChoice() {
   let rock = 1
   let paper = 2
   let scissors = 3
   let computerChoice

   //get computer choice
   let computerSelection = Math.trunc(Math.random()*3)+1;
   
   if (computerSelection === rock){
       computerChoice = 'Rock'
   }else if (computerSelection === paper){
       computerChoice = 'Paper'
   }else if( computerSelection === scissors){
      computerChoice = 'Scissors'
   }

   return computerChoice

}

console.log(`The computer choice is : ${getComputerChoice()}`);

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score
  if (playerChoice == computerChoice){
     score = 0
  // All situations where human wins, set `score` to 1
  }else if (playerChoice == "Rock" &&  computerChoice == "Scissors"){
    score = 1
  }else if (playerChoice == "Scissors" &&  computerChoice == "Paper"){
     score = 1
  }else if (playerChoice == "Paper" &&  computerChoice == "Rock"){
     score = 1
  }else {
     score = -1;
  }
   
  return score
  
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  console.log({playerChoice});

  const computerChoice = getComputerChoice()
  console.log({computerChoice});

  const score = getResult(playerChoice,computerChoice)
  totalScore['playerScore'] += score
  console.log({score});
  console.log({totalScore});
 
}


function playGame() {

  const rpsButtons = document.querySelectorAll('.rpsButton')

   rpsButtons.forEach(rpsButtons => {
    rpsButtons.onclick = () => onClickRPS(rpsButtons.value)
   })
  
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  
}

playGame()