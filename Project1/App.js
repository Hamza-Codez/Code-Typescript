"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var convt = function () {
    var inputElement = document.querySelector('#data');
    if (inputElement) {
        var kms = parseFloat(inputElement.value || '0');
        if (isNaN(kms)) {
            kms = 0;
        }
        var kmToMiles = 0.621371;
        var miles = kms * kmToMiles;
        console.log(miles);
        var resultElement = document.getElementById('res');
        if (resultElement) {
            resultElement.innerText = "".concat(miles, " miles");
        }
    }
};
window.convt = convt;
