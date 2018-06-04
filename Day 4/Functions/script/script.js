//Functions

var year = 1996;

function calculateAge(yearOfBirth){
    var age = 2018 - yearOfBirth ;
    return age;
}

console.log("Your age is "+calculateAge(year));

function yearsTillRetirement(name, yearofBirth){
    
    var age = calculateAge(yearofBirth);
    var retirementAge = 65 - age ;
    
    if(retirementAge > 0)
    console.log(name+" retires in " +retirementAge+" years!");
     else
         console.log(name+ " has already retired!");
}

yearsTillRetirement ("john",1995);
yearsTillRetirement ("Sanjay",1935);