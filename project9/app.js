"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function chk() {
    var _a = ['n1', 'n2', 'n3'].map(function (id) { return parseFloat(document.getElementById(id).value); }), n1 = _a[0], n2 = _a[1], n3 = _a[2];
    var _b = [n1, n2, n3].map(function (number) { return number.toString().slice(-1); }), num1 = _b[0], num2 = _b[1], num3 = _b[2];
    var out = document.getElementById('disply');
    var sign = document.getElementById('sign');
    if (out && sign) {
        var isSame = num1 === num2 && num2 === num3;
        out.innerText = isSame ? "".concat(n1, ", ").concat(n2, " and ").concat(n3, " are same at the end digit") : "".concat(n1, ", ").concat(n2, " and ").concat(n3, " are not same at the end digit");
        sign.style.backgroundColor = isSame ? 'rgb(90, 197, 90)' : 'rgb(230, 74, 63)';
        sign.innerText = isSame ? "Positive" : "Negative";
    }
}
window.chk = chk;
