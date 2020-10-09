const add = (n1: number, n2: number) => n1 + n2;

const printOutput: (result: number | string) => void = (result) => console.log(result);

printOutput(add(5, 2));

const addNumbers = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0)
};

console.log(addNumbers(5, 4, 3, 2, 1, 0));