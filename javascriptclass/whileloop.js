// var num = 1;
// while(num <=10){
//     console.log("Good morning");
//     num++;
// }


// var num =1;
// while(num <=10){
//     console.log(num+"\n");
//     num++;
// }

var num = 11;
while (num <=50){
    // if(num%13===0){
    //     console.log("13 --"+num);
    // }
    // if(num%15===0){
    //     console.log("15 --"+num);
    // }

    if(num%13===0 || num%15===0){
        console.log(num);
        num++;
    }
    num++;
}