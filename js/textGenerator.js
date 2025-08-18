const button = document.getElementById("textGeneratorButton");
const text = document.getElementById("hiddenText");

button.addEventListener("click", () => {
    text.classList.toggle("hidden");
  });