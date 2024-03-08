// Select Dom elements
const body = document.getElementsByTagName("body");
const colorChangeButton = document.querySelector(".btn-generate");
const color1 = document.querySelector(".color-1");
const color2 = document.querySelector(".color-2");

// Generate a random color
function randomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

function changeColor() {
  const color = randomColor();
  const color2 = randomColor();
  document.body.style.background = `linear-gradient(90deg, #${color},#${color2})`;
  console.log(color);
}

// Change color
colorChangeButton.addEventListener("click", () => {
  changeColor();
});

// change color on space press
document.body.onkeyup = function (e) {
  if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
    changeColor();
  }
};

// Copy to clipboard
color1.addEventListener("click", () => {
  navigator.clipboard.writeText(color1.innerHTML);
  const oldColor = color1.innerHTML;
  console.log(oldColor);
  color1.innerHTML = "Copied";

  setTimeout(() => {
    color1.innerHTML = oldColor;
  }, 1000);
});

color2.addEventListener("click", () => {
  navigator.clipboard.writeText(color2.innerHTML);
  const oldColor = color2.innerHTML;
  console.log(oldColor);
  color2.innerHTML = "Copied";

  setTimeout(() => {
    color2.innerHTML = oldColor;
  }, 1000);
});
