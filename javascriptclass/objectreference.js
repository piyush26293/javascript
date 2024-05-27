// object reference and copying

const person1 ={
    name: "Piyush",
    age: 30
};

const age1 = 40;
const age2= age1;
console.log(age2);


const person2 = person1;
person2.age =90;

console.log(person1,person2, person1==person2);


age2 = 33;
console.log(age1, age2);




