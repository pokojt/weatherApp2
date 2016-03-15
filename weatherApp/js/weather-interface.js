
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%. DAMN.");
    });
  });
});





/* The jQuery get method makes a GET request using AJAX. It takes 2 arguments. The first is the URL to make the request to. This is basically the same URL we looked at earlier, just with variables for the city and the API key. The second argument is a callback function.

 The parameter to the callback function, response, will be assigned to the data returned from the API. We console log the data so we can see all of the data the API responded with and then we can display only the data we want to. */
 //
 // use console.log(JSON.stringify(response)); to see a string of the response object and to use only parts of it (see response.main.humidity appended above)
 //
 //
 // The then() method of a promise is called when a promise enters the fulfilled state.
 //
 // Then, we added another chained method call: .fail. The fail method is called when a promise enters the rejected state. An object representing the error is passed into the fail method if it is called, this lets us print the error object’s message property to the browser and our user can see what went wrong.
