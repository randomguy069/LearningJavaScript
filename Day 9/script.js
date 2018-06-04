//Read about prototype chains.
//Prototype property.

//Function constructor

var john = {
    
    name: 'John',
    yearOfBirth: 1992,
    job: 'Teacher'
};


var Person = function(name, yearOfBirth, job){//person constructor
    
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

};

Person.prototype.calculateAge = function(){
        console.log(2018-this.yearOfBirth);
    }; //inherited the yearofbirth from Person. Example of inheritance

Person.prototype.lastname = 'Smith';
var jon = new Person('John',1992,'Teacher'); // while using new an empty object is created

var jane = new Person('Jane',1994,'Developer');

var marc = new Person('Marc',1995,'Gardener');

jon.calculateAge();
jane.calculateAge();
marc.calculateAge();

console.log(jon.lastname);
console.log(jane.lastname);
console.log(marc.lastname);