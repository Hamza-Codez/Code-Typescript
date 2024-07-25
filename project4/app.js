function giveCheck() {
    var inputElement = document.getElementById('num');
    var gvnNum = parseFloat(inputElement.value);
    var cliked = document.getElementById('check');
    if (cliked) {
        if (gvnNum % 2 === 0) {
            cliked.innerText = "".concat(gvnNum, " is an Even Number");
        }
        if (gvnNum % 2 !== 0) {
            cliked.innerText = "".concat(gvnNum, " is an Odd Number");
        }
    }
}
window.giveCheck = giveCheck;
