// get valid pin number
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + "";
    if (pinString.length == 4) {
        return pin;
    } else {
        // console.log("got three digit string and calling again", pin);
        return getPin();
    }
}
// generate pin function
function generatePin() {
    const pin = getPin();
    document.getElementById("display-pin").value = pin;
}

// all number and clear them
document.getElementById("key-pad").addEventListener("click", function (event) {
    const number = event.target.innerText;
    const calceInput = document.getElementById("typed-number");
    if (isNaN(number)) {
        if (number == "C") {
            calceInput.value = "";
        }
    } else {
        calceInput.value = calceInput.value + number;
    }
});

//  submit button function
function varifyPin() {
    const pin = document.getElementById("display-pin").value;
    const typeNumbers = document.getElementById("typed-number").value;
    const dispError = document.getElementById("notify-fail");
    const dispSuccess = document.getElementById("notify-success");
    if (pin == typeNumbers) {
        dispSuccess.style.display = "block";
        dispError.style.display = "none";
    } else {
        dispSuccess.style.display = "none";
        dispError.style.display = "block";
    }
}
