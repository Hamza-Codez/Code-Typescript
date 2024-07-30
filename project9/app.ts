function chk() {
const [n1, n2, n3] = ['n1','n2','n3'].map(id => parseFloat((document.getElementById(id) as HTMLInputElement).value));
let[num1, num2, num3] = [n1, n2, n3].map(number => number.toString().slice(-1));
  const out = document.getElementById('disply');
  const sign = document.getElementById('sign');

  if(out && sign){
    const isSame = num1===num2 && num2===num3;
    out.innerText = isSame ? `${n1}, ${n2} and ${n3} are same at the end digit` : `${n1}, ${n2} and ${n3} are not same at the end digit`;
    sign.style.backgroundColor = isSame ? 'rgb(90, 197, 90)' : 'rgb(230, 74, 63)';
    sign.innerText = isSame ? "Positive" : "Negative";
  }
}
(window as any).chk = chk;
export{}
