var Alarm = require('../js/alarm.js').Clock;
// var hi = require('../js/alarm.js').greeting

$(document).ready(function (){

  var newAlarm = new Alarm();

  setInterval(function() {
    newAlarm.update();
    newAlarm.check();
  }, 1000);

console.log(newAlarm);

  $(".alarm").submit(function() {
    event.preventDefault();
    var inputtedAlarmTime = $("input#userAlarmTime").val();

    newAlarm.alarmTime = inputtedAlarmTime;
    console.log(newAlarm);

    $(".alarmConfirm").append("<h4 time="+ inputtedAlarmTime +">Your alarm is set for " + inputtedAlarmTime + ".</h4>");

  });

});
