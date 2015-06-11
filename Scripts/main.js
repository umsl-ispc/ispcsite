$(document).ready(function () {
    loadToHash();

    //OOP style click loader
    $("a[class^='navitem']").click(function(e){//jquery selector for all <a> elements that contain at least the class navitem but possibly others
        var targetHTML = e.currentTarget.attributes.id.nodeValue;//remember to use the debugger to help yourself
        $("#contentBody").load(targetHTML + ".html");//append ".html" and load the page
        animateText(e.currentTarget.attributes.title.nodeValue);//from the event we find what target was clicked on then its attributes.title and it's value
    });

    $('#umslHome').click(function () {
        window.location.href = 'http://umsl.edu/';
    });
});

//listener for hashchange allows back/forward buttons to happen
window.onhashchange = function (){
  loadToHash();
};

function animateText(y) {
    $('#pageHeader').html(y);
    var text = $('#pageHeader');
    TweenMax.fromTo(text, 1.0, { right: "900px", rotationX:"720deg"},{ right: "0px", rotationX:"0deg", ease:Back.easeOut,delay:0.5});
}
function loadToHash(){
    var page = document.location.hash;//get hash of the url that was entered
    if (page == "")//if no hash was found
    {
        page = "#landing";//instead pretend it was set to landing page
    }
    page = page.replace(/^#/, '');//strip the hash replace with nothing
    $('#contentBody').load(page + ".html");//load to the requested url based on hash received
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
    var viewCheck = $("#burgerButton").css("display");//gets the navbar property of the "burgerbutton" to see if navbar is collapsed
    var imageHeight = document.getElementById("landImage").offsetHeight;//get image height, used as denominator + position check
    var position = window.pageYOffset; //how far we are from top of window in px
    var fullHeight = $("#mainNav").height() + position;





    if (imageHeight < fullHeight)
    {
        $("#contentBody").css({"margin-top": ($("#mainNav").height()+$("#pagePanel").height())});
        console.log("pos is: " + position + ". height is: " + imageHeight);
        console.log("navheight is: " + $("#mainNav").height());
        $("#pagePanel").css({"position":"fixed", "top":$("#mainNav").height(), "width":"100%", "border-style": "solid"});//freeze panel
        $("#mainNav").css({"border-style": "hidden"});
    }else{
        $("#contentBody").css({"margin-top": 0});
        $("#pagePanel").css({"position":"static", "top":0, "border-style": "initial"});
        $("#mainNav").css({"border-bottom": "1px solid rgba(0, 0, 0, 0.6)"});
    }
    if(viewCheck == "none")//if the burgerbutton's display is set to none, then menu is full and we allow script
    {
        /*opacity is set with a value between 0.0 - 1.0, by using "numOfPixels-from-top/imageHeight" we esentially are getting a percentage
         of how much of the image we have scrolled past, once we reach the end of the image we are at "pixelsFromTop=imageHeight" or "i.e. 400px/400px=1.0"
         */
        var ratio = position / imageHeight;//making a fraction for the alpha value in rgba below
        var rgbValue = 300 * ratio; //using 300 instead of 255 so text is still completely white(255,255,255) at about 85% scroll
        rgbValue = rgbValue.toFixed();//remove decimals
        /*document.getElementById("mainNav").style.backgroundImage = "linear-gradient(rgba(72,78,85," + ratio + "), rgba(58,63,68," + ratio + ") 60%, rgba(49,53,57," + ratio + "))";//controls opacity
         document.getElementById("mainNav").style.color = "rgb(" + rgbValue + "," + rgbValue + "," + rgbValue + ")";//not exact, but gets from black to white*/
        $("#mainNav").css("backgroundImage","linear-gradient(rgba(72,78,85," + ratio + "), rgba(58,63,68," + ratio + ") 60%, rgba(49,53,57," + ratio + "))")//controls BG image opacity
            .css("color","rgb(" + rgbValue + "," + rgbValue + "," + rgbValue + ")");//not exact, but gets the text color from black to white
        $("#navList").css("backgroundImage", "linear-gradient(rgba(72,78,85," + ratio + "), rgba(58,63,68," + ratio + ") 60%, rgba(49,53,57," + ratio + "))");//same deal but for navlist dropdown
        var iconTextColor = document.getElementsByClassName("icon-bar");
        var i = iconTextColor.length;
        while(i>0)
        {
            iconTextColor[i-1].style.backgroundColor = "rgb(" + rgbValue + "," + rgbValue + "," + rgbValue + ")";//to access array indices 0,1,2
            i = i-1;
        }
    }
    //document.getElementById("tester").innerHTML = rgbValue;
});


    
