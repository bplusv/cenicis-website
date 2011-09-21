$(document).ready(function(){
	points = [ [130, 50], [170, 50], [210, 50],
				[130, 90], [210, 90],
				[50, 130], [90, 130], [130, 130], [170, 130], [210, 130], [250, 130],[290, 130],
				[50, 170], [290, 170],
				[50, 210], [290, 210],
				[50, 250], [290, 250],
				[50, 290], [90, 290], [130, 290], [170, 290], [210, 290], [250, 290], [290, 290]];
	
	$('div#right_content').mouseleave(function() {
		resetBlocks(points, '#right_content');
	});

	
	drawBlocks(points, '#right_content');
	$('#title_1').animate({ top: 0}, { queue: false, duration: 1500 }).animate({ opacity: 1 }, 1500);
	$('#text_1').animate({ opacity: 1 }, 2000);
});
