//Passing functions as arguements

var years = [1990, 1955, 1984, 1900, 2005];

function calculateAge(el){
    
    return(2018-el);
}
function arrayCalc(arr,fn){
    var arrRes = [];
    for(var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function isFullAge(el){
  return calculateAge(el) >=18;
}

function maxHeartRate(el){
    
    if(calculateAge(el) >= 18 && calculateAge(el) <= 81)
    return Math.round(206.9 - (0.67 * calculateAge(el)));
    else
        return -1;
}
var ages  = arrayCalc(years,calculateAge);
var fullAges = arrayCalc(years,isFullAge);
var bobs = arrayCalc(years, maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(bobs);

//Functions returning functions

function interviewQuestions(job){
    if (job === 'designer'){
        return function(name){
            console.log(name+' , can you explain what UX is ?');
        }
    
    }
    else if(job === 'teacher'){
        
        return function(name){
            console.log('what do you teach '+name+'?');
        }
    }
    else{
        return function(name){
            console.log('Hello '+name+', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestions('teacher');
var designerQuestion = interviewQuestions('designer');
teacherQuestion('Jonathan');
designerQuestion('Joe');

interviewQuestions('teacher')('Jacob');


//IIFE

function game(){
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();
//iife

(function(){console.log("cheetos");})();
