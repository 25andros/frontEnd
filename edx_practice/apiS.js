let widthX, heightY;

function init() {
  console.log("0");
  const item1 = document.getElementById("start");
  item1.addEventListener("click", () => makeFrame());
  item1.addEventListener("click", () => makePlayer());
  widthX = 500;
  heightY = 500;
  console.log("INIT");
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

let sourceRepo = [
  "../siteOne/media/videos/anime.mp4",
  "../siteOne/media/videos/stol_vet.mp4",
];

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

  //Pause button
  let pauseButton = document.createElement("button");

  pauseButton.addEventListener("click", () => beans.pause());
  document.body.appendChild(pauseButton);

  //next button
  let nextPlay = document.createElement("button");

  nextPlay.addEventListener("click", () => turnNext());
  document.body.appendChild(nextPlay);

  function turnNext() {
    for (let i = 0; i < sourceRepo.length; i++) {
      beans.src = sourceRepo[i++];

      if (sourceRepo[i] == 2) {
        beans.src = sourceRepo[0];
        break;
      }
    }
  }
}

window.onload = init();
