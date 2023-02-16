//dynmaically change CSS with js

//to Black
const blk = document.getElementById("cssBlack");

blk.addEventListener("click", () => {
  document.body.style.backgroundColor = "black";
    console.log("Style now changed to black");
});


//to White
const wht = document.getElementById("cssWhite");

wht.addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
    console.log("Style now changed to white");
});

//to random Colour
const btn = document.getElementById("cssRainbow");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
    console.log("Style now changed to random colour");
});


