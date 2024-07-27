function drawTable(){
  const inputbar1 = document.getElementById('ib1') as HTMLInputElement;
  const inputbar2 = document.getElementById('ib2') as HTMLInputElement;
  const inputbar3 = document.getElementById('ib3') as HTMLInputElement;
  const inputbar4 = document.getElementById('ib4') as HTMLInputElement;

  const ib1 = parseFloat(inputbar1.value);
  const ib2 = parseFloat(inputbar2.value);
  const ib3 = parseFloat(inputbar3.value);
  const ib4 = parseFloat(inputbar4.value);

  let dt1 = document.getElementById('box1');
  let dt2 = document.getElementById('box2');
  let dt3 = document.getElementById('box3');
  let dt4 = document.getElementById('box4');
  
  if(dt1) dt1.innerText = "Table 1\n"
  if(dt2) dt2.innerText = "Table 2\n"
  if(dt3) dt3.innerText = "Table 3\n"
  if(dt4) dt4.innerText = "Table 4\n"

      for (let m = 1; m <= 10; m++) {
      if (dt1 && !isNaN(ib1)) {
        dt1.innerText += `${ib1} * ${m} = ${ib1 * m}\n`;
      } else if (dt1) {
        dt1.innerText = `Please enter a number`;
      }
      if (dt2 && !isNaN(ib2)) {
        dt2.innerText += `${ib2} * ${m} = ${ib2 * m}\n`;
      } else if (dt2) {
        dt2.innerText = `Please enter a number`;
      }
      if (dt3 && !isNaN(ib3)) {
        dt3.innerText += `${ib3} * ${m} = ${ib3 * m}\n`;
      } else if (dt3) {
        dt3.innerText = `Please enter a number`;
      }
      if (dt4 && !isNaN(ib4)) {
        dt4.innerText += `${ib4} * ${m} = ${ib4 * m}\n`;
      } else if (dt4) {
        dt4.innerText = `Please enter a number`;
      }
    } 
  }
  function setEventListeners() {
    document.getElementById('reload')?.addEventListener('click', () => location.reload());
  }
  document.addEventListener('DOMContentLoaded', setEventListeners);
  (window as any).drawTable = drawTable;
  export {}
