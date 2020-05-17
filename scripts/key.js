const keyPads = document.querySelector(".numeric_keypads");
const displayScreen = document.querySelector(".atm_screen");
const delete_button = document.querySelector(".delete_button");
const button_reponsiveness = document.querySelectorAll(".button_reponsiveness");

keyPads.addEventListener("click", (e) => {
  e.target.tagName === "BUTTON" &&
    (displayScreen.innerHTML += e.target.textContent);
});

delete_button.addEventListener("click", () => {
  const displayDigits = [...displayScreen.innerHTML];
  displayDigits.pop();
  displayScreen.innerHTML = displayDigits.join("");
});

// listen for clicks on the numeric_buttons and appropriate a style to the clicked button
for (let i = 0; i < button_reponsiveness.length; i++) {
  button_reponsiveness[i].addEventListener("click", function () {
    this.classList.add("pressed");
    setTimeout(function () {
      button_reponsiveness[i].classList.remove("pressed");
    }, 100);
  });
}
