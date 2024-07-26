"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function giveCheck() {
    var inputElement = document.getElementById('num');
    var gvnNum = parseFloat(inputElement.value);
    var cliked = document.getElementById('check');
    var res = gvnNum % 2 == 0 ? "Even" : "Odd";
    if (cliked) {
        cliked.innerText = "".concat(gvnNum, " is an ").concat(res, " Number");
        // if (gvnNum % 2 === 0){
        //   cliked.innerText = `${gvnNum} is an Even Number`
        // }
        // if (gvnNum % 2 !== 0){
        //   cliked.innerText = `${gvnNum} is an Odd Number`
        // }
    }
}
window.giveCheck = giveCheck;
function PrimeCheck() {
    var inputElement = document.getElementById('num2');
    var givnNum = parseFloat(inputElement.value);
    var resultShow = document.getElementById('check2');
    if (resultShow) {
        if (givnNum === 1) {
            resultShow.innerText = "".concat(givnNum, " is Neither Prime Nor Composite Number");
        }
        else if (givnNum < 0) {
            resultShow.innerText = "".concat(givnNum, " is not a prime number");
        }
        else if (givnNum === 2) {
            resultShow.innerText = "".concat(givnNum, " is Prime number");
        }
        else {
            for (var i = 2; i < givnNum; i++) {
                if (givnNum % i === 0) {
                    resultShow.innerText = "".concat(givnNum, " is not a prime number");
                    break;
                }
                else {
                    resultShow.innerText = "".concat(givnNum, " is a prime number");
                }
            }
        }
    }
}
window.PrimeCheck = PrimeCheck;
