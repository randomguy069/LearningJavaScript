var yearOfBirth = [1965,2008,1992];
/*var ages = [];

for (var i =0 ;i<yearOfBirth.length;i++){
    
    ages[i]= 2018- yearOfBirth[i];
}
console.log(ages);
var fullage =[];

for(var i =0 ; i<ages.length ; i++){
    
    if(ages[i] >= 18)
        fullage[i]=true;
    else
        fullage[i] = false;

    
}

console.log(fullage);
*/
var yearOfBirth2 = [1995,2010,1935,2009,2015];
console.log(printFullAge(yearOfBirth2));

function printFullAge(yearOfBirth){
    
    var funcAges=[];
    for (var i =0; i<yearOfBirth.length; i++){
        
        funcAges[i] = 2018-yearOfBirth[i];
        
    }
    var funcFullAge=[];
    
    for (var i =0; i <funcAges.length ; i++){
        if(funcAges[i] >= 18)
            funcFullAge[i] = true;
        else
            funcFullAge[i] = false;
    }
    
    return funcFullAge;
}

var full_1 = printFullAge(yearOfBirth2);
var full_2 = printFullAge([1987,1900,2010,2014]);

console.log(full_1);
console.log(full_2);