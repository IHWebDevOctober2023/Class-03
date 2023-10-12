const numbers = [2, 3, 43, 12, 50]

// Create a function that console logs the number and it tells us if its even or odd
// expected result:
/*
number 2 is even
number 3 is odd
number 43 is odd
number 12 is even
number 50 is even
*/

function isEvenOrOdd(){
    // Check all the numbers one by one
    numbers.forEach(function(eachNumber){
        // check if the number is even or odd
        if(eachNumber % 2 === 0){
            console.log(`Number ${eachNumber} is even`);
        }else{
            console.log(`Number ${eachNumber} is odd`);
        }
    })
}

isEvenOrOdd()