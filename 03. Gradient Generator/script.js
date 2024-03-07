// Select Dom elements
const body = document.getElementsByTagName("body");
const colorChangeButton = document.querySelector(".btn");

// Generate a random color
function randomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

function changeColor() {
  const color = randomColor();
  const color2 = randomColor();
  document.body.style.background = `linear-gradient(90deg, #${color},#${color2})`;
  console.log(color);
  input.value = `#${color}`;
}

// Change color
colorChangeButton.addEventListener("click", () => {
  changeColor();
});
