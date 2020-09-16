let css = document.querySelector("textarea");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let random = document.getElementById("random-button");
let copy = document.getElementById("copy-button");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";

  css.value= body.style.background + ";";
}

// Generate 2 random colours
function randomColours() {
  color1.value = "#" + Math.floor(Math.random() * 16777215).toString(16);
  color2.value = "#" + Math.floor(Math.random() * 16777215).toString(16);
  setGradient();
}

// Create "COPY" button to copy the linear-gradient CSS rule to the clipboard (- adapted from Stack Overflow https://stackoverflow.com/questions/49236100/copy-text-from-span-to-clipboard)

function copyText() {
  css.select();
  document.execCommand("copy");
  alert("CSS rule copied to clipboard!");
  css.value = "";
  setGradient();
}

// Grab input colours once they are changed from the default
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", randomColours);
copy.addEventListener("click", copyText);

// Random colour function call on page load

window.onload = randomColours();
