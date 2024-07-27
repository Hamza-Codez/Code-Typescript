"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function drawTable() {
    var inputbar1 = document.getElementById('ib1');
    var inputbar2 = document.getElementById('ib2');
    var inputbar3 = document.getElementById('ib3');
    var inputbar4 = document.getElementById('ib4');
    var ib1 = parseFloat(inputbar1.value);
    var ib2 = parseFloat(inputbar2.value);
    var ib3 = parseFloat(inputbar3.value);
    var ib4 = parseFloat(inputbar4.value);
    var dt1 = document.getElementById('box1');
    var dt2 = document.getElementById('box2');
    var dt3 = document.getElementById('box3');
    var dt4 = document.getElementById('box4');
    if (dt1)
        dt1.innerText = "Table 1\n";
    if (dt2)
        dt2.innerText = "Table 2\n";
    if (dt3)
        dt3.innerText = "Table 3\n";
    if (dt4)
        dt4.innerText = "Table 4\n";
    for (var m = 1; m <= 10; m++) {
        if (dt1 && !isNaN(ib1)) {
            dt1.innerText += "".concat(ib1, " * ").concat(m, " = ").concat(ib1 * m, "\n");
        }
        else if (dt1) {
            dt1.innerText = "Please enter a number";
        }
        if (dt2 && !isNaN(ib2)) {
            dt2.innerText += "".concat(ib2, " * ").concat(m, " = ").concat(ib2 * m, "\n");
        }
        else if (dt2) {
            dt2.innerText = "Please enter a number";
        }
        if (dt3 && !isNaN(ib3)) {
            dt3.innerText += "".concat(ib3, " * ").concat(m, " = ").concat(ib3 * m, "\n");
        }
        else if (dt3) {
            dt3.innerText = "Please enter a number";
        }
        if (dt4 && !isNaN(ib4)) {
            dt4.innerText += "".concat(ib4, " * ").concat(m, " = ").concat(ib4 * m, "\n");
        }
        else if (dt4) {
            dt4.innerText = "Please enter a number";
        }
    }
}
function setEventListeners() {
    var _a;
    (_a = document.getElementById('reload')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () { return location.reload(); });
}
document.addEventListener('DOMContentLoaded', setEventListeners);
window.drawTable = drawTable;
