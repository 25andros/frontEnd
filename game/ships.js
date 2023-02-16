window.onload = init();

//Decalaration of Values

let width = 7,
  length = 7,
  guess,
  guessCounter = 0;
value = 0;
(ray = []), (shipLocation = []);
let quadrant = new Array(7);

const item1 = document.getElementById("message");
const item11 = document.getElementById("message2");
const item2 = document.getElementById("gCount");
const item3 = document.getElementById("done");

function init() {
  console.log("init completed.");
}

function startUp() {
    setShip();
  loadEnemyShips();
  console.log("Ships loaded...");
  item1.innerHTML = "Ships have been loaded..";
  item11.innerHTML = "Fire at will...";
}

function setShip() {
  ray[0] = "popeye";
  for (let i = 1; i <= width; i++) {
    ray[i] = 0;
  }
}

//Initialization of array
function setQuadrant() {
  for (let i = 0; i < quandrant.length; i++) {
    quandrant[i] = new Array(10);
    for (let j = 0; j < quandrant[i].length; j++) {
      quandrant[i][j] = i * j;
    }
  }
}

function showQuad(alpha) {
  for (let i = 0; i < cube.length; i++) {
    for (let j = 0; cube[i].length; j++) {
      console.log(cube[i][j]);
    }
  }
}

function loadEnemyShips() {
  let locate = randomNumber(width);
  ray[locate] = 1;
  value = locate;
}

function randomNumber(upperBoundNumber) {
  return Math.floor(Math.random() * upperBoundNumber) + 1;
}

const game = document.getElementById("start");
game.addEventListener("click", () => {
  startUp();
  console.log("Startup Commenced.");
});

//Fire event handler

const shot = document.getElementById("fire");
shot.addEventListener("click", () => {
  roundFired();
  compareGuessToRay();
});

function roundFired() {
  guess = document.getElementById("guessInput").value;
  item1.innerHTML = "Rounds fired!\nYour guess was: " + guess;
}

function compareGuessToRay() {
  for (let i = 0; i < width; i++) {
    if (ray[guess] == 1) {
      console.log("It's a hit!!!!");
      item11.innerHTML = "";
      statusWin();
      break;
    }
    if (guessCounter >= 3) {
      item3.innerHTML = "You lose!";
    } else {
      console.log("MISS!!!");
      guessCounter += 1;
      item2.innerHTML = guessCounter;
      giveHint();
      break;
    }
  }
}

function giveHint() {
  item1.innerHTML = "Looks like you're having some trouble.";
  if (guess > value) {
    item11.innerHTML = "Pick lower";
  }
  if (guess < value) {
    item11.innerHTML = "Pick higher";
  }
}

function statusWin() {
  item3.innerHTML = "You've WON!!!!";
}

//Attempt as Object passing arrays

let shine = [];

function buildRay(size) {
  shine = new Array(size);
  //  rayBuildTwoD2(shine, size);
}

//Initialization of array
function rayBuildTwoD2(arrayName, arrayLength) {
  for (let i = 0; i < arrayLength.length; i++) {
    arrayName[i] = new Array(10);
    for (let j = 0; j < arrayLength[i].length; j++) {
      arrayName[i][j] = i * j;
    }
  }
}

//2D arrays

let cube = new Array(10);

//Initialization of array
function rayBuildTwoD() {
  for (let i = 0; i < cube.length; i++) {
    cube[i] = new Array(10);
    for (let j = 0; j < cube[i].length; j++) {
      cube[i][j] = i * j;
    }
  }
}

function rayPrintTwoD() {
  for (let i = 0; i < cube.length; i++) {
    for (let j = 0; cube[i].length; j++) {
      console.log(cube[i][j]);
    }
  }
}
