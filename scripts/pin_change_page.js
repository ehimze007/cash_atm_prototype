const button_reponsiveness = document.querySelectorAll(".button_reponsiveness");
const value_input = document.querySelectorAll(".numeric_buttons");
const pin_value = document.querySelector('#pin');

/**enables button coloring when clicked***/
for (let i = 0; i < button_reponsiveness.length; i++) {
  button_reponsiveness[i].addEventListener("click", function () {
    this.classList.add("pressed");
    setTimeout(function () {
      button_reponsiveness[i].classList.remove("pressed");
    }, 100);
  });
}

/***insert values in password field when numeric_buttons are clicked****/
  for (let i = 0; i < value_input.length; i++){
    value_input[i].addEventListener("click", ()=>{
      let pinArray = [];
      pinArray.push(value_input[i].innerText);
      pin_value.value += value_input[i].innerText;
    });
}
