const makeIt = document.getElementById("tell");

function init() {
  console.log("INIT done.");
  //start button to play game
  const go = document.getElementById("start");
  go.addEventListener("click", () => setupGame());
}

function setupGame() {
  createInputBox();
  createEnterButton();
  hidden = randomNumber(7);
    rollThru();
/*
    gameAction = subGuessButton.addEventListener(
rollThru()
    );
*/
}

function createInputBox() {
  //create input box
  inGo = document.getElementById("inputz");
  valuez = document.createElement("input");

  inGo.appendChild(valuez);
  valuez.setAttribute("id", "goIn");
  guess = document.getElementById("goIn");
}

function createEnterButton() {
  const inGo = document.getElementById("inputz");
  const sumbitGuess = document.createElement("button");
  inGo.appendChild(sumbitGuess).setAttribute("id", "subGuessButton");
}

function rollThru() {

  console.log("pick a # between 1 & 7");

    while (guess!==hidden){
    if (guess===hidden ) onTheMoney();

    (guess>hidden) ? highSelection : lowSelection;

    
}
console.log("you be DONE888");
}

function onTheMoney(){
    console.log("you win.");
}

function highSelection(){
console.log("you're high. Pick lower.");
}

function lowSelection(){
    console.log("you be low. Pick higher.");
}

window.onload = init();

function randomNumber(upperBoundNumber) {
  return Math.floor(Math.random() * upperBoundNumber) + 1;
}

function buildNode(section, para, dialogue) {
  const pGraph = document.getElementById(section);
  const lineSay = document.createElement(para);
  const speaksz = document.createTextNode(dialogue);

  pGraph.appendChild(lineSay).appendChild(speaksz);
}
