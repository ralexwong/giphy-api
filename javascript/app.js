$(document).ready(function(){

    // array of seahawk players
    var players = ["kam chancellor", "russell wilson", "richard sherman", "marshawn lynch","pete carroll","earl thomas","bobby wagner","cliff avril","tyler lockett","doug baldwin"];

    // creates buttons from players array
    function intitialButtons() {
        for (var i = 0; i < players.length; i++){
            var gifButton = $("<button>");
            gifButton.addClass("gif-button");
            gifButton.text(players[i]);
            $("#gif-list").append(gifButton);
        }
    }

    // intitializes the function
    intitialButtons();



    // creates new button with text based on what user typed
    $("#submit-button").on("click", function() {
        event.preventDefault();

        var newButton = $("<button>");
        var text = $("#gif-input").val();

        // checks if the text has already been submitted to the gif list
        if (players.includes(text)) {
            return;
        }

        else {
            
        newButton.text(text);
        gifButton.addClass("gif-button");
        $("#gif-list").append(newButton);

        }
    });


    $(this).on("click", function(){
        event.preventDefault();

        // empties last list of gifs
        $("#gif-list").empty();


        var button = $(this).val();
        var queryURL = "https://api.giphy.com/v1/gifs/random?q=" + button + "&limit=10" + "&apikey=TuzC3cl7ZbXLtN3LyGrPq6YmOjZdWbzT";

        // Creates AJAX call for the specific movie button being clicked
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);

            var 




    });

    });

});