function palindrome(){
  const call = prompt('Enter the number');
  if (!call) {
    console.log("No input provided");
    return;
  }
  const meth1 = call.split("");
  const meth2 = (meth1.reverse()).join('');
  let isTrue = call === meth2;
  isTrue ? console.log("Yes it is a palindrome") : console.log("Not a palindrome");
}
palindrome()




