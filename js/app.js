$(document).ready(function() {
	$('.menu-nav .nav .nav-item').click(function(e) {
		e.preventDefault();

		var section = $(this).attr('data-section');

		$('.menu-nav .nav .nav-item').removeClass('item-active');
		$(this).addClass('item-active');


		$('.section').slideUp();
		$('.section[id="'+section+'"]').slideDown();
	});
});