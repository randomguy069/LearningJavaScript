var player1Height = prompt("Enter player 1 height");
var player2Height = prompt("Enter player 2 height");;

var player1Age =  prompt("Enter player 1 age");;
var player2Age =  prompt("Enter player 2 age");;

var player1Score = parseInt(player1Height) + (5 * parseInt(player1Age));
var player2Score = parseInt(player2Height) + (5 * parseInt(player2Age));

if( player1Score > player2Score){
    
    console.log("Player 1 wins over Player 2 because of the score of "+player1Score);
}
else if (player2Score > player1Score)
    {
            console.log("Player 2 wins over Player 1 because of the score of "+player2Score);

    }
else
    {
        console.log("Scores equal");
    }

console.log("Enter player 3 ")

var player3Height = 201;
var player3age = 27;

var player3Score = player3Height + (5 * player3age);
if ( player3Score > player1Score && player3Score > player2Score){
    console.log("Player 3 scores above player 1 and player 2 with a score of "+player3Score);
}
else if(player3score> player1Score && player3Score < player2Score){
    
    console.log("Player 3 scores above player 1 but lower than player 2. Player 2 wins with a score of "+player2Score);
}
else if (player3Score < player1Score && player3Score > player2Score){
    
    console.log("Player3 scores more than player 2 but lower than player 1. Player 1 wins with a score of "+player1score);
    
}
else {
    console.log(" Player 3 loses to both player 1 and player 2. ");
}