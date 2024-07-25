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
function genRandom() {
    var ranNum1 = Math.random();
    var ranNum2 = Math.random() * (100 - 1) + 1;
    var ranNum3 = Math.floor(Math.random() * (1000 - 1) + 1);
    var ranNum4 = Math.floor(Math.random() * (4000 - 1000) + 1000);
    var onclik1 = document.getElementById('num1');
    var onclik2 = document.getElementById('num2');
    var onclik3 = document.getElementById('num3');
    var onclik4 = document.getElementById('num4');
    if (onclik1) {
        onclik1.innerText = "Just a Random Number is ".concat(ranNum1);
    }
    if (onclik2) {
        onclik2.innerText = "Random Number between 1 and 100 is ".concat(ranNum2);
    }
    if (onclik3) {
        onclik3.innerText = "Integer in a range of 1-1000 is ".concat(ranNum3);
    }
    if (onclik4) {
        onclik4.innerText = "4 digit Otp generated is ".concat(ranNum4);
    }
}
window.genRandom = genRandom;
