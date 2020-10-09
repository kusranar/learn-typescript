function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  console.log("Result : " + num);
}

function addAndHandle(n1: number, n2: number, cb: (n: number) => void){
    const result = n1 + n2;
    cb(result);
}

// let combineValue: Function;
let combineValue: (a: number, b: number) => number;

combineValue = add;
console.log(combineValue(2, 2));

printResult(add(1, 2));


addAndHandle(2, 5, printResult);