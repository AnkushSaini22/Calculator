const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        //eval function is key point
        let result = eval(display.value);
        // Round off the result to 2 decimal places
        result = Math.round(result * 100) / 100;
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

