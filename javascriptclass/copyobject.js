//Copy Object

let user = {
    names: "virat",
    age23: 30
}

let user2 = {};

// 1. Object Assign

Object.assign(user2, user);
console.log(user, user2, user==user2)


//2. Spread Opeator

user2 = {...user}
console.log(user, user2, user==user2)


//For ....in loop

for (let key in user){
    //name
    //age
    user2[key] = user[key]
}
console.log(user, user2, user==user2)


//Method in objects

const mylisa = {
    name: "piyushadfas",
    age: 79,
    marksss:[1,2,3,45],
    sayHi(){
        console.log("Hello",this.name);
    },
    address:{
        lin1:"some any road",
        city:"Purne",
        printcity(){
            console.log("Hellos", this.city);
        }
    }
}

mylisa.sayHi();
console.log(mylisa.marksss);
console.log(mylisa.address.city)
console.log(mylisa['address']['city'])


mylisa.address.printcity();
