$(document).ready(function(){		
	points = [[170, 30], [190, 30], [210, 30], [230, 30],
				[130, 70], [250, 70], [270, 70],
				[110, 110], [270, 110], [290, 110],
				[110, 150], [270, 150], [290, 150],
				[130, 190], [250, 190], [270, 190],
				[150, 230], [230, 230], [250, 230],
				[150, 270], [170, 270], [210, 270], [230, 270],
				[170, 310], [210, 310],
				[170, 350], [190, 350], [210, 350]];				
	menu_points = [[150, 30], [110, 70], [90, 110], [90, 150], [110, 190], [130, 230]];
	var links = ['<a href="./contacto.html">Contacto</a>',
				'<a href="./gente.html">Gente</a>',
				'<a href="./mision-y-vision.html">Misi&oacute;n y Visi&oacute;n</a>',
				'<a href="./objetivos.html">Objetivos</a>',
				'<a href="./proyectos.html">Proyectos</a>',
				'<a href="./servicios.html">Servicios</a>'];
	drawBlocks(points, 'div#left_inner_content');
	drawMenu(menu_points, 'div#left_inner_content', links);
	
});
