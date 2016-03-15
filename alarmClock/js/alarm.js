
exports.Clock = function(alarmTime) {
  this.alarmTime = alarmTime;
};

exports.Clock.prototype.update = function() {
  $(".currentTime").text(moment().format('LTS'));

    var currentTime = moment().format('LTS');

    return this.alarmTime;

    console.log(this.alarmTime);

    if(alarmTime === currentTime) {
      // alert('ALARM!!!!');
      $('body').addClass("alert");
    };
};

// exports.greeting = "hello";
