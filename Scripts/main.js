$(document).ready(function () {
    loadToHash();//gives us a page to initially load

    //OOP style click loader
    $("a[class~='navitem']").click(function(e){//jquery selector for all <a> elements that contain at least the class navitem but possibly others
        var targetHTML = e.currentTarget.attributes.id.nodeValue;//remember to use the debugger to help yourself
        $("#contentBody").load(targetHTML + ".html",function(responseText){//append ".html" and load the page, success callback function
            /*if page is loaded get page title and animate it*/
            var title = responseText.match(/<title>([^<]*)/)[1];
            animateText(title);
        });
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

/*loads the page indicated by url's hash or to landing page if none*/
function loadToHash(){
    var page = document.location.hash;//get hash of the url that was entered
    if (page == "")//if no hash was found
    {
        page = "#landing";//instead pretend it was set to landing page
    }
    page = page.replace(/^#/, '');//strip the actual hash, replace it with nothing
    $('#contentBody').load(page + ".html",function(responseText){
        var title = responseText.match(/<title>([^<]*)/)[1];
        animateText(title);
    });//load to the requested url based on hash received
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

/*
* Handles changes that occur on page scroll
* */
$(window).scroll(function () {
    var viewCheck = $("#burgerButton").css("display");//gets the navbar property of the "burgerbutton" to see if navbar is collapsed
    var imageHeight = document.getElementById("landImage").offsetHeight;//get image height, used as denominator + position check
    var position = window.pageYOffset; //how far we are from top of window in px
    var navHeight = $("#mainNav").outerHeight(true); //calculated height of the nav element including margins
    var panelHeight = $("#pagePanel").outerHeight(true); //calculated height of the page "descriptor"
    var checkHeight = navHeight + position; //height value to test against for attaching

    /*
    * This handles "attaching" the page panel to the nav area
    * */
    if (imageHeight < checkHeight)//if we have scrolled past the picture
    {
        /*
        * Change position to fixed, set it's distance from the top directly under navbar,
        * set text to white and add bottom border
        * */
        $("#pagePanel").css({"position":"fixed", "top": navHeight, "width":"100%","color":"white","border-bottom-color":"black"});
        /*
        * So page doesn't "jump" from no longer having pagePanel's height value in layout
        * add margin of the to top equal to panelHeight
        * */
        $("#panelContainer").css({"margin-top": panelHeight});
        /*set black bottom border to invisible so that navbar looks like a single item*/
        $("#mainNav").css({"border-bottom-color": "transparent"});
    }
    //before we have scrolled past the picture
    else{
        /*resets panel into DOM structure and resets values*/
        $("#pagePanel").css({"position":"static", "top":0,"color":"inherit", "border-bottom-color":"transparent"});
        /*removes top margin since panel is back*/
        $("#panelContainer").css({"margin-top": 0});
        /*shows bottom border on nav element again*/
        $("#mainNav").css({"border-bottom": "1px solid rgba(0, 0, 0, 0.6)"});
    }

    /*
    * this handles making the navbar background more opaque as you scroll not on small screens though
    * if the burgerbutton's display is set to none, then menu is full and we allow script
    * otherwise burgerbutton is visible so we are on a mobile and skip script
    * */
    if(viewCheck == "none")//if the burgerbutton's display is set to none, then menu is full and we allow script
    {
        /*opacity is set with a value between 0.0 - 1.0, by using "numOfPixels-from-top/imageHeight" we esentially are getting a percentage
         of how much of the image we have scrolled past, once we reach the end of the image we are at "pixelsFromTop=imageHeight" or "i.e. 400px/400px=1.0"
         */
        var ratio = position / imageHeight;//making a fraction for the alpha value in rgba below
        var rgbValue = 300 * ratio; //using 300 instead of 255 so text is still completely white(255,255,255) at about 85% scroll
        rgbValue = rgbValue.toFixed();//remove decimals

        //new testing
        $("#mainNav").css({"background-color":"rgba(46,51,56," + ratio + ")"})//controls BG image opacity
            .css("color","rgb(" + rgbValue + "," + rgbValue + "," + rgbValue + ")");//not exact, but gets the text color from black to white
        $("#navList").css({"background-color":"rgba(46,51,56," + ratio + ")"});

        //old linear grad
        /*$("#mainNav").css("backgroundImage","linear-gradient(rgba(72,78,85," + ratio + "), rgba(58,63,68," + ratio + ") 60%, rgba(49,53,57," + ratio + "))")//controls BG image opacity
            .css("color","rgb(" + rgbValue + "," + rgbValue + "," + rgbValue + ")");//not exact, but gets the text color from black to white
        $("#navList").css("backgroundImage", "linear-gradient(rgba(72,78,85," + ratio + "), rgba(58,63,68," + ratio + ") 60%, rgba(49,53,57," + ratio + "))");//same deal but for navlist dropdown
        */

        /*sets background color for drop-down list items*/
        var iconTextColor = document.getElementsByClassName("icon-bar");//array of all the items
        var i = iconTextColor.length; //number of items
        while(i>0)
        {
            iconTextColor[i-1].style.backgroundColor = "rgb(" + rgbValue + "," + rgbValue + "," + rgbValue + ")";//to access array indices 0,1,2
            i = i-1;
        }
    }//end of if
});//end of scroll function


    
