//Loops

for (var i = 0 ; i <= 10 ; i++ ){ // i is the counter variable
    
    console.log(i);
}

//Using for loop to print out elements out of an array


var fruits = ['Apple','Banana', 'Strawberry','Fig','Avocado'];

for (var i =0 ; i <fruits.length ; i++ ){
    console.log(fruits[i]);
}

console.log("\n");
//Challenge

for (var i =fruits.length-1 ; i >=0 ; i-- ){ //prints in reverse
    console.log(fruits[i]);
}

//while loops


var utdPlayers = ['Pogba','Lingard','Rashford','Lindelof','Bailly'];
var i =0;
while ( i < utdPlayers.length){
    
    console.log(utdPlayers[i]);
    i++;
}

//using break

for (var i =0 ; i < 10; i++){
    
    if(i === 4) //in this case. Once i hits 4. The loop breaks and it stops printing the numbers. The out put will 0 1 2 3
        break; 
    else
        console.log(i);
}

console.log("\n");
//using continue

for (var i =0 ;i< 10 ;i++){
    
    if(i === 4)//in this case. Once i hits 4, 4 will be skipped and the rest of the loop will be printed. The out put will 0 1 2 3 5 6 7 8 9
        continue;
    else
        console.log(i);
}