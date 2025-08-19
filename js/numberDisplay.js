const display = document.getElementById('numberDisplay');
const increaseButton = document.getElementById('increaseButton');
const decreaseButton = document.getElementById('decreaseButton');

let count = parseInt(localStorage.getItem("savedCount")) || 0;

display.textContent = count;

increaseButton.addEventListener('click', () => {
  count++;
  display.textContent = count;
  localStorage.setItem("savedCount", count);
});

decreaseButton.addEventListener('click', () => {
  count--;
  display.textContent = count;
  localStorage.setItem("savedCount", count);
});