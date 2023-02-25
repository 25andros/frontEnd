function init() {
  console.log("0");
  const item1 = document.getElementById("start");
  item1.addEventListener("click", () => makeFrame());
  console.log("INIT");
}

//import OSS api
function makeFrame() {
  console.log("1");
  let inFrame = document.createElement("iframe");

  inFrame.id = "openSSexample";
  inFrame.width = "500";
  inFrame.height = "500";
  inFrame.src =
    "https://www.openstreetmap.org/export/embed.html?bbox=-77.0855712890625%2C36.972935408083146%2C-76.20254516601564%2C37.415436475081954";
  document.body.appendChild(inFrame);

}

//import video player dynamically
function makePlayer(){
let inPlayer = document.createElement("video");
    inPlayer.src ="../siteOne/media/videos/anime.mp4";
    inPlayer.controls = true;

let pauseButton = document.createElement("button");

pauseButton.addEventListener("click", ()=>inPlayer.pause());

  document.body.appendChild(inPlayer);
  document.body.appendChild(pauseButton);
}

window.onload = init();
