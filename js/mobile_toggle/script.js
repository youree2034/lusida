$(function(){

	
	$(".right> li> .font0").click(function(){
		$(this).next().slideToggle();
	});
	
		$(".right> li> .font1").click(function(){
		$(this).next().slideToggle();
	});
	


});

$(function(){
	$(".right> li> ul").click(function(){
		$(this).children().children("img").toggleClass("turn");
	});
});

































































