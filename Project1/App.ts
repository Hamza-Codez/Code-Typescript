function convert():void {
  let kmsInput = document.getElementById('data') as HTMLInputElement;
  let kms:number = parseFloat(kmsInput.value);
  const factor:number = 0.621371;
  let miles:number = kms*factor;
  const resOut = document.getElementById('result');
  if (resOut) {
      resOut.innerText = `${miles.toFixed(2)} miles`;
  }
}
(window as any).convert = convert;
export{}




















