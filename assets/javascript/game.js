$(document).ready(function(){

    var score = 0;
    var wins = 0;
    var losses = 0;    
    var randomNum = Math.floor(Math.random()*101)+19;
    var blueVal = Math.floor(Math.random()*12)+1;
    var greenVal = Math.floor(Math.random()*12)+1;
    var purpleVal = Math.floor(Math.random()*12)+1;
    var redVal = Math.floor(Math.random()*12)+1;
    $("#random-number").text(randomNum);
    
    console.log("Random Number: " + randomNum);
    console.log("Blue: " + blueVal);
    console.log("Green: " + greenVal);
    console.log("Purple: " + purpleVal);
    console.log("Red: " + redVal);
    
    //Function to reset game
    function reset(){
        randomNum = Math.floor(Math.random()*101)+19;
        blueVal = Math.floor(Math.random()*12)+1;
        greenVal = Math.floor(Math.random()*12)+1;
        purpleVal = Math.floor(Math.random()*12)+1;
        redVal = Math.floor(Math.random()*12)+1;
        score = 0;
        $("#random-number").text(randomNum);
        $("#score").text(score);
        // $("#blue, #red, #green, #purple").toggle();
        
    }
    
    //Function if player wins
    function winner(){
        alert("You won! Guess another!");
        wins++;
        $("#win-loss").html("<p>Wins: " + wins + "</p><p>Losses: " + losses + "</p>");
        reset();
    }
    
    //Function if player loses
    function loser(){
        alert("You lose! Try again.");
        losses++;
        $("#win-loss").html("<p>Wins: " + wins + "</p><p>Losses: " + losses + "</p>");
        reset();
    }
    
    //Click functions for the gems 
    $("#blue").on("click", function(){
            
        score = score + blueVal;
        $("#score").text("Score: " + score);
    
        if (score === randomNum){
    
            winner();
        }
            
        if (score > randomNum){
            
            loser();
        }
            
    })
    
    $("#green").on("click", function(){
        score = score + greenVal;
        $("#score").text("Score: " + score);
    
        if (score === randomNum){
            winner();
        }
            
        if (score > randomNum){
            loser();
        }
    })
    
    $("#purple").on("click", function(){
        score = score + purpleVal;
        $("#score").text("Score: " + score);
    
        if (score === randomNum){
            winner();
        }
            
        if (score > randomNum){
            loser();
        }
    })
    
    $("#red").on("click", function(){
        score = score + redVal;
        $("#score").text("Score: " + score);
    
        if (score === randomNum){
            winner();
        }
            
        if (score > randomNum){
            loser();
        }
    })
    
    })