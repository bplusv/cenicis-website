$(document).ready(function() {
	points = [[50, 30],
				[30, 70], [350, 70], [410, 70],[630, 70],
				[590, 110]];
	$('div#middle_content').mouseleave(function() {
		resetBlocks(points, '#middle_content');
	});
	
	drawBlocks(points, '#middle_content');
	$('#title_1').animate({ top: 0}, { queue: false, duration: 1500 }).animate({ opacity: 1 }, 1500);
	$('#text_1').animate({ opacity: 1 }, 2000);
	$('#title_2').animate({ top: 0}, { queue: false, duration: 1500 }).animate({ opacity: 1 }, 1500);
	$('#text_2').animate({ opacity: 1 }, 2000);
});