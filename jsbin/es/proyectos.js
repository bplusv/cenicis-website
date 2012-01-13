$(document).ready(function() {
	points = [[60, 30],
				[40, 70], [335, 70], [395, 70],[675, 70],
				[635, 110]];
	
	drawBlocks(points, '#middle1_content');
	drawBlocks(points, '#middle2_content');
	startBlocksAnimation();
	
	menu_points = [[25, 25]];
	var links = ['<a href="./inicio.html">Regresar</a>'];
	drawMenu(menu_points, 'div#backer', links, 'left');
});