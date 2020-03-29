const keyPads = document.querySelector(".numeric_keypads");
const displayScreen = document.querySelector(".atm_screen");
const delete_button = document.querySelector(".delete_button");

keyPads.addEventListener("click", e => {
  e.target.tagName === "BUTTON" &&
    (displayScreen.innerHTML += e.target.textContent);
});

delete_button.addEventListener("click", () => {
  const displayDigits = [...displayScreen.innerHTML];
  displayDigits.pop();
  displayScreen.innerHTML = displayDigits.join("");
});
