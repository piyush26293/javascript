// 4.Print a String in reverse Order
//  Input : "Hello"
//  Output : "olleH";


var str = "Hello";
var rev = "";
for(var i=str.length-1; i>=0; i--){
    rev=rev+str[i];
}
console.log(rev);


// 5.Print the maximum number 
//    for ex. 
//     Input : var numArr = [ 20,23,30,45,34] 
//     O/p : 45

var numArr = [20,23,30,45,34];
var maxmi=[0];
for(var i=1;i<numArr.length; i++){
    if(numArr[i]>maxmi){
        maxmi=numArr[i];
    }
}
console.log(maxmi);

// var total=0;
// for(var i=0; i<numArr.length;i++){
//     total =total+ numArr[i];
// }





// 6.Find the Factorial of given Number
//  Input : 5
//  Output : 120

//  Hint: 5 * 4 * 3 * 2 * 1 = 60

var fact = 5;
var temp = 1;


for (var i = 0; i < fact; i++){
    temp = temp * (fact - i);
}
console.log(temp);


// 7.Rever the Given number
//  Input : 123
//  Output :321


