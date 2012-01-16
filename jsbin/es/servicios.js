$(document).ready(function(){
	points = [ [130, 50], [170, 50], [210, 50],
				[130, 90], [210, 90],
				[50, 130], [90, 130], [130, 130], [170, 130], [210, 130], [250, 130],[290, 130],
				[50, 170], [290, 170],
				[50, 210], [290, 210],
				[50, 250], [290, 250],
				[50, 290], [90, 290], [130, 290], [170, 290], [210, 290], [250, 290], [290, 290]];
	
	draw_blocks(points, '#right_content');
	start_blocks_animation();
	
	menu_points = [[25, 25]];
	var links = ['<a href="./inicio.html">Regresar</a>'];
	draw_menu(menu_points, 'div#backer', links, 'left');
});
