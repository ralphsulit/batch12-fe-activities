//Variables
let cells = document.querySelectorAll('.cell');
let playerX = true;


let gameState = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

// loop to all the cells and add click event
function ticTacToe() {
  cells.forEach(cell => {
    cell.addEventListener('click', cellClick);
  });
}

//when clicked add innerHTML 
function cellClick(e) {
  if (playerX === true) {
    this.innerText = 'X'; //add X when playerX = true
  } else {
    this.innerText = 'O'; //add O when playerX = false
  }
  playerX = !playerX; //when player X is false
}

ticTacToe();