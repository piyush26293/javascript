

// 16. Concatenate Two Arrays: Write a program to concatenate two arrays and print the resulting array.

// let array = [1, 2, 3, 4, 5];
// let array1 = [11,12,13,14];
// let arr = array.concat(array1);
// console.log(typeof(arr));
// console.log(arr);



// 17. Concatenate Multiple Arrays: Write a program to concatenate three arrays and print the resulting array.

// let array = [1, 2, 3, 4, 5];
// let array1 = [11, 12, 13, 14];
// let array2 = [6, 7, 8, 9, 10];
// let arr = array.concat(array1.concat(array2));
// // let arr = array.concat(array1,array2);
// console.log(arr);

// 18. Concatenate with Empty Array: Write a program to concatenate an array with an empty array and print the result.

// let array = [1, 2, 3, 4, 5];
// let array1 = [];
// let arr = array.concat(array1);
// console.log(arr);



// 19. Merge Arrays with Different Types: Write a program to concatenate an array of numbers with an array of strings and print the resulting array.

// let array = [1, 2, 3, 4, 5];
// let array1 = "array";
// let arr = array.concat(array1,[11,12,13,14]);
// console.log(arr);

//  20. Nested Concatenation: Write a program to demonstrate nested concatenation of arrays (concatenate two arrays and then concatenate the result with another array).
//  /*
function explode(x){
    let [a,b] = x;
    
    if(typeof a == "number" && typeof b == "number")
     return new Array(a+b).fill(x);
    else if(typeof a == "number") return new Array(a).fill(x);
    else if(typeof b == "number") return new Array(b).fill(x);
    
    return 'Void!';
  }

console.log(explode([9,12]))
// */


// [9, 3] - 12 


// let arr = ['9',3]


// console.log(typeof arr[0] == 'string')
// console.log(typeof arr[1] == 'number')



// //second solution of explode (destructuring, new Array, fill(static method), typeof(9) == 'number')

// function explode(x){
//     let score = 0;
//     let array = [];
//     if (typeof x[0] !== 'number' && typeof x[1] !== 'number') return 'Void!';
//     if (typeof x[0] !== 'number' && typeof x[1] === 'number') score = x[1] ;
//     if (typeof x[0] === 'number' && typeof x[1] !== 'number') score = x[0];
//     if (typeof x[0] === 'number' && typeof x[1] === 'number') score = x[0] + x[1];
//     for (var i = 0; i < score; i++) {
//       array.push(x);
//     }
//     return array;
//   }



// //   third one(explode)
//   const explode=([x,y])=>x+0!=x&&y+0!=y?"Void!":Array((+x||0)+(+y||0)).fill([x,y])
//   console.log(explode);


// fourth (explode)

// function explode(x){
//     const filteredArr = x.filter( foo => typeof foo === 'number')
//     return filteredArr.length ? Array(filteredArr.reduce(( a, b ) => a + b, 0)).fill(x) : 'Void!'
//   }

// console.log(Array(12))
// let a = [2]
// console.log(a.length ? 'length is greter than 1': 'length is zero')















