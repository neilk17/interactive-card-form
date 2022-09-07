const form = document.querySelector('.form');

const CardNameInput = document.getElementById("c_name_input");
const CardNumberInput = document.getElementById("c_number_input");
const CardMonthInput = document.getElementById("c_month_input");
const CardYearInput = document.getElementById("c_year_input");
const CardCvcInput = document.getElementById("c_cvc_input");

const CardNameError = document.querySelector(".name-error");
const CardNumberError = document.querySelector(".number-error");
const CardDateError = document.querySelector(".date-error");
const CardCvcError = document.querySelector(".cvc-error");

function myFunction() {
    // inputs = [CardNameInput,CardNumberInput,CardMonthInput,CardYearInput,CardCvcInput];
    handleInput();
    showThankYou();
}
function handleInput() {
    if (!CardNameInput.value || !onlyLetters(CardNameInput.value)) {
        CardNameError.style.display = "block";
        handleInput();
    }
    if (!CardNumberInput.value) {
        CardNumberError.style.display = "block";
        handleInput();
    }
    if (!CardMonthInput.value || !CardYearInput.value) {
        CardDateError.style.display = "block";
        handleInput();
    }
    if (!CardCvcError.value) {
        // CardCvcError.style.display = "block";
        // handleInput();
    }
    return;
}

function showThankYou() {
    document.getElementById("form").style.display = "none";
    document.getElementById("thank-you").style.display = "flex";
}

function onlyLetters(str) {
    return /^[a-zA-Z]+$/.test(str);
}