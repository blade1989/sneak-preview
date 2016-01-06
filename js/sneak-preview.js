/*
-----------------------------------------------
Author		:	Imri Paloja
Email   	:	imri.paloja@gmail.com
HomePage	:	www.eurobytes.nl
name 		:	Sneak Previewer HTML5 previewer
Version 	:	0.1
----------------------------------------------- 
*/

// fancybox
$(document).ready(function() {
    var select = $('a[href$=".bmp"],a[href$=".gif"],a[href$=".jpg"],a[href$=".jpeg"],a[href$=".png"],a[href$=".BMP"],a[href$=".GIF"],a[href$=".JPG"],a[href$=".JPEG"],a[href$=".PNG"],a[href$=".png"]');
    select.attr('rel', 'sneak');
    select.addClass('sneak', 'class');
    //select.fancybox();

    //$('.sneak-preview').attr('style', "background: linear-gradient(to bottom, #f9f9f9, #ffffff) repeat scroll 0 0 rgba(0, 0, 0, 0.75);box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3) inset;");
     //$(".sneak-preview").attr("class", ".sneak-preview");
    // $("#holder").attr("style", "width: 100%;height: 750px;");
    // $("#eetextarea").attr("class", "hidden");
    //$('#source').attr('onclick', 'inlineediting()');
    //$('#eetextarea').replaceWith("<textarea id=\"holder\" onchange=\"copy();\">" + $('#eetextarea').html() + "</textarea>");

    	$(this).removeAttr('href');
});



// $("a.sneak img").click(function() {
//     var index =
// "<div id=\"overlay\">" +

//     "<a class=\"sneak-left\" href=\"#\">&lt;</a>" +

//         "<figure class=\"sneak-image-holder\">" +
//             "<span class=\"close\" onclick=\"closeoverlay()\">X</span>";

//     // searches every tag you put in here
//     $("a.sneak").each(function() {

//         el = $(this);
//         title = el.text();
//         //id = "#" + el.text().replace(/\s/g, ""); // get the content of the header tags removes spaces and puts a # in front of it.
//         //hid = el.text().replace(/\s/g, ""); // get the content of the header tags
//         //el.attr('id', "" + hid + ""); // applies the header content in the id tag.

//         lHeaders =
//                 "<img alt=\" " + el + "  \" title=\"  \" src=\"  \">" +
//                    "<figcaption class=\"title\">" +
//                       "<p>" +                       
//                         " "+ el + " " +
//                       "</p>";

//         index += lHeaders;

//     });

//     index +=                      "</p>" +
//                    "</figcaption>" +
//         "</figure>" +

//     "<a class=\"sneak-right\" href=\"#\">&gt;</a>" +

// "</div>";

//    $("body").prepend(index);
// });





	//$('#eetextarea').replaceWith("<textarea id=\"holder\" onchange=\"copy();\">" + $('#eetextarea').html() + "</textarea>");



$(document).ready(function(){

	$(".sneak").click(function() {
	    var index =
	"<div id=\"overlay\">" +

	    "<a class=\"sneak-left\" href=\"#\">&lt;</a>" +

	        "<figure class=\"sneak-image-holder\">" +
	            "<span class=\"close\" onclick=\"closeoverlay()\">X</span>";

	    // searches every tag you put in here
	    $("a.sneak").each(function() {

	        el = $(this);
	        title = el.text();
	        //id = "#" + el.text().replace(/\s/g, ""); // get the content of the header tags removes spaces and puts a # in front of it.
	        //hid = el.text().replace(/\s/g, ""); // get the content of the header tags
	        //el.attr('id', "" + hid + ""); // applies the header content in the id tag.

	        lHeaders =
	                "<img alt=\" \" title=\"  \" src=\"  \">" +
	                   "<figcaption class=\"title\">" +
	                      "<p>" +                       
	                        "" +
	                      "</p>";

	        index += lHeaders;

	    });

	    index +=                      "</p>" +
	                   "</figcaption>" +
	        "</figure>" +

	    "<a class=\"sneak-right\" href=\"#\">&gt;</a>" +

	"</div>";

	   $("body").prepend(index);
	});

});








// $(".sneak-preview").click(function() {
//     var pageinfo =
//         "<div id=\"settingswindow\">" +
// 		"</div>";

//     $("body").prepend(pageinfo);
// });


function sneak() {
    var pageinfo =
        "<div id=\"overlay\">" +
		"</div>";

    $("body").prepend(pageinfo);



    var sneakstyle =
	"<style type=\"text/css\" id=\"sneakstyle\">" +
		"body {" +
	 		"overflow:hidden;" +
		"}" +
	"</style>";

$("head").prepend(sneakstyle);

}

function closeoverlay() {
    $('#overlay').remove();
    $('#sneakstyle').remove();
}

// function settings() {
//     $('#info').attr("style", "display: none;");
//     $('#settings').attr("style", "display: block;");
// }


