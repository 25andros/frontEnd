let widthX, heightY;
let j = 0;

let sourceRepo = [
  "../siteOne/media/videos/anime.mp4",
  "../siteOne/media/videos/stol_vet.mp4",
];

function init() {
  console.log("0");
  const item1 = document.getElementById("start");

  item1.addEventListener("click", () => buildPage());
  widthX = 500;
  heightY = 500;
  console.log("INIT");
}

function buildPage() {
  makeInputBox();
  //  makeFrame();
  makePlayer();
}

function makeInputBox() {
  //create input box
  let inputBox = document.createElement("input");
  document.body.appendChild(inputBox);
  inputBox.id = "inputBOX";
}

//import OSS api
function makeFrame() {
  console.log("1");
  let inFrame = document.createElement("iframe");

  inFrame.id = "openSSexample";
  inFrame.width = widthX;
  inFrame.height = heightY;
  //inFrame.width = "500";
  //inFrame.height = "500";
  inFrame.src =
    "https://www.openstreetmap.org/export/embed.html?bbox=-77.0855712890625%2C36.972935408083146%2C-76.20254516601564%2C37.415436475081954";
  document.body.appendChild(inFrame);
}

//import video player dynamically
function makePlayer() {
  let inPlayer = document.createElement("video");
  inPlayer.src = sourceRepo[0];
  inPlayer.id = "beans";
  inPlayer.controls = true;
  inPlayer.width = widthX;
  inPlayer.height = heightY;
  document.body.appendChild(inPlayer);

  beans = document.getElementById("beans");

//  inPlayer.addEventListener("ended", () => turnNext(), false);
  inPlayer.addEventListener("click", () => turnNext());

  //Pause button
  let pauseButton = document.createElement("button");

  pauseButton.addEventListener("click", () => pausePlay());
  pauseButton.id = "Pause&Play";
  document.body.appendChild(pauseButton);

  //toStart button

  let toStart = document.createElement("button");
  toStart.addEventListener("click", () => toStartFx());
  document.body.appendChild(toStart);
  toStart.id = "START";

  //nextVID button
  let nextPlay = document.createElement("button");
  nextPlay.id = "NEXT_VID";
  nextPlay.addEventListener("click", () => turnNext());
  document.body.appendChild(nextPlay);
}

let playStatus = 0;

function pausePlay() {
  for (let i = 0; i <= 1; i++) {
    if (playStatus == 1) {
      beans.play();
      playStatus = 0;
      break;
    }
    beans.pause();
    playStatus += 1;
    break;
  }
}

function turnNext() {
  console.log("End of the video!");

  for (let i = 0; i < sourceRepo.length; i++) {

    if ((j == 1)) {
      j = 0;
      console.log("to 0");
      break;
    }
    console.log("+1");
    j += 1;
    break;
  }
  beans.src = sourceRepo[j];
  beans.load();
  beans.play();
  //    break;
}

function toStartFx() {
  beans.currentTime = 0;
  playStatus = 0;
}

window.onload = init();
