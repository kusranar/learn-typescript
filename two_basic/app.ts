let userInput: unknown; // same with any, but its bit more restrictive
let username: string;

userInput = 5;
userInput = 'Max';
if(typeof userInput === 'string'){
    userInput = username;
}


function generateError(message: string, code: number): never{
    throw {message, errorCode: code};
}

generateError('An error occurred', 500);