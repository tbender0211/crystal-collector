

    

    // var bobaHealth = 130;
    // var chewieHealth = 110;
    // var vaderHealth = 150;
    // var soloHealth = 120;

    // var bobaAttack = 10;
    // var chewieAttack = 6;
    // var vaderAttack = 12;
    // var soloAttack = 8;
    
    var boba={  health: 130,
                name: "Boba Fett",
                attack: 10,
                divId:"#boba",};

    var chewie={health: 110,
                name: "Chewbacca",
                attack: 6,
                divId: "#chewie",};

    var vader={ health: 150,
                name: "Darth Vader",
                attack: 12,
                divId: "#vader",};

    var solo={  health: 120,
                name: "Han Solo",
                attack: 8,
                divId: "#solo",};
    
    var characters = [boba, chewie, vader, solo];
    var enemies = [];
    var defender = [];
    var yourChar;
    var yourEnemy;
    var characterChosen = false;
    var enemyChosen = false;

    //Click function to choose character

function chooseCharacter(){


    $(".figure").on("click", function() {

        yourChar = $(this);
        yourChar.removeClass("figure").addClass("yourCharacter");

        //Moves rest of characters to enemies div
        $(".figure").appendTo("#enemies");
        $(".figure").off("click");
        $(".figure").removeClass("figure").addClass("enemy");

        //Removes empty space placeholder
        $(".enemy").css('margin-bottom', '10px');

        //Changes border colors of enemies to red
        $(".enemy").css({'background-color': 'red', 'border-color': 'black'});

        characterChosen = true;

        //Remove click function to prevent characters from moving back

       
            
    })
}

//Function to choose opponent (not working)

function chooseEnemy(){

    $(".enemy").on("click", function () {

        yourEnemy = $(this);
        yourEnemy.removeClass(".enemy").addClass(".defender");
        $(".defender").appendTo("#defender");
        enemyChosen = true;
    })
}


