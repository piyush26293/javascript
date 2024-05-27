//Object, group of primitives wrapped in {}
// object has a key value pair

// Object Literals
const person = {};

console.log(typeof person,"one");

const persons = {
    name:"sh",
    age: 90,
    isAdmin: true,
    'my name': "piyush"
};



//Object constructor
const user = new Object();
console.log(typeof user,"two");



const age = 50;
console.log(age);

const myVar= 'age';

console.log(persons.age);
console.log(persons["age"]);
console.log(persons["name"]);
console.log(persons[myVar]);
console.log(persons.isAdmin);
console.log(persons["my name"]);
// console.log(persons.my name)  = this won't work

// accessing unknown properties will print undefined
//How to delete a property of object.
console.log(persons);
delete persons.isAdmin;
console.log(persons);
console.log(persons.isAdmin);

//How to add value in objects
//this is called property name shorthand

const name ="Rohit";
const agee = 900;
const myUser = {
    name,
    age
}
console.log(myUser);

// Proprety Existense
console.log(persons.name ===undefined);
console.log('myHero' in persons);
console.log(age in persons);


//Loop in js

const marks = [23,34,56,76,34];
for(let i=0; i<marks.length; i++){
    console.log(marks[i]);
}

//for .... in loop
// for(let key in persons){
//     // console.log(key, persons[key]);
//     console.log(key, persons['age']);
// }

const markss=[23,34,65,98];
for (let i in marks){
    console.log(i, markss[i])
}

for (let i of marks){
    console.log(marks);
}






