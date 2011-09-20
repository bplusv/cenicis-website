$(document).ready(function(){
	points = [[70, 30], [110, 30], [150, 30], [190, 30],
				[70, 70], [190, 70],
				[70, 110], [190, 110],
				[70, 150], [110, 150], [150, 150], [190, 150],
				[130, 190],
				[50, 270], [70, 260], [90, 250], [110, 240], [130, 230], [150, 240], [170, 250], [190, 260], [210, 270],
				[130, 270],
				[130, 310],
				[130, 350],
				[130, 390],
			];
	$('div#right_content').mouseleave(function() {
		resetBlocks(points, '#right_content');
	});

	
	drawBlocks(points, '#right_content');
	$('#title_1').animate({ top: 0}, { queue: false, duration: 1500 }).animate({ opacity: 1 }, 1500);
	$('#text_1').animate({ opacity: 1 }, 2000);
	
	$('#title_2').animate({ top: 220}, { queue: false, duration: 1500 }).animate({ opacity: 1 }, 1500);
	$('#text_2').animate({ opacity: 1 }, 2000);
});
