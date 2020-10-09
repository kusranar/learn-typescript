var add = function (n1, n2) { return n1 + n2; };
var printOutput = function (result) { return console.log(result); };
printOutput(add(5, 2));
var addNumbers = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (curResult, curValue) {
        return curResult + curValue;
    }, 0);
};
console.log(addNumbers(5, 4, 3, 2, 1, 0));
