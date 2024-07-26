function giveCheck():void{
  const inputElement = document.getElementById('num') as HTMLInputElement;
  const gvnNum = parseFloat(inputElement.value);
  const cliked = document.getElementById('check');
  const res = gvnNum % 2 == 0 ? "Even": "Odd";
  if (cliked){
 
    cliked.innerText = `${gvnNum} is an ${res} Number`;
 
    // if (gvnNum % 2 === 0){
    //   cliked.innerText = `${gvnNum} is an Even Number`
    // }
    // if (gvnNum % 2 !== 0){
    //   cliked.innerText = `${gvnNum} is an Odd Number`
    // }
  }
}
(window as any).giveCheck = giveCheck;

function PrimeCheck(){
  const inputElement = document.getElementById('num2') as HTMLInputElement;
  const givnNum = parseFloat(inputElement.value);
  const resultShow = document.getElementById('check2');
  if (resultShow){
    if(givnNum === 1){
      resultShow.innerText =`${givnNum} is Neither Prime Nor Composite Number`
    }else if(givnNum < 0){
      resultShow.innerText =`${givnNum} is not a prime number`
    }else if(givnNum === 2){
      resultShow.innerText =`${givnNum} is Prime number`
    }else{
      for(let i = 2; i < givnNum; i++){
        if(givnNum % i === 0){
          resultShow.innerText =`${givnNum} is not a prime number`
          break;
        }else{
          resultShow.innerText =`${givnNum} is a prime number`
        }
      }
    }
  }
}
(window as any).PrimeCheck = PrimeCheck;
export{}
