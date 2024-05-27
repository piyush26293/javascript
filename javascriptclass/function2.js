// // parametrized function
// function square(num1){
//     var result = num1 * num1;
//     return result;
// }

// var res = square(20);
// console.log(res);




// function calculateTotalPrice(price, quantity){
//     var totalPrice = price * quantity;
//     return totalPrice;

// }

// var result2 = calculateTotalPrice(1000,2);
// console.log(result2);

function addAtLeastThree(a, b, c, ...numbers) { 
    var sum = a+b+c;
     for(var i=0; i<numbers.length; ++i) { 
    sum += numbers[i]; 
    } 
    return sum; 
    }
    console.log( addAtLeastThree(10, 20,"") ) ; 

