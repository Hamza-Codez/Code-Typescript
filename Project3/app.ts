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
export{}