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
		block.css('opacity', 0.25);
		
		var opacity = (Math.floor(Math.random() * 41) + 10) *.01;
		var fade_time = (Math.floor(Math.random() * 3001) + 1500);

		$(container_selector).append(block);
		
		block.mouseenter(function() {
			$(this).stop().fadeTo(0, 1.0);
		});
		block.mouseleave(function() {
				$(this).fadeTo(500, 0);
		});
		block.animate({ left: coordinates[i][0] - size / 2, top: coordinates[i][1] - size / 2 },
						{ queue: false, duration: 1500 }).animate(
							{ opacity: opacity }, { duration: fade_time });
	}
}

function resetBlocks(coordinates, container_selector) {
	$(container_selector + ' > img').addClass('trash');
	$('.trash').stop().fadeTo(1000, 0, function() {
		$('.trash').remove();
	 });
	drawBlocks(coordinates, container_selector);
}

function drawMenu(coordinates, container_selector, links) {
	for (i in coordinates) {
		var link = $(links[i]).addClass('gendai_menu');
		link.css('left', $(container_selector).width() / 2);
		link.css('top', $(container_selector).height() / 2);
		link.css('opacity', 0);
		
		link.mouseenter(function() {
			$(this).stop().fadeTo(0, 1.0);
			$(this).css('background-position', '100% 0%');
		});
		link.mouseleave(function() {
			$(this).fadeTo(500, 0.60);
			$(this).css('background-position', '0% 0%');
		});
		$(container_selector).append(link);
		link.animate({ left: coordinates[i][0] - link.width(), top: coordinates[i][1] - link.height() },
						{ queue: false, duration: 1500 }).animate(
						{ opacity: 0.60 }, { duration: 3500 });;
		
	}
}

function resetMenu(coordinates, container_selector, links) {
	$(container_selector + ' > a').addClass('trash');
	$('.trash').stop().fadeTo(1000, 0, function() {
		$('.trash').remove();
	 });
	drawMenu(coordinates, container_selector, links);
}