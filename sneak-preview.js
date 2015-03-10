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
jQuery(document).ready(function($) {
    var select = $('a[href$=".bmp"],a[href$=".gif"],a[href$=".jpg"],a[href$=".jpeg"],a[href$=".png"],a[href$=".BMP"],a[href$=".GIF"],a[href$=".JPG"],a[href$=".JPEG"],a[href$=".PNG"]a[href$=".png"]');
    select.attr('rel', 'fancybox');
    //select.addClass('class', 'fancybox');
    select.fancybox();
});



function settings() {
    $('#info').attr("style", "display: none;");
    $('#settings').attr("style", "display: block;");
}