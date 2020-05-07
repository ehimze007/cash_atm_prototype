const authenticateButton = document.querySelector("#authenticate");
const feedback = document.querySelector(".feedback");
const prompt = document.querySelector(".prompt");

const giveFeedback = (message) => {
  feedback.innerHTML = message;

  feedback.classList.remove("hide");
  feedback.classList.add("fail");

  setTimeout(() => {
    feedback.classList.add("hide");
    feedback.classList.remove("fail");
  }, 3500);

};

const validateCardNumber = (cardDigits) => {
  const response = LuhnAlgorithm(cardDigits);

!response && giveFeedback("Card is not valid");

 response && (dataBaseCall(500).then((data) => {
    const userDetails = data[cardDigits];

    if (!userDetails) giveFeedback("Card details does not exist");
    else {
      prompt.innerHTML = "Input Card PIN";
      pin_value.value = "";
    }
  }));
};

authenticateButton.addEventListener("click", () => {

    cardNumber = pin_value.value;
    validateCardNumber(cardNumber);

});
