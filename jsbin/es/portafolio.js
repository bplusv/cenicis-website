$(document).ready(function() {

	points = [[250, 30], [270, 30],
					[230, 70], [290, 70],
					[250, 110], [270, 110],];
	$('div#middle_content').mouseleave(function() {
		resetBlocks(points, '#middle_content');
	});
	
	drawBlocks(points, '#middle_content');
	$('#title_1').animate({ top: 0}, { queue: false, duration: 1500 }).animate({ opacity: 1 }, 1500);
	$('#text_1').animate({ opacity: 1 }, 2000);
	$('#title_2').animate({ top: 0}, { queue: false, duration: 1500 }).animate({ opacity: 1 }, 1500);
	$('#text_2').animate({ opacity: 1 }, 2000);
});