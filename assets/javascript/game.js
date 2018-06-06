$(document).ready(function(){

    var clicks = 0;

    var bobaHealth = 130;
    var chewieHealth = 110;
    var vaderHealth = 150;
    var soloHealth = 120;

    var bobaAttack = 10;
    var chewieAttack = 6;
    var vaderAttack = 12;
    var soloAttack = 8;



    //Click function for Boba Fett

    if (clicks === 0) {
        
        $("#boba").one("click", function() {

            clicks++;
            console.log(clicks);

            //Moves rest of characters to enemies div
            $("#chewie, #vader, #solo").appendTo("#enemies");

            //Removes empty space placeholder
            $("#enemies").css('margin-bottom', '10px');

            //Changes border colors of enemies to red
            $("#chewie, #vader, #solo").css({'background-color': 'red', 'border-color': 'black'});

            //Remove click function to prevent characters from moving back
            $("#boba, #chewie, #vader, #solo").off("click");
            
        


            //Function to move selected enemy to defender div

            if (clicks === 1){

                $("#chewie").one("click", function(){
        
                    clicks++;
                    console.log(clicks);

                    $("#chewie").appendTo("#defender");
                    $("#chewie").css({'background-color': 'black', 'border-color': 'green'});
                    $("#chewie .figure-caption").css('color', 'white');

                    $("#boba, #chewie, #vader, #solo").off("click");

                    //Function Boba vs Chewie
                    if (chewieHealth > 0 && bobaHealth > 0) {

                        $("#attack").on("click", function() {

                            $("#combat-log").html("<p>You attacked Chewbacca for " + bobaAttack +".</p>");
                            $("#combat-log").append("<p>Chewbacca attacked you back for " + chewieAttack + ".</p>");

                            bobaHealth = (bobaHealth - chewieAttack);
                            chewieHealth = (chewieHealth - bobaAttack);

                            $("#chewie-health").html(chewieHealth);
                            $("#boba-health").html(bobaHealth);

                            bobaAttack = bobaAttack*2;
                            
                        if (bobaHealth <= 0) {

                            $("#combat-log").html("<p>You have been defeated." + "<p><button type='button' id='reset'>Reset</button></p>")

                            $("#reset").on("click", function() {
                                 location.reload();
                            })
                        }

                        if (chewieHealth <= 0) {
                            $("#combat-log").html("You have defeated Chewbacca. You can choose to fight another enemy.")
                            $("#chewie").hide();
                        }
                        })
                    }
         
                        
                })
                //Boba vs. Vader
                $("#vader").one("click", function(){

                    clicks++;
                    console.log(clicks);

                    $("#vader").appendTo("#defender");
                    $("#vader").css({'background-color': 'black', 'border-color': 'green'});
                    $("#vader .figure-caption").css('color', 'white');

                    $("#boba, #chewie, #vader, #solo").off("click");
                })

                $("#solo").one("click", function(){

                    clicks++;
                    console.log(clicks);

                    $("#solo").appendTo("#defender");
                    $("#solo").css({'background-color': 'black', 'border-color': 'green'});
                    $("#solo .figure-caption").css('color', 'white');

                    $("#boba, #chewie, #vader, #solo").off("click");
                })
            }
        })
    }
    else {

    }

    //Click function for Chewbacca

    if (clicks===0){

        $("#chewie").one("click", function() {

            clicks++;
            console.log(clicks);

            $("#boba, #vader, #solo").appendTo("#enemies");

            $("#enemies").css('margin-bottom', '10px');

            $("#boba, #vader, #solo").css({'background-color': 'red', 'border-color': 'black'});

            $("#boba, #chewie, #vader, #solo").off("click");




            //Function to move selected enemy to defender div

            if (clicks === 1){

                $("#boba").one("click", function(){

                    clicks++;
                    console.log(clicks);

                    $("#boba").appendTo("#defender");
                    $("#boba").css({'background-color': 'black', 'border-color': 'green'});
                    $("#boba .figure-caption").css('color', 'white');

                    $("#boba, #chewie, #vader, #solo").off("click");
                })

                $("#vader").one("click", function(){

                    clicks++;
                    console.log(clicks);

                    $("#vader").appendTo("#defender");
                    $("#vader").css({'background-color': 'black', 'border-color': 'green'});
                    $("#vader .figure-caption").css('color', 'white');

                    $("#boba, #chewie, #vader, #solo").off("click");
                })

                $("#solo").one("click", function(){

                    clicks++;
                    console.log(clicks);

                    $("#solo").appendTo("#defender");
                    $("#solo").css({'background-color': 'black', 'border-color': 'green'});
                    $("#solo .figure-caption").css('color', 'white');

                    $("#boba, #chewie, #vader, #solo").off("click");
                })
            }
        
        })
    }
    else {

    }

    //Click function for Darth Vader

    if (clicks === 0) {
       
        $("#vader").one("click", function() {

            clicks++;
            console.log(clicks);
        
            $("#boba, #chewie, #solo").appendTo("#enemies");
        
            $("#enemies").css('margin-bottom', '10px');

            $("#chewie, #boba, #solo").css({'background-color': 'red', 'border-color': 'black'});

            $("#boba, #chewie, #vader, #solo").off("click");




            //Function to move selected enemy to defender div

            if (clicks === 1){

                $("#chewie").one("click", function(){

                    clicks++;
                    console.log(clicks);

                    $("#chewie").appendTo("#defender");
                    $("#chewie").css({'background-color': 'black', 'border-color': 'green'});
                    $("#chewie .figure-caption").css('color', 'white');

                    $("#boba, #chewie, #vader, #solo").off("click");
                })

                $("#boba").one("click", function(){

                    clicks++;
                    console.log(clicks);

                    $("#boba").appendTo("#defender");
                    $("#boba").css({'background-color': 'black', 'border-color': 'green'});
                    $("#boba .figure-caption").css('color', 'white');

                    $("#boba, #chewie, #vader, #solo").off("click");
                })

                $("#solo").one("click", function(){

                    clicks++;
                    console.log(clicks);

                    $("#solo").appendTo("#defender");
                    $("#solo").css({'background-color': 'black', 'border-color': 'green'});
                    $("#solo .figure-caption").css('color', 'white');

                    $("#boba, #chewie, #vader, #solo").off("click");
                })
            }
        
        })
    }
    else {

    }

    //Click function for Han Solo

    if (clicks ===0) {
        
        $("#solo").one("click", function() {

            clicks++;
            console.log(clicks);

            $("#boba, #chewie, #vader").appendTo("#enemies");

            $("#enemies").css('margin-bottom', '10px');

            $("#chewie, #vader, #boba").css({'background-color': 'red', 'border-color': 'black'});
        
            $("#boba, #chewie, #vader, #solo").off("click");



            //Function to move selected enemy to defender div

            if (clicks === 1){

                $("#chewie").one("click", function(){

                    clicks++;
                    console.log(clicks);

                    $("#chewie").appendTo("#defender");
                    $("#chewie").css({'background-color': 'black', 'border-color': 'green'});
                    $("#chewie .figure-caption").css('color', 'white');

                    $("#boba, #chewie, #vader, #solo").off("click");
                })

                $("#vader").one("click", function(){

                    clicks++;
                    console.log(clicks);

                    $("#vader").appendTo("#defender");
                    $("#vader").css({'background-color': 'black', 'border-color': 'green'});
                    $("#vader .figure-caption").css('color', 'white');

                    $("#boba, #chewie, #vader, #solo").off("click");
                })

                $("#boba").one("click", function(){

                    clicks++;
                    console.log(clicks);

                    $("#boba").appendTo("#defender");
                    $("#boba").css({'background-color': 'black', 'border-color': 'green'});
                    $("#boba .figure-caption").css('color', 'white');

                    $("#boba, #chewie, #vader, #solo").off("click");
                })
            }

        })
    }
    else{
    }



    
})