$(document).ready(function() {
	points = [[60, 30],
				[40, 70], [335, 70], [395, 70],[675, 70],
				[635, 110]];
	
	drawBlocks(points, '#middle_content');
	
	menu_points = [[25, 25]];
	var links = ['<a href="./inicio.html">Regresar</a>'];
	drawBackMenu(menu_points, 'div#backer', links);
});