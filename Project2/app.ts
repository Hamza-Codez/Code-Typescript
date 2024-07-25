function convert():void{
  const inputCelcius = document.getElementById('data') as HTMLInputElement;
  const celcius:number = parseFloat(inputCelcius.value);
  const Fahrene:number = celcius * 1.8 + 32;
  const outElement = document.getElementById('getResult');
  if (outElement) {
    outElement.innerText = `${Fahrene.toFixed(2)} Fahrenheit`;
  }
}
(window as any).convert = convert;
export{}