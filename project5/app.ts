function Draw() {
  const [input1,input2,input3] = ['box1','box2','box3'].map(id=>parseFloat((document.getElementById(id) as HTMLInputElement).value))

  const max = Math.max(input1, input2, input3);
  const giveMax = document.getElementById('hashbrown');
  
  if (giveMax) {
    giveMax.textContent = `The maximum among ${input1}, ${input2}, and ${input3} is ${max}`;
  }
}

function setEListeners() {
  const clearButton = document.getElementById('clear');
  if (clearButton) {
    clearButton.addEventListener('click', () => {
      location.reload();
    });
  }
}

document.addEventListener('DOMContentLoaded', setEListeners);

(window as any).Draw = Draw;
