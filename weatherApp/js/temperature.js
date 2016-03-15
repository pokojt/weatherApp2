exports.Temp = function(kelvins) {
  this.kelvins = kelvins;
};

exports.Temp.prototype.convertToCelcius = function() {
  var celcius = this.kelvins - 273.15;
  return celcius.toFixed(1);
}

exports.Temp.prototype.convertToFahrenheit = function() {

  var fahrenheit = (this.kelvins * (9/5)) - 459.67;
  return fahrenheit.toFixed(1);
}



// Create a temperature.js module to translate degrees Kelvin into Celsius and also into Fahrenheit
