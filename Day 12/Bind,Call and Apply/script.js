//Bind, call and APply
var john = {
    
    name: 'John',
    age : 28,
    job: 'Teacher',
    presentation: function(style, timeOfDay){
        if(style === 'formal'){
            console.log('Good '+timeOfDay+' ladies and gentlemen! I\'m '+this.name+' and I\'m a '+this.job+' and I\'m '+this.age+' years old!');
        }else if (style === 'friendly'){
                        console.log('Hey what\'s up?. I\'m '+this.name+' and I\'m a '+this.job+' and I\'m '+this.age+' years old! Have a nice '+timeOfDay);

        }
    }
};

var emily = {
    
    name: 'Emily',
    age: 25,
    job: 'Designer'
      
}

john.presentation('friendly','morning');
//Use of call
john.presentation.call(emily, 'friendly','afternoon'); //this points to emily. Also an example of method borrowing
//john.presentation.apply(emily,['friendly','afternoon']) //similar to call but accepts an array instead


var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');

//another example
var years = [1990, 1955, 1984, 1976, 2005];


function arrayCalc(arr,fn){
    var arrRes = [];
    for(var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}
function calculateAge(el){
    
    return(2018-el);
}
function isFullAge(limit,el){
  return el >=limit;
}

var ages = arrayCalc(years,calculateAge);
var fullJapan =  arrayCalc(ages, isFullAge.bind(this,20));
console.log(ages);
console.log(fullJapan);