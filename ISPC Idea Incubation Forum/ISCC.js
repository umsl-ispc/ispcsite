$(document).ready(function () {
    var thirtyMinutes = 1800000;//in milliseconds
    var tenMinutes = 600000;//in ms
    var fifteenMinutes = 900000;//in ms

    var enumTimeSegment = [thirtyMinutes, fifteenMinutes, fifteenMinutes, tenMinutes, thirtyMinutes, tenMinutes, thirtyMinutes, tenMinutes];

    var isccStartTime = new Date();//right now
    //isccStartTime.setTime(1429799400000);
    //$('#tester').html(isccStartTime);
    $('#tester').html(isccStartTime);

    var currentTime = new Date();//initialize currentTime to right now

    var eventStartTime;
    var eventEndTime;
    eventEndTime = new Date();
    eventEndTime.setMilliseconds(6000);//this adds 6 seconds

    var startCheck = setInterval(function () { startChecker(currentTime, isccStartTime); }, 1000);

    //var myIntv = setInterval(function () { timeCheck(currentTime, eventEndTime, myIntv); }, 1000);
    //getCurrentTime(timeCurrent);

    function timeCheck(currentTime, eventEndTime, intervalName) {
        $('#tester').html("tester is " + currentTime.getTime() + "but" + eventEndTime.getTime());
        $('#tester2').html("refreshed");
        //loop while eventEndTime has yet to occur
        if (currentTime.getTime() < eventEndTime.getTime()) {
            //currentTime = getTime();//update current time
            currentTime = getCurrentTime();
            if (currentTime.getTime() >= eventEndTime.getTime()) {
                endInterval(intervalName);
                rowAlert();
            }
        }
        //$('#tester').html("loop complete");
    }
    function startChecker(currentTime, eventEndTime) {
        $('#tester').html("tester is " + currentTime.getTime() + "but" + eventEndTime.getTime());
        $('#tester2').html("refreshed");
        //loop while eventEndTime has yet to occur
        if (currentTime.getTime() < eventEndTime.getTime()) {
            currentTime = getCurrentTime();
            if (currentTime.getTime() >= eventEndTime.getTime()) {
                endInterval(startCheck);
                $('#tester').html("lets go already");
                begin();

            }
        }
    }
    function begin() {
        var myIntv = setInterval(function () { timeCheck(currentTime, eventEndTime, myIntv); }, 1000);
    }
    function getCurrentTime() {
        var date = new Date();
        date.getTime();
        $('#tester2').html("New time is" + date);
        return date;
    }
    function endInterval(interval) {

        clearInterval(interval);
    }

})

function rowAlert() {
    var rowArray = document.getElementsByClassName("body-row");
    var i;
    for (i = 0; i < rowArray.length; i++) {
        window.alert(rowArray[i].toString);
        $('#tester2').html(rowArray[i].toString);
        rowArray[i].style.backgroundColor = "red";
    }

}