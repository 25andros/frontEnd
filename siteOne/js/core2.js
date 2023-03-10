/*
// Pass a function to map
const map1 = array1.map(x => x * 2);
*/


//Iterations
/*
.forEach()
.map()
.filter()
.findIndex()
.reduce()
*/

//forEach
function forPeaches() {
  const fruits = ["mango", "papaya", "pineapple", "apple"];

  for (let i = 0; i < fruits.length; i++) {
    console.log("- " + fruits[i]);
  }
  console.log("\n\n");

  fruits.forEach((i) => console.log(i));
}

function randomNumber(upperBoundNumber) {
  return Math.floor(Math.random() * upperBoundNumber) + 1;
}

function parleDue(place, dimoi) {
  let status = document.getElementById(place);
  status.innerHTML = dimoi;
  return dimoi;
}

function buildNode(section, para, dialogue) {
  const pGraph = document.getElementById(section);
  const lineSay = document.createElement(para);
  const speaksz = document.createTextNode(dialogue);

  pGraph.appendChild(lineSay).appendChild(speaksz);
}

function buildNodeStatic() {
  //"nodes" is the id of the element I'm putting withing...
  const pGraph = document.getElementById("nodes");
  const lineSay = document.createElement("p");
  const speaksz = document.createTextNode("Build Node created!!!");

  pGraph.appendChild(lineSay).appendChild(speaksz);
}

//interesting passage
const resultsList = document.getElementById("results");
new URLSearchParams(window.location.search).forEach((value, name) => {
  resultsList.append(`${name}:${value}`);

  resultsList.append(document.createElement("br"));
});

//2D arrays

let cube = new Array(10);

//Initialization of array
function rayBuildTwoD() {
  for (let i = 0; i < cube.length; i++) {
    cube[i] = new Array(10);
    for (let j = 0; j < cube[i].length; j++) {
      //cube[i][j] = i * j;
      cube[i][j] = (i + 1) * (j + 1);

      /* Count 1 through 100
      cube[i][j] = count;
        count++;
        */
    }
  }
}

//Initialization of array
function rayBuildTwoDv2() {
  let count = 1;
  for (let i = 0; i < cube.length; i++) {
    cube[i] = new Array(10);
    for (let j = 0; j < cube[i].length; j++) {
      cube[i][j] = count;
      count++;
    }
  }
}

function rayPrint() {
  for (let i = 0; i < cube.length; i++) {
    console.log(cube[i]);
  }
}

//Listeners

const stats = document.getElementById("input");
const dStat = document.getElementById("deleteStat");
dStat.addEventListener("click", () => {
  delete myTruck.colour;
});

/*
//constructor function ES5

function Vehicle(year, make) {
  this.year = year;
  this.make = make;
  this.value = function () {
    return "You've got a " + this.year + " " + this.make + ".";
  };
  this.makeNoise = function () {
    return "brum brum brum brum brum brum brum";
  };
}
*/

//constructor class in ES6
class Car {
  constructor(year, make) {
    this.year = year;
    this.make = make;
    this.value = function () {
      return "You've got a " + this.year + " " + this.make + ".";
    };
    this.makeNoise = function () {
      return "brum brum brum brum brum brum brum";
    };
  }

  makeNoise2() {
    console.log("beep bop, beep bop!");
  }

  alarm() {
    console.log("Ding Ding Ding Ding!!!!!");
  }
}

//Objects
let verona = new Car(1998, "Jeep");
let calixia = new Car(2018, "GMC");
let riley = new Car(2014, "VW");

let anyTruck = {
  year: 2018,
  make: "GMC",
  model: "canyon",
  engine: "2.8L diesel",
  trim: "4D SLE",
  colour: "slate",
};
