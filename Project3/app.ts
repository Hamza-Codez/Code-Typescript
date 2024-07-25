function check():void{
  const inputElement = document.getElementById('number') as HTMLInputElement;
  const val:number = parseFloat(inputElement.value);
  const checker:number =  Math.sign(val);
  let outElement = document.getElementById('output');
  if (outElement) {
    if (isNaN(val)) {
      outElement.innerText = `${inputElement.value} is not a number`;
    } else if (checker === 1) {
      outElement.innerText = `${val} is a Positive number`;
    } else if (checker === -1) {
      outElement.innerText = `${val} is a Negative number`;
    } else if (checker === 0) {
      outElement.innerText = `${val} has no +/- sign`;
    }
  }
}
(window as any).check = check;

function genRandom(): void {
  const ranNum1 = Math.random();
  const ranNum2 = Math.random() * (100 - 1) + 1;
  const ranNum3 = Math.floor(Math.random() * (1000 - 1) + 1);
  const ranNum4 = Math.floor(Math.random() * (4000 - 1000) + 1000);

  const onclik1 = document.getElementById('num1');
  const onclik2 = document.getElementById('num2');
  const onclik3 = document.getElementById('num3');
  const onclik4 = document.getElementById('num4');

  if (onclik1) {
    onclik1.innerText = `Just a Random Number is ${ranNum1}`;
  }
  if (onclik2) {
    onclik2.innerText = `Random Number between 1 and 100 is ${ranNum2}`;
  }
  if (onclik3) {
    onclik3.innerText = `Integer in a range of 1-1000 is ${ranNum3}`;
  }
  if (onclik4) {
    onclik4.innerText = `4 digit Otp generated is ${ranNum4}`;
  }
}

(window as any).genRandom = genRandom;

export{};
