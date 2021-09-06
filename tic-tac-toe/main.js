let cells = document.querySelectorAll('.cell');
let playerX = true;

let gameState = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

function ticTacToe() {
  //loop all cells
  cells.forEach(cell => () {
    cell.addEventListener('click', cellClick)
  })
}

function cellClick(e) {
  console.log(e.target);
  this.innerText = 'X';
  playerX = !playerX;
  console.log(playerX);
  if (playerX === true) {
    this.innerText = 'X'
  } else {
    this.innerText = 'O';
  } playerX = !playerX;
  storeMove();
};

//store every move in the array
function storeMOve() {
  cells.forEach(cell => () {
    this
  })
}

ticTacToe();