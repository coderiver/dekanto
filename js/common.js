$(document).ready(function() {

	// accordeon sidebar__menu
	$(".js-sidebar__sub-menu").hide();
	$(".js-sidebar__menu").each(function(){
		$(this).click(function(){
			$(".js-sidebar__sub-menu").slideUp();
			if($(this).hasClass('is-active')){
				$(this).removeClass('is-active');
				$(this).parent().find(".sidebar__sub-menu").slideUp();
			}
			else{
				$(".js-sidebar__menu").removeClass('is-active');
				$(this).addClass('is-active');
				$(this).parent().find(".sidebar__sub-menu").slideDown();
			}
			




			// $(this).toggleClass('is-active');
			// $(".js-sidebar__sub-menu").hide();
			// $(this).find(".sidebar__sub-menu").slideToggle();
		});
	});

});