//Closures
//Closure Defn : Inner func haS always access to variables and parameters of its outer function even after outer function has returned
function retirement(retirementAge){
        var a = ' years left until retirement';
    
    return function (yearOfBirth){
        var age = 2018-yearOfBirth;
        console.log((retirementAge-age)+a);
    }
}

var retirementUS = retirement(66);
retirementUS(1990);
var retirementGer = retirement(65);
var retirementIce = retirement(67);
retirementGer(1980);
retirementIce(1967);

//Closures assignment

function interviewQuestion(job){
    
    var greet = "Greetings, ";
    var greet1 = " . How are you doing today?";
    
    if (job === 'developer'){
        
        return function(name){
            console.log(greet+name+greet1+"Explain what is Closures?");
        }
        
    }
    else if(job === 'designer'){
        
        return function(name){
            console.log(greet+name+greet1+ " Could you tell what UX is?");
        }
    }
}
//Closures assignment
var jon = interviewQuestion('designer');
jon("John");
var mich = interviewQuestion('developer')('Michelle');

function intvQ(job){
    
    return function(nam){
        if ( job === 'designer'){
            console.log("a "+nam);
        }
        else if(job === 'teacher'){
            console.log("b"+nam);
        }else{
            console.log("c"+nam);
        }
    }
}

intvQ("designer")("XYZ");