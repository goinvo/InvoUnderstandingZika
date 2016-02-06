$(document).ready(function() {
	console.log("ready");

	$(window).bind('scroll', function() {
	    var distance = 50;
	    
	    if ($(window).scrollTop() > distance) {
	      $('nav').addClass('scrolled');
	    }
	    else {
	      $('nav').removeClass('scrolled');
	    }
	  });

	$(".menu li").bind("click", function(){
		var ul = $(this).parent();

		if($(ul).hasClass("opened")){
			$(ul).removeClass("opened");
		}else{
			$(ul).addClass("opened");
		}
		if($(this).attr("id") === "page-title"){
			window.scrollTo(0,0);
			$(ul).removeClass("opened");
		}
	});
});