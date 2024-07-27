function Draw() {
  const bx1 = document.getElementById('box1') as HTMLInputElement;
  const bx2 = document.getElementById('box2') as HTMLInputElement;
  const bx3 = document.getElementById('box3') as HTMLInputElement;

  const Input1 = parseFloat(bx1.value);
  const Input2 = parseFloat(bx2.value);
  const Input3 = parseFloat(bx3.value);

  const max = Math.max(Input1, Input2, Input3);
  const giveMax = document.getElementById('hashbrown');
  
  if (giveMax) {
    giveMax.textContent = `The maximum among ${Input1}, ${Input2}, and ${Input3} is ${max}`;
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
