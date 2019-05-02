$(document).ready(function(){

    // array of seahawk players
    var players = ["kam chancellor", "russell wilson", "richard sherman", "marshawn lynch","pete carroll","earl thomas","bobby wagner","cliff avril","tyler lockett","doug baldwin"];

    // create array to store new submissions
    var userSubmissions = [];
    
    // creates buttons from players array
    function intitialButtons() {
        for (var i = 0; i < players.length; i++){
            var gifButton = $("<button>");
            gifButton.addClass("btn btn-primary");
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

        if (userSubmissions.includes(text)) {
            return;
        }

        else {
            
        //adds a new button to the gif list 
        newButton.text(text);
        newButton.addClass("btn btn-primary");
        $("#gif-list").append(newButton);


        userSubmissions.push(text)
        }
    });

    // Event listener for our gif-button
    $(".btn").on("click", function(){
        event.preventDefault();

        // empties last list of gifs
        $("#gifs").empty();
        console.log(this.textContent);


        var button = this.textContent;
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + button + "&limit=10" + "&apikey=TuzC3cl7ZbXLtN3LyGrPq6YmOjZdWbzT";

        // Perfoming an AJAX GET request to our queryURL
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);

            for (var i = 0; i < response.data.length; i++) {

                var ratingDiv = $("<p>");
                var rating = response.data[i].rating;

                ratingDiv.addClass("rating");

                $("#gifs").append(rating);

                // grabs the gif url from the json
                var gifURL = response.data[i].image_original_url;

                // Creating and storing an image tag
                var gifImage = $("<img>");

                // Setting the gifImage src attribute to gifUrl
                gifImage.attr("src", gifURL);
                gifImage.attr("alt", "gif");

                // Prepending the catImage to the images div
                $("#gifs").append(gifImage);
            }

            




    });

    });

});