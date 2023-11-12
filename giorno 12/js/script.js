
const generateMainBoard = function () {
  const board = document.querySelector('.main-board');

  for (let i = 0; i < 76; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.textContent = i + 1;

    board.appendChild(cell);
  }
};

generateMainBoard();

let selectedNumbers = []; 

let button = document.querySelector("#randBtn")
button.addEventListener("click", () => {
  let number;
  do {
    number = Math.floor(Math.random() * 77) + 1;
  } while (selectedNumbers.includes(number));

  selectedNumbers.push(number);
  console.log(number);

 

  const cells = document.querySelectorAll('.cell, .player-cell');

  cells.forEach(cell => {
    
    if (parseInt(cell.textContent, 10) === number) {
      cell.style.backgroundColor = "red";
    }
  })
});

let playerBoards = []; 

document.getElementById('userBoardBtn').addEventListener('click', () => {
  const numberOfBoards = parseInt(document.getElementById('usersNumber').value, 10);
  playerBoards = []; 

  for (let i = 0; i < numberOfBoards; i++) {
    const playerBoard = document.createElement('div');
    playerBoard.className = 'player-board';
    document.body.appendChild(playerBoard);
    generatePlayerBoard(playerBoard);
    playerBoards.push(playerBoard);
  }

  alert(`Hai creato ${numberOfBoards} cartelline.`);
});


const generatePlayerBoard = function (board) {
  const selectedNumbersPlayer = [];

  for (let i = 0; i < 24; i++) {
    const cell = document.createElement('div');
    const number = generateUniqueRandomNumber(selectedNumbersPlayer);
    cell.innerText = number;
    cell.className = 'player-cell' ;
    board.appendChild(cell);
  }
};

const playerCells = document.querySelectorAll('.player-cell');




const generateUniqueRandomNumber = (selectedNumbers) => {
  let number;
  do {
    number = Math.floor(Math.random() * 77) + 1;
  } while (selectedNumbers.includes(number));

  selectedNumbers.push(number);
  return number;
};
