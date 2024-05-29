// Homework

// 1) Create an object named "person" with properties "name", "age", and "city". Assign values to these properties and then log the entire object to the console.

let person = {
    name:"piyush",
    age:50,
    city:"Bhopal"
}


let person1 = Object.create(person);
// let person1 = Object.assign(person); 
// let person1 = Object.entries(person);

    person1.name = "neelu";
    person1.age= 25;
    person1.city="kanpur";
// console.log(person1);
// console.log(person1['age']);
// console.log(person1['city']);
// console.log(person1['name']);

console.log(person1);
console.log(person);



// 2) Define a function called "printInfo" that takes an object as a parameter and prints out each key-value pair in the format "key: value".

function printInfo(obj) {
    for (const key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}

let boy = {
    fname: "astha gill",
    sname: "salkdf",
    nou :39
}

printInfo(boy);


// 3) Write a program that checks if a given property exists in an object. The program should take an object and a property name as input and return true if the property exists in the object, otherwise return false.

function hasProperty(obj, propName) {
    return propName in obj;
}

// Example usage
const info = {
    name: "Alice",
    age: 30,
    city: "New York"
};

console.log(hasProperty(info, "name"));     
console.log(hasProperty(info, "country"));  


// 4) Create a method called "changeCity" for the "person" object created in question 1. This method should take a new city name as input and update the "city" property of the person object.

// 5) Write a function called "getAverageAge" that takes an array of person objects (where each object has an "age" property) as input and returns the average age of all persons in the array.