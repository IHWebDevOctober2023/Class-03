// ------- ARRAYS ------- //

const arrayOfNumbers = [1,2,32,4,323252]

// ACCESS TO AN ELEMENT

arrayOfNumbers[arrayOfNumbers.length - 1]; // 323252

/* 
splice method is used to add or remove elements from an array
array.splice(start, deleteCount, item to add)
*/
arrayOfNumbers.splice(2, 1, 4000)


// LOOPS, Create an array and loop through it

const array = [1,2,3,4,5,6,7,8,9,10]
array.reverse() // [10,9,8,7,6,5,4,3,2,1]
array.forEach(function(eachNumber){
    // here we have access to each element of the array with the variable eachNumber (parameter)
})


// Create an array from a string

const newString = "Hello I'm a new string"

const arrayOfNewString = newString.split(" ") // ["Hello", "I'm", "a", "new", "string"]

arrayOfNewString.push("yeaaah!") // ["Hello", "I'm", "a", "new", "string", "yeaaah!"]

arrayOfNewString.splice(0,1,"Hello,") // ["Hello,", "I'm", "a", "new", "string", "yeaaah!"]

const newNewString = arrayOfNewString.join(" ") // "Hello, I'm a new string yeaaah!"

const arrayOfStudents = ["Edna", "Hector", "Juan"]

const arrayOfNewStudents = ["Clara", "Ramon", "Cristina"]

const updatedStudents = arrayOfStudents.concat(arrayOfNewStudents) // ["Edna", "Hector", "Juan", "Clara", "Ramon", "Cristina"]
