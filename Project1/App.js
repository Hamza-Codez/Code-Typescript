"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convert() {
    var kmsInput = document.getElementById('data');
    var kms = parseFloat(kmsInput.value);
    var factor = 0.621371;
    var miles = kms * factor;
    var resOut = document.getElementById('result');
    if (resOut) {
        resOut.innerText = "".concat(miles.toFixed(2), " miles");
    }
}
window.convert = convert;
