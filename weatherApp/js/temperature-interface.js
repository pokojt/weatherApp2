var apiKey = require('./../.env').apiKey;
var Temp = require('../js/temperature.js').Temp;


$(document).ready(function() {
  $('#temperature').click(function() {
    var city = $('#location').val();
    $('#location').val("");

    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {

      var newTemp = new Temp(response.main.temp);

      var celcius = newTemp.convertToCelcius();
      var fahrenheit = newTemp.convertToFahrenheit();

      $('.showWeather').text("The temperature in " + city + " is " + response.main.temp + ".");
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
