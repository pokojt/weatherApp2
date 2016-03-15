
exports.Clock = function(alarmTime) {
  this.alarmTime = alarmTime;
};

exports.Clock.prototype.update = function() {
  $(".currentTime").text(moment().format('LTS'));

    var currentTime = moment().format('LTS');

    console.log(this.alarmTime);

    if(this.alarmTime === currentTime) {
      // alert('ALARM!!!!');
      $('body').addClass("alert");
    };
};

// exports.greeting = "hello";
