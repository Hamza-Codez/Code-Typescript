function giveCheck():void{
  const inputElement = document.getElementById('num') as HTMLInputElement;
  const gvnNum = parseFloat(inputElement.value);
  const cliked = document.getElementById('check');
  if (cliked){
    if (gvnNum % 2 === 0){
      cliked.innerText = `${gvnNum} is an Even Number`
    }
    if (gvnNum % 2 !== 0){
      cliked.innerText = `${gvnNum} is an Odd Number`
    }
  }
}
(window as any).giveCheck = giveCheck;
export{};