$(function() {
	var baseInterval = 0.5;

	var dotGenerator = new DotGenerator(baseInterval, $('body'));
	dotGenerator.generateDots();
});