function getfact() {
  let inputElement = document.getElementById('givnNum') as HTMLInputElement;
  let givenNum = parseFloat(inputElement.value);
  let check = (document.getElementById('ShowVal'));
  let fact:number= 1;
  if (check) {
    if(givenNum === 0){
      check.innerText = `The factorial of ${givenNum} is 1`
    }else if(givenNum < 0 ){
      check.innerText = `The factorial of ${givenNum} is not possible because it is a Negative number`
    }else{
      for(let i = 1; i <= givenNum; i++){
        fact = fact * i;
      }
      check.innerText = `The factorial of the ${givenNum} is ${fact}`;
    }
  }
}
(window as any).getfact = getfact;
