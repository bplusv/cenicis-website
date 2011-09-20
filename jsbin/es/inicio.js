$(document).ready(function(){				
	points = [[110, 30], [130, 30], [150, 30], [170, 30], [190, 30],
				[70, 70], [90, 70], [210, 70], [230, 70],
				[70, 110], [230, 110], [250, 110],
				[210, 150], [230, 150],
				[170, 190], [190, 190],
				[170, 230], [190, 230],
				
				[170, 310], [190, 310]];
				
	$('div#left_inner_content').mouseleave(function() {
		resetBlocks(points, '#left_inner_content');
	});
	
	drawBlocks(points, 'div#left_inner_content');
	$('#title_1').animate({ top: 30}, { queue: false, duration: 1500 }).animate({ opacity: 1 }, 1500);
	$('#text_1').animate({ opacity: 1 }, 2000);
	
});
