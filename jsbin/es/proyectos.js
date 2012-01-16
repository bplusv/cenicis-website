$(document).ready(function() {
	points = [[60, 30],
				[40, 70], [335, 70], [395, 70],[675, 70],
				[635, 110]];
	
	draw_blocks(points, '#middle1_content');
	draw_blocks(points, '#middle2_content');
	start_blocks_animation();
	
	menu_points = [[25, 25]];
	var links = ['<a href="./inicio.html">Regresar</a>'];
	draw_menu(menu_points, 'div#backer', links, 'left');
});