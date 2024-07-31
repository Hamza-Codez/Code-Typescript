"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function drawTable() {
    var _a = ['ib1', 'ib2', 'ib3', 'ib4'].map(function (id) { return parseFloat(document.getElementById(id).value); }), ib1 = _a[0], ib2 = _a[1], ib3 = _a[2], ib4 = _a[3];
    var _b = ['box1', 'box2', 'box3', 'box4'].map(function (id) { return document.getElementById(id); }), dt1 = _b[0], dt2 = _b[1], dt3 = _b[2], dt4 = _b[3];
    var elements = [dt1, dt2, dt3, dt4];
    var inputs = [ib1, ib2, ib3, ib4];
    var texts = ["Table 1\n", "Table 2\n", "Table 3\n", "Table 4\n"];
    elements.forEach(function (element, index) {
        if (element) {
            element.innerText = texts[index];
        }
    });
    var _loop_1 = function (m) {
        elements.forEach(function (element, index) {
            var input = inputs[index];
            if (element) {
                if (!isNaN(input)) {
                    element.innerText += "".concat(input, "*").concat(m, " = ").concat(input * m, "\n");
                }
                else {
                    element.innerText = "".concat(input, " is not a Number");
                }
            }
        });
    };
    for (var m = 1; m <= 10; m++) {
        _loop_1(m);
    }
}
function setEventListeners() {
    var _a;
    (_a = document.getElementById('reload')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () { return location.reload(); });
}
document.addEventListener('DOMContentLoaded', setEventListeners);
window.drawTable = drawTable;
