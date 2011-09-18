$(document).ready(function(){				
	points_1 = [ [50, 30],
				[30, 70], [70, 70],
				[10, 110],[50, 110], [90, 110],];		
	$('div#left_bottom_content').mouseleave(function() {
		resetBlocks(points_1, '#left_bottom_content');
	});

	points_2 = [[250, 30], [270, 30],
				[230, 70], [290, 70],
				[250, 110], [270, 110],];
	$('div#right_top_content').mouseleave(function() {
		resetBlocks(points_2, '#right_top_content');
	});
	
	drawBlocks(points_1, '#left_bottom_content');
	$('#title_1').animate({ top: 0}, { queue: false, duration: 1500 }).animate({ opacity: 1 }, 1500);
	$('#txt_1').animate({ opacity: 1 }, 2000);
	
	drawBlocks(points_2, '#right_top_content');
	$('#title_2').animate({ top: 0}, { queue: false, duration: 1500 }).animate({ opacity: 1 }, 1500);
	$('#txt_2').animate({ opacity: 1 }, 2000);
	
});
