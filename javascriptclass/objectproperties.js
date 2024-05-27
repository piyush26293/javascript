// Object.freeze, Object.seal

// Object.freeze
 // Can't change value of a field
 // Can't delete a field
 // Can't add a field.

 const user = {
    name :"Rohit",
    surname: "Sharma",
    age: 20,
    isAdult: true,
}
Object.freeze(user);
user.age = 30;
user.city = "Pune"
delete user.age
console.log(user)
// Object.seal
 // Can't delete a field
 // Can't add a field.

const user1 = {
    name :"Rohit",
    surname: "Sharma",
    age: 20,
    isAdult: true,
}
Object.seal(user1);
user1.age = 30;
user1.city = "Pune"
delete user1.age
console.log(user1)


// In case of freeze you can't update the value of existing property. But in case of seal you can update the existing field value.