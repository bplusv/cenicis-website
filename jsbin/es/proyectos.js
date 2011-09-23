$(document).ready(function() {
	points = [[60, 30],
				[40, 70], [335, 70], [395, 70],[675, 70],
				[635, 110]];
	$('div#middle_content').mouseleave(function() {
		resetBlocks(points, '#middle_content');
	});
	
	drawBlocks(points, '#middle_content');
});