// ==UserScript==
// @name          Shopify Monkeywrench
// @namespace     http://www.mikemaelzer.com/
// @description	  show/hide Shopify collection types
// @author         Mike Maelzer
// @homepage      http://www.mikemaelzer.com/
// @include       https://*.myshopify.com/admin/*
// ==/UserScript==

var $;

// Add jQuery
(function(){
	if (typeof unsafeWindow.jQuery == 'undefined') {
		var GM_Head = document.getElementsByTagName('head')[0] || document.documentElement,
			GM_JQ = document.createElement('script');

		GM_JQ.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
		GM_JQ.type = 'text/javascript';
		GM_JQ.async = true;

		GM_Head.insertBefore(GM_JQ, GM_Head.firstChild);
	}
	GM_wait();
})();

// Check if jQuery's loaded
function GM_wait() {
	if (typeof unsafeWindow.jQuery == 'undefined') {
		window.setTimeout(GM_wait, 100);
	} else {
		$ = unsafeWindow.jQuery.noConflict(true);
		run();
	}
}

// All your GM code must be inside this function
function run() {
	$("#smart-collections > h3").after("<div style='height:30px;'><a id='hide-sc' href='#' style='float:left;padding:10px;'>Hide</a><a id='show-sc' href='#' style='float:left;padding:10px;'>Show</a></div>");
	$("#smart-collections > table").css('display', 'none');
	$("#smart-collections > div#pagination").css('display', 'none');	
	
	$("#hide-sc").click(function() {
		$("#smart-collections > table").css('display', 'none');
		$("#smart-collections > div#pagination").css('display', 'none');
	});
	$("#show-sc").click(function() {
		$("#smart-collections > table").css('display', '');
		$("#smart-collections > div#pagination").css('display', '');
	});
}