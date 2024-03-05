// Select Dom elements
const body = document.getElementsByTagName("body");
const container = document.querySelector(".container");
const colorChangeButton = document.querySelector(".btn");
const input = document.getElementById("input");

// Generate a random color
function randomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

function changeColor() {
  const color = randomColor();
  document.body.style.background = "#" + color;
  console.log(color);
  input.value = `#${color}`;
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
function myFunction() {
  // Select the text field
  input.select();
  input.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(input.value);

  // Alert the copied text
  alert("Copied the text: " + input.value);
}
