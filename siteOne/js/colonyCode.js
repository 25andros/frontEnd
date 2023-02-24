window.onload = init;

//Initiated values

let x = 10;
let choice = 1;
let str;
let item = "current";
let sayz = "ozzie mates!!!";

let simple = [];
//Functions

function init() {
  console.log("INITIATED");
}

function curStatus() {
  simple[0] = choice;
  simple[1] = x;
  console.log(simple);
}

function onePlus() {
  console.log("choice is " + choice);
  choice += 1;
  if (choice > 3) {
    choice = 1;
  }
  return "choice is now " + choice;
}

function trial() {
  switch (choice) {
    case 1:
      console.log("alpha");
      alpha();
      break;
    case 2:
      console.log("beta");
      beta();
      break;
    case 3:
      console.log("charile");
      charlie();
      break;
    default:
      let item = "navi";
      console.log("value was not an ascribed value");
      return parleDue(item, "choice was not an ascribed value");
  }
}

function alpha() {
  if (x == 15) {
    parleDue(item, "The value of X is now 15");
    console.log("Fx alpha, x is true");
  } else {
    parleDue(item, "The value of X isn't 15");
    console.log("Fx alpha, x is false");
  }
}

function beta() {
  passThru("charlie and the chocolate factory.");
}

function charlie() {
  if (x == 2.5) {
    parleDue("navi", "Charlie");
    console.log("charlie & grabID has been run");
  } else {
    console.log("fail");
  }
}

function passThru(str) {
  console.log(" You asked me to say " + str);
}

function parleDue(place, dimoi) {
  let status = document.getElementById(place);
  status.innerHTML = dimoi;
  return dimoi;
}

function rX() {
  x = 2.5;
  console.log("x reduced to 2.5");
}

function bX() {
  x = 15;
  console.log("x has been stuffed to 15");
}

//choice add plus 1
function oneMore(alpha) {
  console.log("choice is " + choice);
  choice += 1;
  alpha += 1;
  console.log("choice is " + alpha);
  return alpha;
}

function turn() {
  let dice = rollDie(4);
  console.log("choice is now  " + dice);
  choice = dice;

  let valOfX = rollDie(3);
  console.log("the value of X is now  " + valOfX);
  switch (valOfX) {
    case 1:
      x = 2.5;
      break;
    case 2:
      x = 15;
      break;
    case 3:
      x = 10;
      break;
    default:
      console.log("You cheated!!!");
      return parleDue("navi", "You cheated");
  }

  trial();
}

function rollDie(numOfSides) {
  let roll;
  roll = Math.floor(Math.random() * numOfSides) + 1;
  return roll;
}

function randomNumber(upperBoundNumber) {
  return Math.floor(Math.random() * upperBoundNumber) + 1;
}

const item1 = document.getElementById("jesus");
item1.addEventListener("click", () => alpha());

const swt = document.getElementById("decide");
swt.addEventListener("click", () => onePlus(choice));

const goIt = document.getElementById("turns");
goIt.addEventListener("click", () => turn());
