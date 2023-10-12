let car = {
    colors: ["red", "blue", "white"],
    model: "Model 3",
    make: "Tesla",
    owner: {
        name: "Elon",
        role: "Rich guy that does crazy stuff",
        address: "Malibu"
    },

    startEngine: function () {
        console.log("BROOOOOOM, oh no brooom, it's electric");
    }
}

// we can modify the properties of an object
car.make = "Nissan"
car.model = "Model 2"

// LOOPS INSIDE OBJECTS:

for (const key in car) {
    // the loop is going to iterate over the keys of the object
    console.log(key); // colors, model, make, owner, startEngine
    // to access the values of the object we need to use the key
    console.log(car[key]); // ["red", "blue", "white"], "Model 3", "Tesla", {name: "Elon", role: "Rich guy that does crazy stuff", address: "Malibu"}, function () { ....
}

const student = {
    firstName: 'Ana'
};

// When we use this notation for properties that don't exist, we are creating them
student.age = 25;
student.bootcamp = "data";
console.log(student);  // { firstName: 'Ana', age: 25, bootcamp: 'data' }
