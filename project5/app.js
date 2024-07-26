function Find() {
    var _a, _b, _c;
    var p1 = parseFloat((_a = prompt('Enter the first value')) !== null && _a !== void 0 ? _a : '0');
    var p2 = parseFloat((_b = prompt('Enter the second value')) !== null && _b !== void 0 ? _b : '0');
    var p3 = parseFloat((_c = prompt('Enter the third value')) !== null && _c !== void 0 ? _c : '0');
    var a = document.getElementById('box1');
    var b = document.getElementById('box2');
    var c = document.getElementById('box3');
    if (a)
        a.innerText = isNaN(p1) ? "" : p1.toString();
    if (b)
        b.innerText = isNaN(p2) ? "" : p2.toString();
    if (c)
        c.innerText = isNaN(p3) ? "" : p3.toString();
    var reslt = Math.max(p1, p2, p3);
    Draw(reslt);
    return reslt;
}
function Draw(reslt) {
    var show = document.getElementById('hashbrown');
    if (show) {
        show.innerText = "The result says that the maximum among the three is ".concat(reslt);
    }
}
window.Find = Find;
