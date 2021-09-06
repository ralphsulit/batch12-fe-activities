//Variable
let cells = document.querySelectorAll('.cell'); //all cells
let playerX = true // boolean for playerX


//loop to all the cells and add click event
cells.forEach(cell => {
  cell.addEventListener('click', cellClick);
});

function cellClick() {
  if (playerX === true) {
    this.innerHTML = `<i class="fas fa-times fa-3x cross"></i>`; //Add X when player is true
    this.style.backgroundColor = '#fe5c5c'; //change the background color to red
  } else {
    this.innerHTML = `<i class="far fa-circle fa-2x circle"></i>`; //Add O when player is false
    this.style.backgroundColor = '#ffbf00'; //change the background color to red
  }
  playerX = !playerX;
}
