$(document).ready(function() {

	// accordion sidebar__menu
	$(".js-sidebar__sub-menu").hide();
	$(".js-sidebar__menu").each(function(){
		$(this).click(function(){
			$(".js-sidebar__sub-menu").slideUp();
			$(".sidebar__l2-menu").slideUp();
			if($(this).hasClass('is-active')){
				$(this).removeClass('is-active');
				$(this).parent().find(".sidebar__sub-menu").slideUp();
			}
			else{
				$(".js-sidebar__menu").removeClass('is-active');
				$(".js-sidebar__l2-menu").removeClass('is-active');
				$(this).addClass('is-active');
				$(this).parent().find(".sidebar__sub-menu").slideDown();
			}
		});
	});

	$(".sidebar__l2-menu").hide();
	$(".js-sidebar__l2-menu").each(function(){
		$(this).click(function(){
			$(".sidebar__l2-menu").slideUp();
			if($(this).hasClass('is-active')){
				$(this).removeClass('is-active');
				$(this).parent().find(".sidebar__l2-menu").slideUp();
			}
			else{
				$(".js-sidebar__l2-menu").removeClass('is-active');
				$(this).addClass('is-active');
				$(this).parent().find(".sidebar__l2-menu").slideDown();
			}
		});
	});

});