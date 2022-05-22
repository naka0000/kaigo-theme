// JavaScript Document

//hamburger menu
$(".openbtn").click(function () {
  $(this).toggleClass('active');
    $("#g-nav").toggleClass('panelactive');
    $(".circle-bg").toggleClass('circleactive');
});

$("#g-nav a").click(function () {
    $(".openbtn").removeClass('active');
    $("#g-nav").removeClass('panelactive');
    $(".circle-bg").removeClass('circleactive');
});

//smooth scroll
$(function(){
  $('a[href^="#"]').click(function(){
    let speed = 500;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});	

//fixed button
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
      $('.fx').addClass('fixed');
    } else {
      $('.fx').removeClass('fixed');
    }
  });
});

//animation
function Animate(){
	$('.bgLRextendTrigger').each(function(){
		var elemPos = $(this).offset().top+100;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('bgLRextend');
		}else{
			$(this).removeClass('bgLRextend');
		}
	});	

	$('.bgappearTrigger').each(function(){
		var elemPos = $(this).offset().top+100;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('bgappear');
		}else{
			$(this).removeClass('bgappear');
		}
	});	
	
	$('.fadeUpTrigger').each(function(){
		var elemPos = $(this).offset().top+100;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('fadeUp');
		}else{
		$(this).removeClass('fadeUp');
		}
	});
	
	$('.bounceInLeftTrigger').each(function(){
		var elemPos = $(this).offset().top+150;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('bounceInLeft');
		}else{
		$(this).removeClass('bounceInLeft');
		}
	});
	
	$('.zoomInTrigger').each(function(){
		var elemPos = $(this).offset().top+150;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('zoomIn');
		}else{
		$(this).removeClass('zoomIn');
		}
	});	
	$('.bounceInTrigger').each(function(){
		var elemPos = $(this).offset().top+50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('bounceIn');
		}else{
		$(this).removeClass('bounceIn');
		}
	});	
	$('.bounceInRightTrigger').each(function(){
		var elemPos = $(this).offset().top+50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('bounceInRight');
		}else{
		$(this).removeClass('bounceInRight');
		}
	});	
	
	$('.bounceInDownTrigger').each(function(){
		var elemPos = $(this).offset().top+50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('bounceInDown');
		}else{
		$(this).removeClass('bounceInDown');
		}
	});	

	$('.bounceInUpTrigger').each(function(){
		var elemPos = $(this).offset().top-50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('bounceInUp');
		}else{
		$(this).removeClass('bounceInUp');
		}
	});	
	
	$('.flipInXTrigger').each(function(){
		var elemPos = $(this).offset().top-50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('flipInX');
		}else{
		$(this).removeClass('flipInX');
		}
	});

}
$(window).scroll(function (){
	Animate();
});
	
$(window).on('load', function(){
	Animate();
});

