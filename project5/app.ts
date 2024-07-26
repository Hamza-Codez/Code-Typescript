function Find() {
  const p1 = parseFloat(prompt('Enter the first value') ?? '0');
  const p2 = parseFloat(prompt('Enter the second value') ?? '0');
  const p3 = parseFloat(prompt('Enter the third value') ?? '0');
  
  const a = document.getElementById('box1');
  const b = document.getElementById('box2');
  const c = document.getElementById('box3');

  if (a) a.innerText = isNaN(p1) ? "" : p1.toString();
  if (b) b.innerText = isNaN(p2) ? "" : p2.toString();
  if (c) c.innerText = isNaN(p3) ? "" : p3.toString();

  const reslt = Math.max(p1, p2, p3);
  Draw(reslt); 
  return reslt;
}
function Draw(reslt: number) {
  const show = document.getElementById('hashbrown');
  if (show) {
    show.innerText = `The result says that the maximum among the three is ${reslt}`;
  }
}
(window as any).Find = Find;