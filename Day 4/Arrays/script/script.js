var names = ['Adithya','Amarnath','Nikhil'];
var years = new Array(1996,1995,1997);

console.log(names[0]); //will output Adithya
names[2]= "Zlatan";
console.log(names);

var everything = ["John","Doe", 1995, "Developer", false];
everything.push("Purple"); //adds an element at the end of the array
everything.unshift("Legend"); //adds to the beginning 
everything.pop(); //removes the last element
everything.shift(); //removes the first element
console.log(everything);

var i =everything.indexOf("John"); //returns the index
console.log(i);

// if indexOf returns -1 then that means the element does not exist in the array
if(everything.indexOf("Pilot") === -1)
    console.log("John is not a pilot");