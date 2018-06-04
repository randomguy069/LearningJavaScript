var name = "John";
var age = 21;
var isMarried = "no";

if (isMarried === "no")
    console.log("Good life bro");
else
    console.log("Enjoy hell!");

//using boolean instead
isMarried = false;

if(isMarried){ //checks if isMarried is true
    console.log("Booo");
    
}
else{
    console.log("YAY!");
}

if ( 23 == "23"){ //  == type coercion takes place  and both will be equal
    console.log("Random text");
}

if (23 === "23") // === type coercion does not take place and both will not be equal
    console.log("Random text again");