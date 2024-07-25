"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convert() {
    var inputCelcius = document.getElementById('data');
    var celcius = parseFloat(inputCelcius.value);
    var Fahrene = celcius * 1.8 + 32;
    var outElement = document.getElementById('getResult');
    if (outElement) {
        outElement.innerText = "".concat(Fahrene.toFixed(2), " Fahrenheit");
    }
}
window.convert = convert;
