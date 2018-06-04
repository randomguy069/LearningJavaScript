//Creating objects

//Object creation method 1
var john = {
    name: "John",
    surname: "Doe",
    job: "teacher",
    isMarried : false
    
};
console.log(john.surname); //gives the surname
console.log(john['job']); //gives the job

var xy = 'job';
console.log(john[xy]); //gives the job too

john.surname = "Ronaldo";
john.job = "Pilot";
console.log(john['surname']); //changing the values
console.log(john[xy]);

//Object creation method 2
var jane = new Object();
jane.name = "Jane";
jane.surname= "Doe";
jane.job = "Developer";
jane.isMarried = "False";
jane.yearofBirth = 1986;
console.log(jane);

console.log(jane.name);