function getfact() {
    var inputElement = document.getElementById('givnNum');
    var givenNum = parseFloat(inputElement.value);
    var check = (document.getElementById('ShowVal'));
    var fact = 1;
    if (check) {
        if (givenNum === 0) {
            check.innerText = "The factorial of ".concat(givenNum, " is 1");
        }
        else if (givenNum < 0) {
            check.innerText = "The factorial of ".concat(givenNum, " is not possible because it is a Negative number");
        }
        else {
            for (var i = 1; i <= givenNum; i++) {
                fact = fact * i;
            }
            check.innerText = "The factorial of the ".concat(givenNum, " is ").concat(fact);
        }
    }
}
window.getfact = getfact;
