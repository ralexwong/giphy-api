$(document).ready(function(){

    // array of seahawk players
    var topics = ["kam chancellor", "russell wilson", "richard sherman", "marshawn lynch","pete carroll","earl thomas","bobby wagner","cliff avril","tyler lockett","doug baldwin"];

    // create array to store new submissions
    var userSubmissions = [];
    
    // creates buttons from topics array
    function intitialButtons() {
        for (var i = 0; i < topics.length; i++){
            var gifButton = $("<button>");
            gifButton.addClass("btn btn-primary");
            gifButton.text(topics[i]);
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
        if (topics.includes(text)) {
            return;
        }

        // checks if the user submmited a blank value
        if (text === "") {
            return;
        }

        else {
            
        //adds a new button to the gif list 
        newButton.text(text);
        newButton.addClass("btn btn-primary");
        $("#gif-list").append(newButton);


        topics.push(text);
        console.log(topics);
        }

    });

    // Event listener for our gif-button
    $(document).on("click",".btn", function(){
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


                var bigDiv = $("<div>");
                bigDiv.attr("id", "big-div-" + i)

                var ratingDiv = $("<p>");
                var rating = response.data[i].rating;

                ratingDiv.addClass("rating");

                $(ratingDiv).append("Rating: " + rating);

                $(bigDiv).append(ratingDiv);

                // grabs the gif url from the json
                var gifURL = response.data[i].images.downsized.url;

                // Creating and storing an image tag
                var gifImage = $("<img>");

                // Setting the gifImage src attribute to gifUrl
                gifImage.attr("src", gifURL);
                gifImage.attr("alt", "gif");

                // Prepending the catImage to the images div
                $(bigDiv).append(gifImage);

                $("#gifs").append(bigDiv);
            }

        });

    });

});


