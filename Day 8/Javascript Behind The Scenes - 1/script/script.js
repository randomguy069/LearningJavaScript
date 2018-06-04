//Learn about scoping,lexical scoping
//Learn about execution stack
//Execution global context
var a = "hello";
first();

function first(){
    var b = "hi!";
    second();
    
    function second(){
        
        var c = "Hey!";
        third();
    }
}

function third(){
    var d ="John";
    console.log(a+" "+d);
}