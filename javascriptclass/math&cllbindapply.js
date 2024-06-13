// Callback function. 

  

// Function passed to another function as parameter. 

  

[1,2,3].filter((item)=> { 

    return item%2 

}) 

function callbackFunction(){ 

    console.log('I am called back') 

} 

function myFunction(callback){ 

    callback(); 

} 

  

myFunction(callbackFunction) 

  

  

  

// call, apply, bind 

 function greet(greeting, punctuation){ 

    console.log(`${greeting} ${this.name}${punctuation}`) 

}  

// greet() 

const user = { 

    name: "Rohit" 

} 

 

// Call 

// Syntax: function.call(thisArg, arg1, arg2, ...) 

// Purpose: The call method is used to call a function with a given this value and arguments provided individually. 

greet.call(user, "Hello", "?") 

  

  

// Apply 

// Syntax: function.apply(thisArg, [argsArray]) 

// Purpose: The apply method is similar to call, but it takes an array (or an array-like object) of arguments instead of listing them one by one. 

greet.apply(user, ["Hello", "?"]) 

// bind 

// Purpose: The bind method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called. 

// Syntax: const boundFunction = function.bind(thisArg, arg1, arg2, ...) 

  

const boundGreet = greet.bind(user, "Hello", "?") 

boundGreet(); 

  

  

// Date 

  

let time = new Date(); 

console.log(time) 

 time = new Date("2015-03-25"); 

console.log(time) 

 time = new Date("2015-03-25T10:00:00.000Z"); 

console.log(time) 

 // Jan 1, 1970 

time = new Date(100000000000); 

console.log(time) 

 let date = new Date('2024-06-13T02:39:17.756Z'); 

console.log(date) 

 console.log(date.getDate()); // 13 

console.log(date.getDay()); // Returns the day of the week (from 0-6) 

console.log(date.getFullYear()); // 2024 

console.log(date.getHours()); //Returns the hour (from 0-23) 2 

console.log(date.getMilliseconds()); // Returns the milliseconds (from 0-999) - 756 

console.log(date.getMinutes()); // Returns the minutes (from 0-59) 

console.log(date.getMonth()); // Returns the month (from 0-11) 

  

  

  

// Math 

  

// Math.round() 

// Returns the nearest integer 

console.log(Math.round(4.6)); 

console.log(Math.round(4.5)); 

console.log(Math.round(4.4)); 

  

// Math.ceil() 

// returns the value of x rounded `up` to its nearest integer: 

console.log(Math.ceil(4.6)); 

console.log(Math.ceil(4.5)); 

console.log(Math.ceil(4.1)); 

  

  

// Math.floor() 

// returns the value of x rounded `down` to its nearest integer: 

console.log(Math.floor(4.6)); 

console.log(Math.floor(4.5)); 

console.log(Math.floor(4.4)); 

 

// Math.trunc(x) 

// returns the integer part of x: 

console.log(Math.trunc(4.6)); 

console.log(Math.trunc(14.5)); 

console.log(Math.trunc(9.4)); 

  

// Math.pow(x, y) 

//  returns the value of x to the power of y 

console.log(Math.pow(2,3)) 

  

console.log(Math.sqrt(64)) 

  

// Math.min() 

const a = [0, 150, 30, 20, -8, -200] 

console.log(Math.min(...a)) 

  

console.log(Math.max(0, 150, 30, 20, -8, -200)) 

  

 // Math.random() 

//  returns a random number between 0 (inclusive), and 1 (exclusive) 

console.log(Math.random()) 

  

  

  

  

 