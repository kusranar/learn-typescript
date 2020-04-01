const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(a: number, b: number) {
  return a + b;
}

button.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value));
});
