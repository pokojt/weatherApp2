var Alarm = require('../js/alarm.js').Clock;
// var hi = require('../js/alarm.js').greeting

$(document).ready(function (){
  var newAlarm = new Alarm(inputtedAlarmTime);
  var inputtedAlarmTime = $("input#userAlarmTime").val();

  setInterval(function() {
    newAlarm.update();
  }, 1000);


  $(".alarm").submit(function() {
    event.preventDefault();
    var inputtedAlarmTime = $("input#userAlarmTime").val();

    $(".alarmConfirm").append("<h4>Your alarm is set for " + inputtedAlarmTime + ".</h4>");

  });

});
