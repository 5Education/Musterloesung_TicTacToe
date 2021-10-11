console.log('Welt');

let wurdeGeklickt = false;
let firstplayer = true;

const gameState = Array.apply("platzhalter", Array(9)).map(function () {
  return ""
})

function firstClickHandler() {
  alert('Button wurde geklickt');
  wurdeGeklickt = true;
  button = document.getElementById('firstbutton');
  button.innerHTML = 'Ich wurde geklickt';
}

function clickHandler() {
  // console.log(gameState);

  if (wurdeGeklickt === false) {
    alert('Erst den ersten Knopf betätigen');
    return;
  }

  // console.log('Ich wurde geklickt');
  const defaultName = 'Lars';
  const userName = prompt('Bitte Namen eingeben:', defaultName);
  if (userName === defaultName) {
    console.error('Der Benutzername darf nicht unverändert bleiben');
  } else {
    // console.log(userName);
    let deinName = document.querySelector('h1');
    deinName.textContent = userName;
  }
}

function tacHandler(button) {
  // console.log(button.getAttribute('key'));
  if (button.innerHTML !== "") {
    // console.log(button.innerHTML);
    alert("Invalides Feld")
    return
  }
  
  button.innerHTML = firstplayer ? 'X' : 'O';
  gameState[button.getAttribute('key')-1] = firstplayer ? '1' : '0';
  // console.log(gameState);

  if (calculateWinner()) {
    winner = firstplayer ? 'Spieler 1' : 'Spieler 2';
    alert(winner + ' hat gewonnen!');
  }

  const draw = !gameState.includes("");

  if (draw) {
    alert("Untentschieden");
    resetGame();
    return;
  }

  firstplayer = !firstplayer;
}

function calculateWinner() {
  const wincases = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  let winfound = false;

  wincases.forEach(winArray => {
    console.log(winArray);
    console.log(gameState[winArray[0]], gameState[winArray[1]], gameState[winArray[2]]);
    if (gameState[winArray[0]] != "" &&
      gameState[winArray[0]] === gameState[winArray[1]] && 
      gameState[winArray[0]] === gameState[winArray[2]]) {
      winfound = true;
      return;
    }
  });

  return winfound;
}


const resetGame = function () {
   gameState.fill("");

   const buttons = Array.from(document.querySelectorAll(".tac"))
  //  console.log(buttons);

   buttons.forEach(button => {
     button.innerHTML = "";
   })

   firstplayer = true
}
