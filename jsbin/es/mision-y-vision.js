$(document).ready(function(){				
	points_1 = [ [80, 40],
				[60, 80], [100, 80],
				[40, 120],[80, 120], [120, 120]];		

	points_2 = [[250, 30], [270, 30],
				[230, 70], [290, 70],
				[250, 110], [270, 110]];

	drawBlocks(points_1, '#left_bottom_content');
	drawBlocks(points_2, '#right_top_content');
	
	menu_points = [[25, 25]];
	var links = ['<a href="./inicio.html">Regresar</a>'];
	drawBackMenu(menu_points, 'div#backer', links);
});
