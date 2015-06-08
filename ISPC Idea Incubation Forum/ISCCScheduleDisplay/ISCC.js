$(document).ready(function () {
    var thirtyMinutes = 1800000;//in milliseconds
    var twoHours = 7200000;//in ms
    var tenMinutes = 600000;//in ms
    var fifteenMinutes = 900000;//in ms
    var testStagger = 7000;//for testing
    var twoMinutes = 120000;

    //vars for time control(well more like time handling not really control)
    var enumTimeSegment = [0, fifteenMinutes, fifteenMinutes, tenMinutes, thirtyMinutes, tenMinutes, thirtyMinutes, tenMinutes, twoHours];//actual
    //var enumTimeSegment2 = [0,testStagger, testStagger, testStagger, testStagger, testStagger, testStagger, testStagger, testStagger];//testing
    var enumIndex = 0;//index for controlling htmltable row position and enumTimeSegment array position

    //vars for time checking
    var currentTime;
    var eventStartTime;
    var eventEndTime;

    //An array for holding table row objects
    var rowArray = [];

	//displays current time on page
    var foreverTime = setInterval(function () { showTime(); }, 1000);

    //init
    eventStartTime = new Date();
    eventEndTime = new Date();

    currentTime = new Date();//initialize currentTime to right now




    //actual times
    eventStartTime.setTime(1429799400000);//time in ms for 4/23/2015 9:30AM CDT
    eventEndTime.setTime(1429801200000);//time in ms for 4/23/2015 10:00AM CDT

    //fills array with row data and references to html objects
    rowArrayInit();

    var myIntv;
	
	//entry point
    beginCheck();

	//sets up times for next event
    function updateTimes()
    {
        enumIndex++;//move index to next position
        if(enumIndex < rowArray.length)//more events?
        {
            eventStartTime.setTime(rowArray[enumIndex].startTime);//move up times
            eventEndTime.setTime(rowArray[enumIndex].endTime);//move up times
            beginCheck();//only called if there are things left to animate
        } else {
            endAnimation();
        }
    }

    //check if the event has started or ended
    function timeCheck(eventStart, eventEnd, intervalName)
    {
        currentTime = getCurrentTime();
        //See if event is in prog
        if (currentTime.getTime() > eventStart.getTime() && currentTime.getTime() < eventEnd.getTime())
        {
            inProgAnimation(rowArray[enumIndex]);//if event is inprog animation call
        }
        //it is before end. also current is smaller than eventEnd
        if (currentTime.getTime() < eventEnd.getTime())
        {
            if ((eventEnd.getTime() - currentTime.getTime()) <= twoMinutes)//in the two minute warning
            {
                //window.alert("two mintue warning");
            }
        } else //event is over (current > end)
        {
            endInterval(intervalName);//kills interval's function call
            finishedAnimation(rowArray[enumIndex]);//
            updateTimes();
        }
    }

	//this function, functions as the script entry point
    function beginCheck()
    {
        //calls function to compare event times every second
        myIntv = setInterval(function () { timeCheck(eventStartTime, eventEndTime, myIntv); }, 1000);
    }

	//Handles the running clock
    function showTime()
    {
        var date = new Date();
        date.getTime();
        $('#displayTime').html("The current time is: " + date.toLocaleTimeString());//normal
        //$('#displayTime').html("The current time is: " + date.getTime());//ms output
    }
    function getCurrentTime()
    {
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
            startCounter = endCounter;
            endCounter += enumTimeSegment[i];
            var text = "rowarray text "+i;
            rowArray[i] = new tableRow((i + 1), text, startCounter, endCounter, tempRefArray[i]);
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
        this.tween; //variable to hold animation sequences so they can be stopped later
        this.animating = false;

    }
})//end of on doc ready

//animation while in progress
function inProgAnimation(htmlRowRef)
{
    var columnsArray = htmlRowRef.objRef.getElementsByTagName("td");//gets reference to row's "td" elements
    if (!htmlRowRef.isAnimating)//check to see if animation is already going on
    {
        htmlRowRef.isAnimating = true;//sets animating
        columnsArray[2].style.color = "white";//makes "td" elements visible
        htmlRowRef.tween = TweenMax.fromTo(htmlRowRef.objRef, 3.0, { backgroundColor: "transparent" }, { backgroundColor: "rgba(0, 189, 0, 0.5)", ease: Power1.easeInOut, repeat: -1, yoyo: true });
    }   
}

function finishedAnimation(htmlRowRef)
{

    htmlRowRef.tween.kill();//stops repeating animation
    htmlRowRef.isAnimating = false;//incase other animation gets implemented later
    TweenMax.to(htmlRowRef.objRef, 2.0, { backgroundColor: "transparent" });//ensures that bg fades to clear
    htmlRowRef.objRef.style.textDecoration = "line-through";//strikes out text

    var columnsArray = htmlRowRef.objRef.getElementsByTagName("td");//gets references to row objects
    columnsArray[2].innerHTML = "Completed";//sets status from in prog to done
}

function endAnimation()
{
    $('#thanks').html("Everyone, Thanks for coming");
}
