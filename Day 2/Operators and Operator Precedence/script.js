var name = "Adithya";
var age = 21;

console.log(name+" "+age);

var job, isMarried;
console.log(job);

job = 'Dev';
isMarried = false;
console.log(job+" "+isMarried);
console.log(name+" "+age+" "+job+" "+isMarried);

age = 'Thirty Three';
job = 'CEO';
console.log(name+" is a "+age+" old "+job+". Is he married yet? "+isMarried);

//Operators
var now = 2016;

var birthYear = now - 26;

console.log(birthYear);

//Demonstrating operator precedence

var ageOfGod = 3 * (5 + 4) - 2;
console.log(ageOfGod);

ageOfGod++; // post increments ageOfGod by 1
console.log(ageOfGod);
ageOfGod *= ageOfGod; // Multiplies ageOfGod twice
console.log(ageOfGod);