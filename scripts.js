const windowX = window.innerWidth;
const windowY = window.innerHeight;
const body = document.querySelector("body");
const startBtn = document.getElementById("start");
const quoteArr = [
  "ola",
  "buenas...",
  "jiji",
  "saludos",
  "no vee",
  "eeeeooohh",
  "jejejeje",
  "k dise tio",
  "pelele"
];

function turnOffPixel() {
  console.log("starting...");
  let randomX = Math.floor(Math.random() * windowX);
  let randomY = Math.floor(Math.random() * windowY);
  let rand = Math.floor(Math.random() * 8);
  let pixel = document.createElement("div");
  pixel.classList.add("pixel");
  pixel.style.backgroundImage = `url(./images/carapau${rand}.png)`;
  pixel.style.left = `${randomX}px`;
  pixel.style.top = `${randomY}px`;
  body.appendChild(pixel);
  saySomething(quoteArr);
}

function saySomething(arr) {
  let quote = document.createElement("div");
  let rand = Math.floor(Math.random() * arr.length);
  let randomX = Math.floor(Math.random() * windowX);
  let randomY = Math.floor(Math.random() * windowY);
  quote.classList.add("quote");
  quote.style.left = `${randomX}px`;
  quote.style.top = `${randomY}px`;
  if (Math.floor(Math.random() * 100 > 75)) {
    quote.innerText = arr[rand];
    body.appendChild(quote);
    console.log(quote);
  }
}

function removePixel() {
  const pixelArray = document.querySelectorAll(".pixel");
  const quoteArr = document.querySelectorAll(".quote");
  [...pixelArray][0].remove();
  if (Math.floor(Math.random() * 100 > 75) && [...quoteArr][0]) {
    [...quoteArr][0].remove();
  }
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
