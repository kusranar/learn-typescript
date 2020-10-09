type Combineable = number | string;

function add(
  input1: Combineable,
  input2: Combineable,
  // input2: number | string, // union type
  conversionResult: 'as-number' | 'as-text' // literal type
) {
  // union type
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    conversionResult === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAges = add(24, 20, "as-number");
console.log(combineAges);
const combineAgesString = add("24", "20", "as-text");
console.log(combineAgesString);
