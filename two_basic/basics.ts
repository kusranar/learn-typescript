function add(n1: number, n2: number, showResult: boolean, phrase: string){
    let result = n1 + n2;
    if(showResult){
        console.log(phrase + result);
    } else {
        return result;
    }
}

const numb1 = 2.8;
const numb2 = 5;
const printResult = true;
const phrase = 'Result is : '

add(numb1, numb2, printResult, phrase);