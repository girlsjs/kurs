let currentNumber = 1;
let playing = false;
let slideshowInterval;
const noOfPins = 5;
document.querySelector(`#pin${currentNumber}`).classList.add('selected');

function showSlide(number) {
  document.querySelector(".show").classList.remove("show");
  document.querySelector(`#slide${number}`).classList.add("show");
  selectPin(number);
  currentNumber = number;
}

function showNextSlide() {
  let newNumber = currentNumber + 1;
  if (newNumber > noOfPins) {
    newNumber = 1;
  }
  showSlide(newNumber);
}

function showPrevSlide() {
  let newNumber = currentNumber - 1;
  if (newNumber <= 0) {
    newNumber = noOfPins;
  }
  showSlide(newNumber);
}

function selectPin(number) {
  document.querySelector(".selected").classList.remove("selected");
  document.querySelector(`#pin${number}`).classList.add("selected");
}

function playButtonClicked() {
  playing ? stopSlideshow() : startSlideshow();
}

function stopSlideshow() {
  playing = false;
  document.querySelector("#play").classList.remove("on");
  clearInterval(slideshowInterval);
}

function startSlideshow() {
  playing = true;
  document.querySelector("#play").classList.add("on");
  slideshowInterval = setInterval(showNextSlide, 3000);
}

for (let i = 1; i <= noOfPins; i++) {
  document
    .querySelector(`#pin${i}`)
    .addEventListener("click", () => showSlide(i));
}
document.querySelector(".next").addEventListener("click", showNextSlide);
document.querySelector(".prev").addEventListener("click", showPrevSlide);
document.querySelector(".play").addEventListener("click", playButtonClicked);
