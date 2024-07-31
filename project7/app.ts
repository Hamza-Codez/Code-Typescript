function drawTable(){

  const [ib1, ib2, ib3, ib4] = ['ib1','ib2','ib3','ib4'].map(id => parseFloat((document.getElementById(id) as HTMLInputElement).value))
  const [dt1,dt2,dt3,dt4] = ['box1','box2','box3','box4'].map(id => document.getElementById(id));

  const elements = [dt1, dt2, dt3, dt4];
  const inputs = [ib1, ib2, ib3, ib4];
  const texts = ["Table 1\n", "Table 2\n", "Table 3\n", "Table 4\n"];

  elements.forEach((element, index)=>{
   if(element){
   element.innerText = texts[index];
   }
  });

  for(let m = 1; m <= 10; m++){
    elements.forEach((element, index)=>{
      const input = inputs[index];
      if(element){
        if(!isNaN(input)){
          element.innerText += `${input}*${m} = ${input*m}\n`;
        }else{
          element.innerText = `${input} is not a Number`
        }
      }
    });
  }
}
  function setEventListeners() {
    document.getElementById('reload')?.addEventListener('click', () => location.reload());
  }
  document.addEventListener('DOMContentLoaded', setEventListeners);
  (window as any).drawTable = drawTable;
  export {}
