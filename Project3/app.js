"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function check() {
    var inputElement = parseFloat(document.getElementById('number').value);
    var checker = Math.sign(inputElement);
    var outElement = document.getElementById('output');
    if (outElement) {
        if (isNaN(inputElement)) {
            outElement.innerText = "".concat(inputElement, " is not a number");
        }
        else {
            var signText = checker === 1 ? 'Positive' : checker === -1 ? 'Negative' : 'has no +/- sign';
            outElement.innerText = "".concat(inputElement, " is a ").concat(signText, " number");
        }
    }
}
window.check = check;
function genRandom() {
    var _a = [Math.random(), Math.random() * 99 + 1, Math.floor(Math.random() * 999) + 1, Math.floor(Math.random() * 3000) + 1000], ranNum1 = _a[0], ranNum2 = _a[1], ranNum3 = _a[2], ranNum4 = _a[3];
    var _b = ['num1', 'num2', 'num3', 'num4'].map(function (id) { return document.getElementById(id); }), oc1 = _b[0], oc2 = _b[1], oc3 = _b[2], oc4 = _b[3];
    var onclicks = [oc1, oc2, oc3, oc4];
    var messages = [
        "Just a Random Number is ".concat(ranNum1),
        "Random Number between 1 and 100 is ".concat(ranNum2),
        "Integer in a range of 1-1000 is ".concat(ranNum3),
        "4 digit OTP generated is ".concat(ranNum4)
    ];
    onclicks.forEach(function (element, index) {
        if (element) {
            element.innerText = messages[index];
        }
    });
}
window.genRandom = genRandom;
