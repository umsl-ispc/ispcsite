$(document).ready(function ()
{
    var bodyArray = $("div[class~='updateItem'] p");
    var headerArray = $("div[class~='updateItem'] h3");
    var tl = new TimelineMax();


    $("div[class~='updateItem']").each(function(i){
        animIn(i);
    });

    function animIn(index)
    {
        tl.fromTo(bodyArray[index],1.25,{x:-200,y:200,opacity: 0.002},{x:0,y:0,opacity: 1, ease: Power3.easeInOut},index*1.25)
            .fromTo(headerArray[index],1.25,{x:-200,y:-200,opacity: 0.002},{x:0,y:0,opacity: 1, ease: Power3.easeInOut},index*1.25)
            .to(bodyArray[index],1.0,{rotation:360,ease: Circ.easeOut},"=-1")
            .to(headerArray[index],1.0,{rotation:360,ease: Circ.easeOut},"=-1");
    }
});