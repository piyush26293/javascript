document.write("function");


//first function example
function wish(){
    var message = "Good Morning";
    console.log(message);
}

console.log("first example");
wish();

//second function  example
// To print even number b/w 11 to 20
function printEvenNumber(){
    for(var i =11; i<=20;i++){
        if(i%2!=0){
            continue;
            // console.log(i);
        }
        console.log(i);
    }
}

console.log("second example");
printEvenNumber();

//Third funtion example
// to print even odd number check

function isEvenOrNot(){
    var x=21;
    if(x%2==0){
        console.log("Even Number");
    }else{
        console.log("Odd Number");
    }
}

console.log("Third example");
isEvenOrNot();






function simple(x){
    console.log(x)
}
console.log("Fourth example");
simple(89);



function isEven(num1){
    if (num1%2==0){
        console.log("even number");
    }else{
        console.log("odd number");
    }
}

console.log("Fiveth example");
isEven(30);
isEven(29);
var y = isEven(prompt());
console.log(y);










