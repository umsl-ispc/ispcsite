$(document).ready(function () {
    var thirtyMinutes = 1800000;//in milliseconds
    var tenMinutes = 600000;//in ms
    var fifteenMinutes = 900000;//in ms
    var fiveSeconds = 7000;//for testing

    //vars for time control(well more like time handling not really control)
    var enumTimeSegment = [0,thirtyMinutes, fifteenMinutes, fifteenMinutes, tenMinutes, thirtyMinutes, tenMinutes, thirtyMinutes, tenMinutes];
    var enumTimeSegment2 = [0,fiveSeconds, fiveSeconds, fiveSeconds, fiveSeconds, fiveSeconds, fiveSeconds, fiveSeconds, fiveSeconds];//testing
    var enumIndex = 0;

    //vars for time checking
    var isccStartTime;
    var currentTime;
    var eventStartTime;
    var eventEndTime;

    //An array for holding table row objects
    var rowArray = [];



    isccStartTime = new Date();//init
    //isccStartTime.setTime(1429799400000);//time in ms for 4/23/2015 9:30AM CDT
    //$('#tester').html(isccStartTime);
    //$('#tester').html(isccStartTime);

    currentTime = new Date();//initialize currentTime to right now

    eventStartTime = new Date();
    eventEndTime = new Date();
    eventEndTime.setMilliseconds(5000);//this adds 6 seconds

    rowArrayInit();

    //var startCheck = setInterval(function () { startChecker(currentTime, isccStartTime); }, 1000);
    var myIntv;
    beginCheck();

    //var myIntv = setInterval(function () { timeCheck(currentTime, eventEndTime, myIntv); }, 1000);
    //getCurrentTime(timeCurrent);
    function updateTimes()
    {
        enumIndex++;//move index to next position
        eventStartTime += rowArray[enumIndex].startTime;
        eventEndTime += rowArray[enumIndex].stopTime;
        $('#tester').html(eventStartTime);
        $('#tester2').html(eventEndTime);
        if(enumIndex < rowArray.length)
        {
            rowArray[enumIndex - 1].objRef.style.backgroundColor = "red";
            beginCheck();
        }
    }

    function timeCheck(currentTime, eventEndTime, intervalName)
    {
        $('#tester').html("tester is " + currentTime.getTime() + "but" + eventEndTime.getTime());
        $('#tester2').html("refreshed");
        //loop while eventEndTime has yet to occur
        if (currentTime.getTime() < eventEndTime.getTime())
        {
            //currentTime = getTime();//update current time
            currentTime = getCurrentTime();
            if (currentTime.getTime() >= eventEndTime.getTime())
            {
                
                endInterval(intervalName);
                updateTimes();
            }
        }
        //$('#tester').html("loop complete");
    }
    function startChecker(currentTime, eventEndTime)
    {
        $('#tester').html("tester is " + currentTime.getTime() + "but" + eventEndTime.getTime());
        $('#tester2').html("refreshed");
        //loop while eventEndTime has yet to occur
        if (currentTime.getTime() < eventEndTime.getTime())
        {
            currentTime = getCurrentTime();
            if (currentTime.getTime() >= eventEndTime.getTime())
            {
                endInterval(startCheck);
                $('#tester').html("lets go already");
                beginCheck();

            }
        }
    }
    function beginCheck()
    {
        
        myIntv = setInterval(function () { timeCheck(eventStartTime, eventEndTime, myIntv); }, 1000);
    }
    function getCurrentTime()
    {
        var date = new Date();
        date.getTime();
        $('#tester2').html("New time is" + date);
        return date;
    }
    function endInterval(interval)
    {
        clearInterval(interval);
    }
    function countDown()
    {

    }
    function rowArrayInit()
    {

        var tempRefArray = document.getElementsByClassName("body-row");
        //rowArray[tempRefArray.length];
        
        var i = 0;
        for (i = 0; i < tempRefArray.length; i++)
        {
            //window.alert("value is " + tempRefArray[i].item);
            $('#tester2').html("temp arr " + i);
            var text = "rowarray text "+i;
            var holder = new tableRow((i + 1), text, (eventStartTime.getTime() + enumTimeSegment2[i]), (eventEndTime.getTime() + enumTimeSegment2[i]),tempRefArray[i]);
            //window.alert("And Back" + i + " is");
            rowArray[i] = holder;

            //rowArray[i].objRef.style.backgroundColor = "red";
        }
        //window.alert("Done with row init" );
    }
    //tableRow object constructor
    function tableRow(rowNum, rowText, startTime, stopTime, objRef)
    {
        //window.alert("in here" + startTime + " and " + stopTime + rowText + rowNum);
        //$('#tester').html("start is " + objRef.toString);
        this.rowNum = rowNum;
        this.rowText = rowText;
        this.startTime = startTime;
        this.stopTime = stopTime;
        this.objRef = objRef;
    }
})//end of on doc ready

function rowAlert()
{
    var rowArray = document.getElementsByClassName("body-row");
    var i;
    for(i = 0; i < rowArray.length; i++)
    {
        window.alert(rowArray[i].toString);
        $('#tester2').html(rowArray[i].toString);
        rowArray[i].style.backgroundColor = "red";
    }

}
