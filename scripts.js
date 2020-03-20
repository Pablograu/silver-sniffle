const windowX = window.innerWidth;
const windowY = window.innerHeight;
const body = document.querySelector("body");
const startBtn = document.getElementById("start");
function turnOffPixel() {
  console.log("starting...");
  let rand = Math.floor(Math.random() * 2);
  let randomX = Math.floor(Math.random() * windowX);
  let randomY = Math.floor(Math.random() * windowY);
  console.log("randomXXXXX", windowX);
  console.log("randomYYYYY", windowY);

  //hiii
  let pixel = document.createElement("div");
  pixel.classList.add("pixel");
  pixel.style.backgroundImage = `url(./images/carapau${rand}.png)`;
  pixel.style.left = `${randomX}px`;
  pixel.style.top = `${randomY}px`;
  body.appendChild(pixel);
}

function removePixel() {
  const pixelArray = document.querySelectorAll(".pixel");
  [...pixelArray][0].remove();
  console.log("lenzzzzzzz", [...pixelArray].length);
}

function startRemovingPixels() {
  console.log("initializing removal...");
  setInterval(removePixel, 800);
}

function init() {
  let create = setInterval(turnOffPixel, 500);
  setTimeout(startRemovingPixels, 3000);
  startBtn.remove();
}

startBtn.addEventListener("click", init);
