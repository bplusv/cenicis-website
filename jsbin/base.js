function change_page(page_sel, new_page_x, new_page_y, time_span) {
	$(page_sel).animate({
		left: new_page_x,
		top: new_page_y
		}, { queue: false, duration: time_span }
	);
}

function change_cont(cont_sel, new_cont_x, new_cont_y, new_cont_width, new_cont_height, new_opacity, time_span) {
	$(cont_sel).animate({
		height: new_cont_height,
		left: new_cont_x,
		opacity: new_opacity,
		top: new_cont_y,
		width: new_cont_width
		}, { queue: false, duration: time_span }
	);
}

function drawBlocks(coordinates, container_selector) {
	for (i in coordinates) {
		var block = $('<img />').addClass('gendai_block');
		block.attr('src', '../../pix/gendai_block.png');
		
		var size = Math.floor(Math.random() * 101) + 10;
		block.css('width', size);
		block.css('height', size);
		block.css('left', $(container_selector).width() / 2);
		block.css('top', $(container_selector).height() / 2);
		block.css('opacity', 0);
		
		var opacity = (Math.floor(Math.random() * 61) + 10) *.01;
		var fade_time = (Math.floor(Math.random() * 2001) + 500);

		block.animate({ left: coordinates[i][0] - size / 2, top: coordinates[i][1] - size / 2 },
						{ queue: false, duration: 700 }).animate(
							{ opacity: opacity }, { duration: fade_time });
		$(container_selector).append(block);
		
		block.mouseenter(function() {
			$(this).stop().fadeTo(0, 1.0);
		});
		block.mouseleave(function() {
				$(this).fadeTo(500, 0);
		});
	}
}