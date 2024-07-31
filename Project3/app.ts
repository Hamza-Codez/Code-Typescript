function check():void{

  const inputElement = parseFloat((document.getElementById('number') as HTMLInputElement).value);
  const checker:number =  Math.sign(inputElement);
  let outElement = document.getElementById('output');
  if (outElement) {


    if (isNaN(inputElement)) {
      outElement.innerText = `${inputElement} is not a number`;
    } else {
      const signText = checker === 1 ? 'Positive' : checker === -1 ? 'Negative' : 'has no +/- sign';
      outElement.innerText = `${inputElement} is a ${signText} number`;
    }
  }
}
(window as any).check = check;

function genRandom(): void {
  const [ranNum1, ranNum2, ranNum3, ranNum4] = [Math.random(), Math.random() * 99 + 1, Math.floor(Math.random() * 999) + 1, Math.floor(Math.random() * 3000) + 1000];

  const [oc1, oc2, oc3, oc4] = ['num1', 'num2', 'num3', 'num4'].map(id => document.getElementById(id));

  const onclicks = [oc1, oc2, oc3, oc4];
  const messages = [
    `Just a Random Number is ${ranNum1}`,
    `Random Number between 1 and 100 is ${ranNum2}`,
    `Integer in a range of 1-1000 is ${ranNum3}`,
    `4 digit OTP generated is ${ranNum4}`
  ];
 onclicks.forEach((element,index)=>{
  if(element){
   element.innerText = messages[index]
  }
 });
}

(window as any).genRandom = genRandom;

export {};
