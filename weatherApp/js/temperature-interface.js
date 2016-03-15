var apiKey = require('./../.env').apiKey;
var Temp = require('../js/temperature.js').Temp;


$(document).ready(function() {
  $("#tempButtons").hide();


  $('#temperature').click(function() {
    $("#tempButtons").show();

    var city = $('#location').val();
    $('#location').val("");

    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {

      var newTemp = new Temp(response.main.temp);

      var celcius = newTemp.convertToCelcius();
      var fahrenheit = newTemp.convertToFahrenheit();

      $('.showWeather').text("The temperature in " + city + " is " + response.main.temp + "°K.");

      $('#toFahrenheit').click(function() {
        $('.showWeather').text("The temperature in " + city + " is " + fahrenheit + "°F.");
      });
      $('#toCelcius').click(function() {
        $('.showWeather').text("The temperature in " + city + " is " + celcius + "°C.");
      });
    });

  });
});



// First display both Kelvin and Celsius, then add functionality to allow the user to choose to display either Celsius or Fahrenheit.
