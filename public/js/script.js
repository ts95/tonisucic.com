$(function() {
	var dotGenerator = new DotGenerator(0.5, $('#home'));
	dotGenerator.generateDots();

	$('.menu-icon').click(function() {
		$('.navbar-links').slideToggle('fast');
	});

	$('.navbar-links a').click(function() {
		if ($('.menu-icon').is(':visible')) {
			$('.navbar-links').slideToggle('fast');
		}
	});
});