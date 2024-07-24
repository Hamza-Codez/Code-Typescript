const convt = (): void => {
  let inputElement = document.querySelector<HTMLInputElement>('#data');
  if (inputElement) {
    let kms: number = parseFloat(inputElement.value || '0');
    if (isNaN(kms)) {
      kms = 0;
    }
    const kmToMiles: number = 0.621371;
    let miles: number = kms * kmToMiles;
    console.log(miles);

    let resultElement = document.getElementById('res');
    if (resultElement) {
      resultElement.innerText = `${miles} miles`;
    }
  }
};

(window as any).convt = convt;

export {};
