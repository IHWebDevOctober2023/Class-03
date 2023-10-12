// FUNCTION DECLARATION
function sumNumbers(numberOne, numberTwo){ // numberOne and numberTwo are parameters
    // The code we want to execute 
    if(typeof numberOne != "number" || typeof numberTwo != "number" ){
        console.warn("Please, just numbers");
        return // the return will stop the function execution
    } 
    console.log(numberOne + numberTwo);
}

// Function call
sumNumbers(3, 4) // 3 and 4 are arguments. The console.log will print 7

// What's a return?

function returnSomething(userName, email){
    return `Hello, your userName is ${userName} and the email is ${email} right?`
}

const answer = returnSomething("John", "john@whatever.com") // this function is returning a string

console.log(answer) // Hello, your userName is John and the email is john@whatever right?