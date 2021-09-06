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


function cellClick(e) {
  this.innerText = 'X';
}

ticTacToe();