//This keyword
//console.log(this); //outputs window

calculateAge(1996);
function calculateAge(year){
    
    console.log(2018-year);
    console.log(this);
}

var john = {
    
    name: "John",
    yearOfBirth: 1990,
    calculateAge: function(){
        console.log(this);
        console.log(2018-this.yearOfBirth);
        
        function innerFunction(){
            console.log(this);
        }
        innerFunction();
    }
};

john.calculateAge();

var mike = {
    
    name: "Mike",
    yearOfBirth: 1978
};
mike.calculateAge = john.calculateAge;
mike.calculateAge();