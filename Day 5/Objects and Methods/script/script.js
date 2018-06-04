//Objects and Methods

var person = {
    name: "John",
    surname: "Doe",
    yearOfBirth: 1995,
    job: "Teacher",
    isMarried: false,
    family: ['Jane','Armando','Jennifer'],
    calculateAge: function (){
      
        return (2017 - this.yearOfBirth); //this refers to the object person. 
    }
};

console.log(person.family[2]);
console.log(person.calculateAge(1962));

var age = person.calculateAge();
person.age = age;
console.log(person);

//Making some changes in inital object

var person = {
    name: "John",
    surname: "Doe",
    yearOfBirth: 1995,
    job: "Teacher",
    isMarried: false,
    family: ['Jane','Armando','Jennifer'],
    calculateAge: function (){
      
        this.age = 2018 - this.yearOfBirth ; 
    }
};
person.calculateAge();
console.log(person);