$(document).ready(function(){

    chooseCharacter();

    if(characterChosen = true){
        console.log(characterChosen);
        chooseEnemy();
        console.log(enemyChosen);
   

    if(($(".yourCharacter").attr("id")=="boba") && enemyChosen === true){

        if(($(".defender").attr("id")=="chewie")){

            $("#attack").on("click", function() {

                $("#combat-log").html("<p>You attacked Chewbacca for " + boba.attack +".</p>");
                $("#combat-log").append("<p>Chewbacca attacked you back for " + chewie.attack + ".</p>");
                
                boba.health = (boba.health - chewie.attack);
                chewie.health = (chewie.health - boba.attack);
                
                $("#chewie-health").html(chewie.health);
                $("#boba-health").html(boba.health);
                
                boba.attack = boba.attack*2;
            })
        }
    }
 }


            //Function to move selected enemy to defender div

//             if (clicks === 1){
            
//                 $("#chewie").one("click", function(){

//                     $("#chewie").appendTo("#defender");
//                     $("#chewie").css({'background-color': 'black', 'border-color': 'green'});
//                     $("#chewie .figure-caption").css('color', 'white');

//                     $("#boba, #chewie, #vader, #solo").off("click");

//                     //Function Boba vs Chewie
//                     if (chewie.health > 0 && boba.health > 0 && $("#defender:contains('chewie')")) {

//                         $("#attack").on("click", function() {

//                             $("#combat-log").html("<p>You attacked Chewbacca for " + boba.attack +".</p>");
//                             $("#combat-log").append("<p>Chewbacca attacked you back for " + chewie.attack + ".</p>");

//                             boba.health = (boba.health - chewie.attack);
//                             chewie.health = (chewie.health - boba.attack);

//                             $("#chewie-health").html(chewie.health);
//                             $("#boba-health").html(boba.health);

//                             boba.attack = boba.attack*2;
                            
//                         if (boba.health <= 0) {

//                             $("#combat-log").html("<p>You have been defeated." + "<p><button type='button' id='reset'>Reset</button></p>")

//                             $("#reset").on("click", function() {
//                                  location.reload();
//                             })
//                         }

//                         if (chewie.health <= 0 || vader.health <=0 || solo.health <=0) {
//                             $("#combat-log").html("Victory! You can choose to fight another enemy.")
//                             $("#chewie").hide();

//                         }
//                         })
//                     }
         
                        
//                 })
//                 //Boba vs. Vader
//                 $("#vader").one("click", function(){

//                     clicks++;
//                     console.log(clicks);

//                     $("#vader").appendTo("#defender");
//                     $("#vader").css({'background-color': 'black', 'border-color': 'green'});
//                     $("#vader .figure-caption").css('color', 'white');

//                     $("#boba, #chewie, #vader, #solo").off("click");
//                 })

//                 $("#solo").one("click", function(){

//                     clicks++;
//                     console.log(clicks);

//                     $("#solo").appendTo("#defender");
//                     $("#solo").css({'background-color': 'black', 'border-color': 'green'});
//                     $("#solo .figure-caption").css('color', 'white');

//                     $("#boba, #chewie, #vader, #solo").off("click");
//                 })
//             }
//         })

//     //Click function for Chewbacca

//     if (clicks===0){

//         $("#chewie").one("click", function() {

//             clicks++;
//             console.log(clicks);

//             $("#boba, #vader, #solo").appendTo("#enemies");

//             $("#enemies").css('margin-bottom', '10px');

//             $("#boba, #vader, #solo").css({'background-color': 'red', 'border-color': 'black'});

//             $("#boba, #chewie, #vader, #solo").off("click");




//             //Function to move selected enemy to defender div

//             if (clicks === 1){

//                 $("#boba").one("click", function(){

//                     clicks++;
//                     console.log(clicks);

//                     $("#boba").appendTo("#defender");
//                     $("#boba").css({'background-color': 'black', 'border-color': 'green'});
//                     $("#boba .figure-caption").css('color', 'white');

//                     $("#boba, #chewie, #vader, #solo").off("click");
//                 })

//                 $("#vader").one("click", function(){

//                     clicks++;
//                     console.log(clicks);

//                     $("#vader").appendTo("#defender");
//                     $("#vader").css({'background-color': 'black', 'border-color': 'green'});
//                     $("#vader .figure-caption").css('color', 'white');

//                     $("#boba, #chewie, #vader, #solo").off("click");
//                 })

//                 $("#solo").one("click", function(){

//                     clicks++;
//                     console.log(clicks);

//                     $("#solo").appendTo("#defender");
//                     $("#solo").css({'background-color': 'black', 'border-color': 'green'});
//                     $("#solo .figure-caption").css('color', 'white');

//                     $("#boba, #chewie, #vader, #solo").off("click");
//                 })
//             }
        
//         })
//     }
//     else {

//     }

//     //Click function for Darth Vader

//     if (clicks === 0) {
       
//         $("#vader").one("click", function() {

//             clicks++;
//             console.log(clicks);
        
//             $("#boba, #chewie, #solo").appendTo("#enemies");
        
//             $("#enemies").css('margin-bottom', '10px');

//             $("#chewie, #boba, #solo").css({'background-color': 'red', 'border-color': 'black'});

//             $("#boba, #chewie, #vader, #solo").off("click");




//             //Function to move selected enemy to defender div

//             if (clicks === 1){

//                 $("#chewie").one("click", function(){

//                     clicks++;
//                     console.log(clicks);

//                     $("#chewie").appendTo("#defender");
//                     $("#chewie").css({'background-color': 'black', 'border-color': 'green'});
//                     $("#chewie .figure-caption").css('color', 'white');

//                     $("#boba, #chewie, #vader, #solo").off("click");
//                 })

//                 $("#boba").one("click", function(){

//                     clicks++;
//                     console.log(clicks);

//                     $("#boba").appendTo("#defender");
//                     $("#boba").css({'background-color': 'black', 'border-color': 'green'});
//                     $("#boba .figure-caption").css('color', 'white');

//                     $("#boba, #chewie, #vader, #solo").off("click");
//                 })

//                 $("#solo").one("click", function(){

//                     clicks++;
//                     console.log(clicks);

//                     $("#solo").appendTo("#defender");
//                     $("#solo").css({'background-color': 'black', 'border-color': 'green'});
//                     $("#solo .figure-caption").css('color', 'white');

//                     $("#boba, #chewie, #vader, #solo").off("click");
//                 })
//             }
        
//         })
//     }
//     else {

//     }

//     //Click function for Han Solo

//     if (clicks ===0) {
        
//         $("#solo").one("click", function() {

//             clicks++;
//             console.log(clicks);

//             $("#boba, #chewie, #vader").appendTo("#enemies");

//             $("#enemies").css('margin-bottom', '10px');

//             $("#chewie, #vader, #boba").css({'background-color': 'red', 'border-color': 'black'});
        
//             $("#boba, #chewie, #vader, #solo").off("click");



//             //Function to move selected enemy to defender div

//             if (clicks === 1){

//                 $("#chewie").one("click", function(){

//                     clicks++;
//                     console.log(clicks);

//                     $("#chewie").appendTo("#defender");
//                     $("#chewie").css({'background-color': 'black', 'border-color': 'green'});
//                     $("#chewie .figure-caption").css('color', 'white');

//                     $("#boba, #chewie, #vader, #solo").off("click");
//                 })

//                 $("#vader").one("click", function(){

//                     clicks++;
//                     console.log(clicks);

//                     $("#vader").appendTo("#defender");
//                     $("#vader").css({'background-color': 'black', 'border-color': 'green'});
//                     $("#vader .figure-caption").css('color', 'white');

//                     $("#boba, #chewie, #vader, #solo").off("click");
//                 })

//                 $("#boba").one("click", function(){

//                     clicks++;
//                     console.log(clicks);

//                     $("#boba").appendTo("#defender");
//                     $("#boba").css({'background-color': 'black', 'border-color': 'green'});
//                     $("#boba .figure-caption").css('color', 'white');

//                     $("#boba, #chewie, #vader, #solo").off("click");
//                 })
//             }

//         })
//     }
//     else{
//     }                        
    

    
})