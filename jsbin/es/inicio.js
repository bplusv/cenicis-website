$(document).ready(function(){		
	points = [[210, 30], [230, 30], [250, 30], [270, 30],
				[170, 70], [290, 70], [310, 70],
				[150, 110], [310, 110], [330, 110],
				[150, 150], [310, 150], [330, 150],
				[170, 190], [290, 190], [310, 190],
				[190, 230], [270, 230], [290, 230],
				[210, 270], [250, 270], [270, 270],
				[210, 310], [250, 310],
				[210, 350], [230, 350], [250, 350]];
				
	menu_points = [[190, 30], [150, 70], [130, 110], [130, 150], [150, 190], [170, 230], [190, 270]];
	var links = ['<a href="./contacto.html">Contacto</a>',
				'<a href="./gente.html">Gente</a>',
				'<a href="./mision-y-vision.html">Misi&oacute;n y Visi&oacute;n</a>',
				'<a href="./objetivos.html">Objetivos</a>',
				'<a href="./proyectos.html">Proyectos</a>',
				'<a href="./publicaciones.html">Publicaciones</a>',
				'<a href="./servicios.html">Servicios</a>'];
				
	draw_blocks(points, 'div#left_inner_content');
	draw_menu(menu_points, 'div#left_inner_content', links, 'right');
	
	start_blocks_animation();
});
