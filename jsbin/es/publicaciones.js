$(document).ready(function(){
	points = [  

				[100, 30], [140, 30], [180, 30], [220, 30],     [260, 30],
				[100, 70],                                      [260, 70],
				[100, 110],                                     [260, 110],
				[100, 150],                                     [260, 150],
				[100, 190],                                     [260, 190],
				[100, 230], [140, 230], [180, 230], [220, 230], [260, 230],
			];

	drawBlocks(points, '#right_content');
	
	menu_points = [[25, 25]];
	var links = ['<a href="./inicio.html">Regresar</a>'];
	drawBackMenu(menu_points, 'div#backer', links);
});
