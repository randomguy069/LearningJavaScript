//Learn on hoisting

calculateAge(1996);
function calculateAge(year){
    console.log(2018-year);
}

//retirement(1990);
var retirement = function(year){
    console.log(65-(2016 - year));
}


var age =23;
console.log(age);

function foo(){
    var age = 69;
    console.log(age);
}
foo();
console.log(age);