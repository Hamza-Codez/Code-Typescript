function Draw() {
    var bx1 = document.getElementById('box1');
    var bx2 = document.getElementById('box2');
    var bx3 = document.getElementById('box3');
    var Input1 = parseFloat(bx1.value);
    var Input2 = parseFloat(bx2.value);
    var Input3 = parseFloat(bx3.value);
    var max = Math.max(Input1, Input2, Input3);
    var giveMax = document.getElementById('hashbrown');
    if (giveMax) {
        giveMax.textContent = "The maximum among ".concat(Input1, ", ").concat(Input2, ", and ").concat(Input3, " is ").concat(max);
    }
}
// Set up event listeners when the document is ready
function setupEventListeners() {
    var clearButton = document.getElementById('clear');
    if (clearButton) {
        clearButton.addEventListener('click', function () {
            location.reload();
        });
    }
}
// Run setupEventListeners when the document is fully loaded
document.addEventListener('DOMContentLoaded', setupEventListeners);
// Expose the Draw function to the global scope
window.Draw = Draw;
