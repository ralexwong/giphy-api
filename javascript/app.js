$("#submit-button").on("click", function(){
    event.preventDefault();

    // empties last list of gifs
    $("#gif-list").empty();


    var userInput = $("#gif-name-input").val().trim();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userInput + "&apikey=TuzC3cl7ZbXLtN3LyGrPq6YmOjZdWbzT";

    // Creates AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);






   });

});