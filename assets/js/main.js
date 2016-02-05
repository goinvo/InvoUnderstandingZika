$(document).ready(function() {
	console.log("ready");

	$(window).bind('scroll', function() {
	    var distance = 50;
	    console.log("scroll");
	    if ($(window).scrollTop() > distance) {
	      $('nav').addClass('scrolled');
	    }
	    else {
	      $('nav').removeClass('scrolled');
	    }
	  });

});