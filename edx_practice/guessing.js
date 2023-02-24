
const makeIt = document.getElementById("tell");

function init() {
  console.log("INIT done.");
  //start button to play game
  const go = document.getElementById("start");
	const p1= document.getElementById("p1");
	const p2= document.getElementById("p2");
  go.addEventListener("click", () => setupGame());
}

function setupGame() {
  createInputBox();
  createEnterButton();
  hidden = randomNumber(7);
    gameAction = subGuessButton.addEventListener(
"click",()=> rollThru()
    );
	
  p1.innerHTML = ("pick a # between 1 & 7");
  console.log("pick a # between 1 & 7");
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
	//submitGuess.innerHTML = "ENTER HERE";

	//let frank= createTextNode("Submit Guess"); submitGuess.appendChild(frank); 
	
}

function rollThru() {


    if (guess.value==hidden) 
	{onTheMoney();
		//break;
	}
	else{
    (guess.value>hidden) ? highSelection() : lowSelection();
	}
    
//console.log("you be DONE888");
}


function onTheMoney(){
 p1.innerHTML =("winner, winner, chicken dinner!");
	console.log("you win.");
}

function highSelection(){
 p1.innerHTML = ("you're high. Pick lower.");
console.log("you're high. Pick lower.");
}

function lowSelection(){
 p1.innerHTML = ("you be low. Pick higher.");
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
