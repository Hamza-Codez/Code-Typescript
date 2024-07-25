"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function check() {
    var inputElement = document.getElementById('number');
    var val = parseFloat(inputElement.value);
    var checker = Math.sign(val);
    var outElement = document.getElementById('output');
    if (outElement) {
        if (isNaN(val)) {
            outElement.innerText = "".concat(inputElement.value, " is not a number");
        }
        else if (checker === 1) {
            outElement.innerText = "".concat(val, " is a Positive number");
        }
        else if (checker === -1) {
            outElement.innerText = "".concat(val, " is a Negative number");
        }
        else if (checker === 0) {
            outElement.innerText = "".concat(val, " has no +/- sign");
        }
    }
}
window.check = check;
