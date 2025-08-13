"use strict";
var Weekdays;
(function (Weekdays) {
    Weekdays["Monday"] = "Thu Hai";
    Weekdays["Tuesday"] = "Thu Ba";
    Weekdays["Wednesday"] = "Thu Tu";
    Weekdays["Thursday"] = "Thu Nam";
    Weekdays["Friday"] = "Thu Sau";
    Weekdays["Saturday"] = "Thu Bay";
    Weekdays["Sunday"] = "Chu Nhat";
})(Weekdays || (Weekdays = {}));
for (const day in Weekdays) {
    console.log(Weekdays[day]);
}
