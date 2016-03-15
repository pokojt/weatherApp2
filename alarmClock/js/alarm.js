
exports.Clock = function() {
  // this.alarmTime = alarmTime;
};

exports.Clock.prototype.update = function() {
  $(".currentTime").text(moment().format('LTS'));
};

exports.Clock.prototype.check = function() {

    if(this.alarmTime === moment().format('HH:mm')) {
      $('body').addClass("alert");
    };
};

// exports.greeting = "hello";
