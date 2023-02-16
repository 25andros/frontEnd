
const select = document.querySelector('select');
const html = document.querySelector('html');
document.body.style.padding = '10px';

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.addEventListener('change', () => select.value === 'black'
  ? update('black', 'white')
  : update('white', 'black')
);



/*
addEventListener("click", ptoPage);

function ptoPage(evt) {
  //    alert("Shit just happened.");
  document.body.innerHTML += "<p> Made you look. </p>";
}
*/

/*
//interesting code
window.onclick = function (evt) {
  alert("bamm!!!");
};
*/


/*
const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setWeather());
//select.addEventListener('change', setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === 'sunny') {
    para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
  } else if (choice === 'rainy') {
    para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
  } else if (choice === 'snowing') {
    para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
  } else if (choice === 'overcast') {
    para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
  } else {
    para.textContent = '';
  }
}

*/

function first(){

    console.log("Loaded.");
}


function init() {
  x = 12;
  alpha = 54;

  console.log("init comp.");
}

function domath(x) {
  x = x * x;
  return x;
}

var student1 = {
  fullName: "John Doe",
  age: 23,
  city: "New York",
  ssn: "11-22-33-44",
};

function repit() {
  var i = 0,
    j = 0,
    k = 0;

  while (i < 4) {
    i += 1;

    j = k + randy();
    console.log("random J:" + j);

    k = j + randy();

    console.log(i + " " + k);
  }
}

function forRand() {
  let j = 0;
  for (let i = 0; i < 10; i++) {
    j += randy();
    console.log("i is :" + i + "J: " + j);
  }
}

function PEAT() {
  var i = 0,
    j = 0;
  do {
    j = randy();
    console.log("i: " + (i + 1) + " and the random is " + j);
    i++;
  } while (i < 20 && j < 50);
  console.log("PEAT finished.");
}

function sampleFOR() {
  for (let i = 0; i < 10; i++) {
    console.log(i + ":");
    for (let j = 0; j < 10; j++) {
      console.log(j);
    }
  }
  console.log("For loop completed.");
  //Note: This function is making a newline for each for iteration. Not sure how to stop yet.
}

function sampleFOR2() {
  text = "";
  for (let i = 0; i < 10; i++) {
    //    console.log(i + ":");
    text = text + i + ":";

    for (let j = 0; j < 10; j++) {
      text += j;
    }
    console.log(text);
    text = "";
  }
  console.log("For loop completed.");
  //Note: This function is making a newline for each for iteration. Not sure how to stop yet.
}

function randy() {
  let steb = Math.random() * 100;
  steb = Math.floor(steb);
  return steb;
}

function sayIt() {
  console.log(randy());
}

function ray2() {
  let matrix = [],
    cols = 10,
    rows = 3;

  for (let i = 0; i < cols; i++) {
    matrix[i][j] = i;
    for (let j = 0; j < rows; j++) {
      matrix[i][j] = j;
    }
  }
}

function expo(alf, bet) {
  bet = Math.pow(alf, 2);
  document.body.innerHTML += "<p>The value of alpha is now = " + bet + "</p>";
  x = bet;
  return bet;
}

function studplus() {
  x = x + 1;
  student1.age += 1;

  document.body.innerHTML += "<p>Value of x = " + x + "</p>";
  document.body.innerHTML +=
    "<p>Student's age now is  = " + student1.age + "</p>";
  console.log("change stud age comp.");
}

