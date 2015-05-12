$(function() {
	var dotGenerator = new DotGenerator(0.5, $('#home'));
	dotGenerator.generateDots();

	$('a[href^="#"]').on('click',function (e) {
		var target = this.hash;
		var $target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 500, 'swing', function () {
			window.location.hash = target;
		});

		return false;
	});


	var toggleSpeed = 'fast';

	$('.menu-icon').click(function() {
		$('.navbar-links').slideToggle(toggleSpeed);
	});

	$('.navbar-links a').click(function() {
		if ($('.menu-icon').is(':visible')) {
			$('.navbar-links').slideToggle(toggleSpeed);
		}
	});
});