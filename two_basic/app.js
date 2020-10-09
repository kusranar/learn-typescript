function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result : " + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
// let combineValue: Function;
var combineValue;
combineValue = add;
console.log(combineValue(2, 2));
printResult(add(1, 2));
addAndHandle(2, 5, printResult);
