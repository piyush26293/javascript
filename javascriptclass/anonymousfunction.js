

var wish = function(){
    console.log("Good morning");
}

wish();



// we can also pass another function as arguments.

function myFn(f1){
    console.log("my functions");
    f1();

}
//this is call callback function
myFn(function(){
    console.log("Good Morning");
})

console.log("________________________________________________");

function square(nu1, print){
    var res =nu1*nu1;
    console.log("Result is ",res);
    print();
}

square(10,function(){
    console.log("Hi piyush");
})

