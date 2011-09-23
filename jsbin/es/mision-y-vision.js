$(document).ready(function(){				
	points_1 = [ [80, 40],
				[60, 80], [100, 80],
				[40, 120],[80, 120], [120, 120]];		
	$('div#left_bottom_content').mouseleave(function() {
		resetBlocks(points_1, '#left_bottom_content');
	});

	points_2 = [[250, 30], [270, 30],
				[230, 70], [290, 70],
				[250, 110], [270, 110]];
	$('div#right_top_content').mouseleave(function() {
		resetBlocks(points_2, '#right_top_content');
	});
	
	drawBlocks(points_1, '#left_bottom_content');
	drawBlocks(points_2, '#right_top_content');
});
