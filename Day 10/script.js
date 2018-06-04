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

//hasOwnProperty
//instanceof

//Creating objects
//Object.create

var personProto = {
    
    calculateAge: function(){
    console.log(2018-this.yearOfBirth);
}
};

var jooon = Object.create(personProto);
jooon.name= 'Jooon';
jooon.yearOfBirth = 1957;
jooon.job = 'Dancer';

var jaaane = Object.create(personProto,{
    name: {value: 'Jaaane'},
    yearOfBirth: {value: 1982},
    job: {value: 'Designer'}
});
//Learn about object.create


//Primitves vs objects
//Primitives
var a =23;
var b = a;
a = 46;
console.log(a+" "+b);
//Objects
var obj1 = {
    
    name: 'Joe',
    age: 26
};
var obj2 = obj1;
obj1.age = 35;
console.log(obj1.age+" "+obj2.age);
//Functions
var age = 23;
var obj = {
    name: 'Mike',
    city: 'Mangalore'
    
};
function change(a,b){
    a = 30;
    b.city = 'Rio De Janiero';
}

change(age,obj);
console.log(age+" "+obj.city);



//Passing functions as arguements

var yrs = [1990,1955,1984,1900,2005];


function arryCalc(arr,fn){
    var arrRes = [];
    for(var i = 0 ; i < arrRes.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function caage(el){
    
    return(2018-el);
}
var bob = arryCalc(yrs,caage);
console.log(bob);