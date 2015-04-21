$(document).ready(function () {
    var thirtyMinutes = 1800000;//in milliseconds
    var twoMinutes = 120000;//in ms
    var tenMinutes = 600000;//in ms
    var fifteenMinutes = 900000;//in ms
    var testStagger = 7000;//for testing

    //vars for time control(well more like time handling not really control)
    var enumTimeSegment = [0,thirtyMinutes, fifteenMinutes, fifteenMinutes, tenMinutes, thirtyMinutes, tenMinutes, thirtyMinutes, tenMinutes];
    var enumTimeSegment2 = [0,testStagger, testStagger, testStagger, testStagger, testStagger, testStagger, testStagger, testStagger];//testing
    var enumIndex = 0;

    //vars for time checking
    var isccStartTime;
    var currentTime;
    var eventStartTime;
    var eventEndTime;

    //An array for holding table row objects
    var rowArray = [];

    var foreverTime = setInterval(function () { showTime(); }, 1000);

    isccStartTime = new Date();//init
    //isccStartTime.setTime(1429799400000);//time in ms for 4/23/2015 9:30AM CDT
    //$('#tester').html(isccStartTime);
    //$('#tester').html(isccStartTime);

    currentTime = new Date();//initialize currentTime to right now

    eventStartTime = new Date();
    eventEndTime = new Date();
    eventEndTime.setMilliseconds(10000);//this adds 10 seconds



    //actual times
    //eventStartTime.setTime(1429799400000);//time in ms for 4/23/2015 9:30AM CDT
    //eventEndTime.setTime(1429801200000);//time in ms for 4/23/2015 10:00AM CDT
    //probably don't need above is more specific eventEndTime.setMilliseconds(thirtyMinutes);//sets actual firstevent endtime

    //fills array with row data and references to html objects
    rowArrayInit();

    //var startCheck = setInterval(function () { startChecker(currentTime, isccStartTime); }, 1000);
    var myIntv;
    beginCheck();

    //var myIntv = setInterval(function () { timeCheck(currentTime, eventEndTime, myIntv); }, 1000);
    //getCurrentTime(timeCurrent);
    function updateTimes()
    {
        //$('#tester').html("in update time");
        //window.alert("in update times");
        enumIndex++;//move index to next position
        eventStartTime.setTime(rowArray[enumIndex].startTime);
        eventEndTime.setTime(rowArray[enumIndex].endTime);
        //window.alert("Row " + enumIndex + " start " + rowArray[enumIndex].startTime + " end " + rowArray[enumIndex].endTime);
        if(enumIndex < rowArray.length)
        {
            //they work
            //rowArray[enumIndex - 1].objRef.style.backgroundColor = "red";
            var x = rowArray[enumIndex - 1].objRef.getElementsByTagName("td");
            beginCheck();
        }
    }

    //check if the event has started or ended
    function timeCheck(eventStart, eventEnd, intervalName)
    {
        currentTime = getCurrentTime();
        //$('#tester2').html("start is " + eventStart.getTime() + "but" + eventEnd.getTime() + " current " + currentTime.getTime());
        //$('#tester').html("in time check");
        //See if event is in prog
        if (currentTime.getTime() > eventStart.getTime() && currentTime.getTime() < eventEnd.getTime())
        {
            $('#tester').html("event in prog");
            inProgAnimation(rowArray[enumIndex]);
        }
        //it is before end. also current is smaller than eventEnd
        if (currentTime.getTime() < eventEnd.getTime())
        {
            //if ((eventEnd.getTime() - currentTime.getTime()) <= twoMinutes)//in the two minute warning
            if ((eventEnd.getTime() - currentTime.getTime()) <= 1500)//or the not even two second warning
            {
                //window.alert("two mintue warning");
            }
            $('#tester2').html("not yet");
        } else //event is over (current > end)
        {
            endInterval(intervalName);
            rowArray[enumIndex].killTween = true;
            finishedAnimation(rowArray[enumIndex]);
            updateTimes();
        }
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
        //calls function to compare time every second
        //$('#tester').html("In begincheck");
        //$('#tester2').html("start is " + eventStartTime.getTime() + "but" + eventEndTime.getTime() + " current " + currentTime.getTime());
        myIntv = setInterval(function () { timeCheck(eventStartTime, eventEndTime, myIntv); }, 1000);
    }

    function showTime()
    {
        var date = new Date();
        date.getTime();
        $('#displayTime').html("The current time is: " + date.toLocaleTimeString());//normal
        //$('#displayTime').html("The current time is: " + date.getTime());//ms output
    }
    function getCurrentTime()
    {
        //$('#tester').html("In get current time");
        //$('#tester2').html("start is " + eventStartTime.getTime() + "but" + eventEndTime.getTime() + " current " + currentTime.getTime());
        var date = new Date();
        date.getTime();
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
        //get HTML object references
        var tempRefArray = document.getElementsByClassName("body-row");
        

        var i = 0;
        var startCounter = eventStartTime.getTime();
        var endCounter = eventEndTime.getTime();
        for (i = 0; i < tempRefArray.length; i++)
        {
            startCounter += enumTimeSegment2[i];
            endCounter += enumTimeSegment2[i];
            var text = "rowarray text "+i;
            rowArray[i] = new tableRow((i + 1), text, startCounter, endCounter, tempRefArray[i]);
            //window.alert("Row " + i + " start " + rowArray[i].startTime + " end " + rowArray[i].endTime);//can check array values
        }
        //window.alert("Done with row init" );
    }

    //tableRow object constructor
    function tableRow(rowNum, rowText, startTime, endTime, objRef)
    {
        this.rowNum = rowNum;
        this.rowText = rowText;
        this.startTime = startTime;
        this.endTime = endTime;
        this.objRef = objRef;
        this.tween;
        this.animating = false;
        this.killTween = false;
    }
})//end of on doc ready

function inProgAnimation(htmlRowRef)
{
    var columnsArray = htmlRowRef.objRef.getElementsByTagName("td");
    if (!htmlRowRef.isAnimating)
    {
        htmlRowRef.isAnimating = true;
        columnsArray[2].style.color = "white";
        htmlRowRef.tween = TweenMax.fromTo(htmlRowRef.objRef, 3.0, { backgroundColor: "transparent" }, { backgroundColor: "rgba(0, 189, 0, 0.5)", ease: Power1.easeInOut, repeat: -1, yoyo: true });
    }   
}

function finishedAnimation(htmlRowRef)
{

    htmlRowRef.tween.kill();//stops repeating animation
    TweenMax.to(htmlRowRef.objRef, 2.0, { backgroundColor: "transparent" });//ensures that bg fades to clear
    htmlRowRef.objRef.style.textDecoration = "line-through";//strikes out text

    var columnsArray = htmlRowRef.objRef.getElementsByTagName("td");//gets references to row objects
    columnsArray[2].innerHTML = "Completed";//sets status from in prog to done
}

function backgroundSlideShow()
{

}
