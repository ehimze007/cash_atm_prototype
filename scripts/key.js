const keyPads = document.querySelector(".numeric_keypads");
const delete_button = document.querySelector(".delete_button");
const cancel_button = document.querySelector(".cancel_button");
const button_reponsiveness = document.querySelectorAll(".button_reponsiveness");
const pin_value = document.querySelector('#pin');

keyPads.addEventListener("click", (e) => {
  e.target.tagName === "BUTTON" &&
   (pin_value.value += e.target.innerText);

});

delete_button.addEventListener("click", () => {
  const displayDigits = [...pin_value.value];
  displayDigits.pop();
  pin_value.value = displayDigits.join("");
});

cancel_button.addEventListener("click", () => pin_value.value = "");

// listen for clicks on the numeric_buttons and appropriate a style to the clicked button
for (let i = 0; i < button_reponsiveness.length; i++) {
  button_reponsiveness[i].addEventListener("click", function () {
    this.classList.add("pressed");
    setTimeout(function () {
      button_reponsiveness[i].classList.remove("pressed");
    }, 100);
  });
}
