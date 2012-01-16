$(document).ready(function(){	
	points = [[130, 50], [170, 50], [210, 50], [250, 50],
				[210, 90], [250, 90],
				[170, 130], [250, 130],
				[130, 170], [250, 170],
				[90, 210],
				
				
				];

	draw_blocks(points, '#bottom_content');
	start_blocks_animation();
	
	menu_points = [[25, 25]];
	var links = ['<a href="./inicio.html">Regresar</a>'];
	draw_menu(menu_points, 'div#backer', links, 'left');
});