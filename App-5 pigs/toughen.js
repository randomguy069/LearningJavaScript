/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;
//var topScore = prompt("What's the winning score you want to set?");
init();

var lastDice;
//Roll button
document.querySelector(".btn-roll").addEventListener('click',function(){ //adding an event for click and an anonymous function to be executed
    if(gamePlaying){
        var dice1 = Math.floor(Math.random()*6 +1);
        var dice2 = Math.floor(Math.random()*6 +1);

        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src='dice-'+ dice1 +'.png';
        document.getElementById('dice-2').src='dice-'+ dice2 +'.png';
        //Enable the below code if required to toughen up the game
        /*if(dice === 6 && lastDice === 6){
        
            
            scores[activePlayer] = 0;
            document.querySelector("#score-"+activePlayer).textContent = 0;
            nextPlayer();

            
            
            
        } else */ 
        if (dice !== 1 && dice2 !== 1){

            roundScore += dice1 + dice2;
            document.querySelector('#current-'+activePlayer).textContent = roundScore; //Chaange the roundscore
        }
        else{
            //Changing to the next player
            nextPlayer();
        }
        
         lastDice = dice;

    }
  
});

    document.querySelector(".btn-hold").addEventListener('click',function(){
        
    if(gamePlaying){
            scores[activePlayer] += roundScore ; //add the score to the main score

            document.querySelector("#score-"+activePlayer).textContent = scores[activePlayer]; //set the score according to the active player
            
            var input = document.querySelector(".final-score").value;
            var winningScore;
            if (input){
                winningScore = input;
            }else{
                winningScore = 100;
            }
            
            if(scores[activePlayer] >= winningScore){

            document.querySelector('#name-'+ activePlayer).textContent = "Winner!";
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';

            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            gamePlaying = false;
            }
            else
            {
                       nextPlayer();    


            }    
        }    


    });

document.querySelector(".btn-new").addEventListener('click',init); //passing the init function as arg

function nextPlayer(){
        
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.querySelector(".player-0-panel").classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';}

//Initiliasing of the game
function init(){
    
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0 ; //score from each round
            gamePlaying =true;

    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = "Player 1";
    document.getElementById('name-1').textContent = "Player 2";
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    

    


}
///

//document.querySelector("#current-" +activePlayer).innerHTML = "<em>"+dice<"</em>";
