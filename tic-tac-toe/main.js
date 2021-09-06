//Variable
let cells = document.querySelectorAll('.cell'); //all cells
let cell = document.querySelector('.cell');
let playerX = true // boolean for playerX
let gameActive = true //pause the game 
//loop to all the cells and add click event
function game() {
  cells.forEach(cell => {
    cell.addEventListener('click', cellClick);
  });
}

//Add X and O on cell when clicked
function cellClick() {
  if (playerX === true) {
    this.innerHTML = `<i class="fas fa-times fa-3x cross"></i>`; //Add X when player is true
    this.style.backgroundColor = '#fe5c5c'; //change the background color to red
    this.style.pointerEvents = 'none'; //unactive click
  } else {
    this.innerHTML = `<i class="far fa-circle fa-2x circle"></i>`; //Add O when player is false
    this.style.backgroundColor = '#ffbf00'; //change the background color to red
    this.style.pointerEvents = 'none'; //unactive click
  }
  playerX = !playerX;
  saveMove();
};

//save every move in an array

let gameState = []; //game storage

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


game();