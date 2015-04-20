$(document).ready(function () {
    $('#contentBody').load("landing.html");
    animateText();
    $('#brand').click(function () {
        //$('#contentBody').html('<object data="landing.html">');
        $('#contentBody').load("landing.html");
        animateText("UMSL - Information Systems Programming Club");
    });
    $("#news").click(function () {
        //$('#contentBody').html('<object data="news.html">');
        $('#contentBody').load("news.html");
        animateText("News");
    });
    $(".tempLink").click(function () {
        //$('#contentBody').html('<object data="news.html">');
        $('#contentBody').load("news.html");
        animateText("News");
    });

    $('#purpose').click(function () {
        //$('#contentBody').html('<object data="purpose.html">');
        $('#contentBody').load("purpose.html");
        animateText("Why we are here");
    });
    $('#join').click(function () {
        //$('#contentBody').html('<object data="join.html">');
        $('#contentBody').load("join.html");
        animateText("Join the ISPC");
    });
    $('#meetings').click(function () {
        //$('#contentBody').html('<object data="meetings.html">');
        $('#contentBody').load("meetings.html");
        animateText("Meetings you've missed");
    });
    $('#links').click(function () {
        //$('#contentBody').html('<object data="links.html">');
        $('#contentBody').load("links.html");
        animateText("Links");
    });
    $('#umslHome').click(function () {
        window.location.href = 'http://umsl.edu/';
    });
    $('#contact').click(function () {
        $('#contentBody').load("contact.html");
        animateText("Contact us");
    });
})
function animateText(y) {
    $('#pageHeader').html(y);
    var text = $('#pageHeader');
    TweenMax.fromTo(text, 1.0, { right: "900px", rotationX:"720deg"},{ right: "0px", rotationX:"0deg", ease:Back.easeOut,delay:0.5});

}
function onOpen() {
    //$('#contentBody').load("landing.html");

    //setHeight();//probably can get rid of this since the load/html change
}

function loadNewPage() {
    //TODO: page load animation


    //test code
    /*
        var text = $('#pageHeader'),
        tl = new TimelineLite();

    tl.from(text, 1.2, { rotationX: "-360deg", right: "500px", color: "red", ease: Back.easeOut }, 0.02)
      .to(text, 1.2, { rotationX: "+360deg", left:"150px", color: "gold" }, 0.02)
    .to(text, 0.5, { rotationX: "-360deg", right:"150px", transformOrigin: "50% 50% 10", color: "initial" }, 0.02);
    */
}




function setHeight() {
    var h = window.innerHeight;
    var imageHeight = document.getElementById("mainNav").offsetHeight;
    var panHeight = document.getElementById("panelContainer").offsetHeight;
    h = h - (imageHeight+panHeight);
    $('#contentBody').height(h);            
}

$(window).resize(function()
{
    //setHeight();
});

//making navbar background more opaque as you scroll
$(window).scroll(function () {
    var imageHeight = document.getElementById("landImage").offsetHeight;//get image height, used as denominator
    var position = window.pageYOffset; //how far we are from top of window in px
    /*opacity is set with a value between 0.0 - 1.0, by using "numOfPixels-from-top/imageHeight" we esentially are getting a percentage
    of how much of the image we have scrolled past, once we reach the end of the image we are at "pixelsFromTop=imageHeight" or "i.e. 400px/400px=1.0"
    */
    var ratio = position / imageHeight;//making a fraction for the alpha value in rgba below
    var rgbValue = 300 * ratio; //using 300 instead of 255 so text is completely white(255,255,255) at about 85%
    rgbValue = rgbValue.toFixed();//remove decimals
    /*document.getElementById("mainNav").style.backgroundImage = "linear-gradient(rgba(72,78,85," + ratio + "), rgba(58,63,68," + ratio + ") 60%, rgba(49,53,57," + ratio + "))";//controls opacity
    document.getElementById("mainNav").style.color = "rgb(" + rgbValue + "," + rgbValue + "," + rgbValue + ")";//not exact, but gets from black to white*/
    $("#mainNav").css("backgroundImage","linear-gradient(rgba(72,78,85," + ratio + "), rgba(58,63,68," + ratio + ") 60%, rgba(49,53,57," + ratio + "))");//controls opacity
    $("#mainNav").css("color","rgb(" + rgbValue + "," + rgbValue + "," + rgbValue + ")");//not exact, but gets from black to white
    $("#navList").css("backgroundImage", "linear-gradient(rgba(72,78,85," + ratio + "), rgba(58,63,68," + ratio + ") 60%, rgba(49,53,57," + ratio + "))");//same deal but for navlist dropdown
    var iconTextColor = document.getElementsByClassName("icon-bar");
    var i = iconTextColor.length;
    while(i>0)
    {
        iconTextColor[i-1].style.backgroundColor = "rgb(" + rgbValue + "," + rgbValue + "," + rgbValue + ")";//to access array indices 0,1,2
        i = i-1;//decrement index
    }
    
    //document.getElementById("tester").innerHTML = rgbValue;
});


    
