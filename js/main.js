// JavaScript Document
$(document).ready( function(){
	/* PIE */
	if (window.PIE) {
		$('a.more,.xx,.error').each(function() {
		PIE.attach(this);
		});
	};
	



	var deck = new $.scrolldeck({
		buttons: '.nav-button',
		easing: 'easeInOutExpo'
	});
	
	
	

	
	$("a.up").click(function(){
		var selected = $(this).attr('href');	
		$.scrollTo(selected, 1000);		
		return false;
	});	
	
	
	
	
	
	(function($) {
		$(function() {
		
			$('.tab-list').delegate('li:not(.curent)', 'click', function() {
				$(this).addClass('curent').siblings().removeClass('curent')
					.parents('div.tabs-outer').find('div.box').hide().eq($(this).index()).fadeIn(150);
			})
		
		})
		})(jQuery);


});
//end ready

