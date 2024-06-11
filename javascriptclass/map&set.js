 // Rest and Spread Operator - Three dots (...) 

 

//1. Spread Operator 

  

// Arrays 

const numbers = [1,2,3]; 

const newArray = [...numbers, 4,5] // [1,2,3,4,5] 

  const combined = [...numbers, ...newArray] // [1,2,3,4,5] 

   

  // Copy an array without reference 

   

  const num1 = [1,2,3]; 

  const num2 = [...num1] 

//2. Objects 

const obj1 = {x:1, y:2}; 

const obj2 = {z:3}; 

const obj3= { 

     ...obj1, 

     ...obj2 

} // {x:1, y:2, z:3} 

  

const obj3 = {...obj1}; // With Reference 

 // Rest Parameter - ... 

// It allows a function to accept an indefinite number of arguments as an array. 

// It collects all remaining arguments into a single array variable 

function sum(arr){ 

    return arr.reduce((acc,num)=> acc+num, 0) 

} 

function sum(num1, num2, ...numbers){ 

    console.log(num1, num2, numbers) 

    return numbers.reduce((acc,num)=> acc+num, 0) 

} 

console.log(sum(3,5,50,6,8,9,5, 10)) 

// console.log(sum([3,5,5,6,8,9])) 

 // Spread operator copies nested arary or nested object with reference 

  

const arr = ['a', 'b', 'c'];  

const num = [1,2,3, arr]; 

  

const num2 = [...num] 

// console.log(num2) 

// num2.push(7) 

// console.log(num) 

// console.log(num2) 

  

num2[3].push('d') 

console.log(num) 

  

console.log(num2) 

console.log(arr) 

  

const a = [{a:3}, {b:4}]; 

  

const b = [...a] 

b[0].z = 90 

  

console.log(a) 

console.log(b) 

  

const b = JSON.parse(JSON.stringify(a)) 

  

  

const fruits = new Map([ 

  ["apples", 500], 

  ["bananas", 300], 

  ["oranges", 200] 

]); 

console.log(fruits) 

const arr = [1,2,3] 

  

// Add values to map 

map.set("z", 5) 

map.set("b", 3) 

map.set("a", 10) 

map.set(arr, 100) 

  

// In map keys can be anything - array, function, object 

  

console.log(map) 

  

// Get values from map 

console.log(map.get(arr)) 

  

// Type of map 

console.log(typeof map) 

// Object                                Map 

// Not directly iterable               Directly iterable 

// Do not have a size property           Have a size property 

// Keys must be Strings (or Symbols)   Keys can be any datatype 

// Keys are not well ordered           Keys are ordered by insertion 

  

  

// Iterate over map 

map.forEach((value, key)=>{ 

    console.log(key, value) 

} 

) 

// Find size of map 

  

console.log(map.size) 

  

const fruits = new Map([ 

  ["apples", 500], 

  ["bananas", 300], 

  ["oranges", 200] 

]); 

  

console.log(fruits) 

  

// Delete an item from Map 

fruits.delete("apples") 

console.log(fruits) 

  

// clear() - removes all elements 

  

// fruits.clear() 

// console.log(fruits) 

  

// Map.has() 



  

console.log(fruits.has("bananas")) 

// Set 

// Its an array with unique values. 

// Create  

const letters = new Set(['a','b','c']); 

  

  

console.log(letters); 

  

// Add item to set 

letters.add('z') 

console.log(letters) 

  

// Doesn't allow duplicate values 

letters.add('a') 

console.log(letters) 

  

// Print 

  

for (const x of letters) { 

  console.log(x) 

} 

// has() 

console.log(letters.has('a')) 

  

// forEach 

letters.forEach (function(value) { 

  console.log(value) 

}) 

  

  

// delete() 

letters.delete('a'); 

console.log(letters) 

  

letters.add([1,2,3]) 

console.log(letters) 

letters.add([1,2,3]) 

console.log(letters) 

  

  

const a = [1,2,3]; 

letters.add(a) 

console.log(letters) 

letters.add(a) 

console.log(letters) 

  

  

// // clear() 

// letters.clear() 

// console.log(letters) 

  

// size 

console.log(letters.size) 

  

const numbers = [1,2,3,2,4,3]; 

const values = new Set(numbers); 

console.log(Array.from(values)) 

  

// Removes duplicate; 

const numbers = [1,2,3,2,4,3]; 

  

  

const map = { 

    "1": true, 

    "2": true, 

    "3": true, 

    "4": true 

} 

  

[1,2,3,4] 