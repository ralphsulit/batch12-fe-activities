//Variable
let cells = document.querySelectorAll('.cell'); //all cells
let cell = document.querySelector('.cell');
let playerX = true // currentPlayer
let gameActive = true //pause the game 
let drawCounter = 0; //draw the game

//loop to all the cells and add click event
function game() {
  cells.forEach(cell => {
    cell.addEventListener('click', cellClick);
  });
}

//Add X and O on cell when clicked
function cellClick() {
  let mark = '';
  if (playerX === true) {
    this.innerText = `x`; //Add X when player is true
    mark = 'x';
    this.style.backgroundColor = '#fe5c5c'; //change the background color to red
    this.style.pointerEvents = 'none'; //unactive click
  } else {
    this.innerText = `o`; //Add O when player is false
    mark = 'o';
    this.style.backgroundColor = '#ffbf00'; //change the background color to red
    this.style.pointerEvents = 'none'; //unactive click
  }
  // this.innerText = mark;
  playerX = !playerX;
  saveMove();
  resultValidation(mark);
};

//game storage
let gameState = [];

//save every move in an array
function saveMove() {
  let row1 = [];
  let row2 = [];
  let row3 = [];

  cells.forEach((cell, i) => {
    if (i < 3) { //if index is 0,1,2
      row1.push(cell.innerHTML);
    } else if (i >= 3 && i <= 5) { //if index is 3,4,5
      row2.push(cell.innerHTML);
    } else { //if index is 6,7,8
      row3.push(cell.innerHTML);
    }
  })
  gameState.push([
    row1,
    row2,
    row3
  ]);   
  console.log(gameState);
};

//winning conditions
const winningConditions = [
  [0, 1, 2], 
  [3, 4, 5], 
  [6, 7, 8], 
  [0, 3, 6], 
  [1, 4, 7], 
  [2, 5, 8], 
  [0, 4, 8], 
  [6, 4, 2] 
];  

// Check if the current player won the game
function resultValidation(playerMark) {
  // let roundWon = false;
  for (let i = 0; i < cells.length; i++) { //loop all the element cell
    // let winCondition = winningConditions[i];
    for (let j = 0; j < winningConditions.length; j++) { //loop over winning conditions
      for (let k = 0; k < winningConditions[j].length; k++) {
        let a = cells[winningConditions[j][0]].innerText;
        let b = cells[winningConditions[j][1]].innerText;
        let c = cells[winningConditions[j][2]].innerText;

        if (a === playerMark && b === playerMark && c === playerMark) {
          console.log('winner');
          return `${playerMark} is the winner`;
          break;
        } 
      }
    } 
  }
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].innerText !== '') {
      drawCounter++;
    } 
  }
  if (drawCounter === 9) {
    console.log('draw');
  }
  drawCounter = 0;
};
game();