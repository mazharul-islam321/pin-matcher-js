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
