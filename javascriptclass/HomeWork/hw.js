let person1={
    name:"vaishnavi",
    native:"pune",
    education:{
        graduation:"computer science",
        yop:2022,
        college:"SGBAU",
    },
    subjects:["sql","java","javascript","j2ee","Manual Testing"],
     hobies:["dancing","listerning music","Drawing"],
    strength:["I am hardworking and asserative person"]
}


let person = Object.freeze(person1);      
// console.log(person == person1)    //reference alag
// person.education.yop = "srt";      // person1.proto = person
// console.log(Object.entries(person), person1 )
// person.name = "piyush";
// person.native = "bhopal";
// person.education.graduation = "Paneer University";
// person.education.yop = 2027;
// person.education.college = "BU";
// person.subjects[0] = ["a"];
// hobies = ["sdf","sadf","sadf","sadf"];
// strength = ["I am quick learner"];

console.log(person1);

console.log(person);