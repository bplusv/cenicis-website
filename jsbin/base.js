function drawBlocks(coordinates, container_selector) {
	for (i in coordinates) {
		var block = $('<img />').addClass('gendai_block');
		var blockNum = (Math.floor(Math.random() * 4) + 1);
		block.attr('src', '../../webdesign/gendai_block' + blockNum + '.png');
		var size = Math.floor(Math.random() * 41) + 10;
		block.css('width', size);
		block.css('height', size);
		block.css('left', $(container_selector).width() / 2);
		block.css('top', $(container_selector).height() / 2);
		block.css('opacity', 1.0);
		
		//var opacity = (Math.floor(Math.random() * 71) + 35) *.01;
		opacity = 1.0;
		block.attr('org_opacity', opacity);
		var fade_time = (Math.floor(Math.random() * 3001) + 1500);

		$(container_selector).append(block);
		
		block.attr('final_pos_left', coordinates[i][0] - size / 2);
		block.attr('final_pos_top', coordinates[i][1] - size / 2);
		
		block.click(function() {
			$(this).attr('src', '../../webdesign/gendai_block2.png');
			var block_final_pos_left = parseInt($(this).parent().width() / 2 - $(this).width() / 2);
			var block_final_pos_top = parseInt($(this).parent().height() / 2 - $(this).height() / 2);
			$(this).stop().animate({ opacity: 1 }, { queue: false, duration: 0 }).animate(
				{ left: block_final_pos_left, top: block_final_pos_top }, 200);
		});
		block.mouseenter(function() {
			var block_final_pos_left = parseInt($(this).attr('final_pos_left'));
			var block_final_pos_top = parseInt($(this).attr('final_pos_top'));
			$(this).stop().animate({ opacity: 1.0 }, { queue: false, duration: 0 }).animate(
				{ left: block_final_pos_left, top: block_final_pos_top }, 200);
		});
		block.mouseleave(function() {
			var org_opacity = parseFloat($(this).attr('org_opacity'));
			$(this).fadeTo(500, org_opacity);
		});
		
		block.animate({ left: coordinates[i][0] - size / 2, top: coordinates[i][1] - size / 2 }, { queue: false, duration: 1500 }).animate({ opacity: opacity }, { duration: fade_time });
	}
}

function resetBlocks(coordinates, container_selector) {
	$(container_selector + ' > img').addClass('trash');
	$('.trash').stop().fadeTo(1000, 0, function() {
		$('.trash').remove();
	 });
	drawBlocks(coordinates, container_selector);
}

var blocks = [];
function drawMenu(coordinates, container_selector, links) {
	for (i in coordinates) {
		// blocks //////////////////////////////////////////////////////////////////////////
		var block = $('<img />').addClass('gendai_block');
		blocks.push(block);
		block.attr('src', '../../webdesign/gendai_block1.png');
		var size = Math.floor(Math.random() * 41) + 10;
		block.css('width', size);
		block.css('height', size);
		block.css('left', $(container_selector).width() / 2);
		block.css('top', $(container_selector).height() / 2);
		block.css('opacity', 1.0);
		//var opacity = (Math.floor(Math.random() * 71) + 35) *.01;
		opacity = 1.0;
		block.attr('org_opacity', opacity);
		var fade_time = (Math.floor(Math.random() * 3001) + 1500);
		$(container_selector).append(block);
		
		block.mouseenter(function() {
			$(this).attr('src', '../../webdesign/gendai_block1.png');
			var block_final_pos_left = parseInt($(this).attr('final_pos_left'));
			var block_final_pos_top = parseInt($(this).attr('final_pos_top'));
			$(this).stop().animate({ opacity: 1 }, { queue: false, duration: 0 }).animate(
				{ left: block_final_pos_left, top: block_final_pos_top }, 200);
		});
		block.mouseleave(function() {
			var org_opacity = parseFloat($(this).attr('org_opacity'));
			$(this).fadeTo(500, org_opacity);
		});
		
		block.attr('final_pos_left', coordinates[i][0] - size / 2);
		block.attr('final_pos_top', coordinates[i][1] - size / 2);
		block.animate({ left: coordinates[i][0] - size / 2, top: coordinates[i][1] - size / 2 },
						{ queue: false, duration: 1500 }).animate(
							{ opacity: opacity }, { duration: fade_time });
		/////////////////////////////////////////////////////////////////////////////////////
		
		// links ==========================================================================
		var link = $(links[i]).addClass('gendai_menu');
		link.css('left', $(container_selector).width() / 2);
		link.css('top', $(container_selector).height() / 2);
		link.css('opacity', 1.0);
		link.css('z-index', 99);
		link.css('color', '#fff');
		link.css('text-decoration', 'none');
		
		$(container_selector).append(link);
		link.mouseenter(function() {
			var menu_block_i = parseInt($(this).attr('menu_block_i'));
			block = blocks[menu_block_i];
			var block_final_pos_left = parseInt(block.attr('final_pos_left'));
			var block_final_pos_top = parseInt(block.attr('final_pos_top'));
			block.attr('src', '../../webdesign/gendai_block3.png');
			block.stop().animate({ opacity: 1 }, { queue: false, duration: 0 }).animate(
				{ left: block_final_pos_left, top: block_final_pos_top }, 200);
				
			$(this).css('background-position', '-118px 0px');
			var menu_final_pos_left = parseInt($(this).attr('final_pos_left'));
			var menu_final_pos_top = parseInt($(this).attr('final_pos_top'));
			$(this).stop().animate({ opacity: 1.0 }, { queue: false, duration: 200 }).animate(
				{ left: menu_final_pos_left + 10, top: menu_final_pos_top }, 200);
		});
		link.mouseleave(function() {
			var menu_block_i = parseInt($(this).attr('menu_block_i'));
			block = blocks[menu_block_i];
			var block_final_pos_left = parseInt(block.attr('final_pos_left'));
			var block_final_pos_top = parseInt(block.attr('final_pos_top'));
			block.attr('src', '../../webdesign/gendai_block1.png');
			block.stop().animate({ opacity: 1.0}, { queue: false, duration: 0 }).animate(
				{ left: block_final_pos_left, top: block_final_pos_top }, 200);
			
			$(this).css('background-position', '0 0');
			var menu_final_pos_left = parseInt($(this).attr('final_pos_left'));
			var menu_final_pos_top = parseInt($(this).attr('final_pos_top'));
			$(this).stop().animate({ opacity: 1.0 }, { queue: false, duration: 200 }).animate(
				{ left: menu_final_pos_left, top: menu_final_pos_top }, 200);
		});
		
		link.attr('menu_block_i', i);
		link.attr('final_pos_left', coordinates[i][0] - link.outerWidth() - 10);
		link.attr('final_pos_top', coordinates[i][1] - link.outerHeight() / 2);
		var translation_duration = Math.floor(Math.random() * 601) + 400;
		link.animate({ left: coordinates[i][0] - link.outerWidth() - 10, top: coordinates[i][1] - link.outerHeight() / 2 },
						{ queue: false, duration: translation_duration }).animate(
						{ opacity: 0.8 }, { queue: false, duration: 1000 });
		// ====================================================================================
	}
}

function drawBackMenu(coordinates, container_selector, links) {
	for (i in coordinates) {
		// blocks //////////////////////////////////////////////////////////////////////////
		var block = $('<img />').addClass('gendai_block');
		blocks.push(block);
		block.attr('src', '../../webdesign/gendai_block1.png');
		var size = Math.floor(Math.random() * 41) + 20;
		block.css('width', size);
		block.css('height', size);
		block.css('left', $(container_selector).width() / 2);
		block.css('top', $(container_selector).height() / 2);
		block.css('opacity', 1.0);
		//var opacity = (Math.floor(Math.random() * 71) + 35) *.01;
		opacity = 1.0;
		block.attr('org_opacity', opacity);
		var fade_time = (Math.floor(Math.random() * 3001) + 1500);
		$(container_selector).append(block);
		
		block.mouseenter(function() {
			$(this).attr('src', '../../webdesign/gendai_block1.png');
			var block_final_pos_left = parseInt($(this).attr('final_pos_left'));
			var block_final_pos_top = parseInt($(this).attr('final_pos_top'));
			$(this).stop().animate({ opacity: 1 }, { queue: false, duration: 0 }).animate(
				{ left: block_final_pos_left, top: block_final_pos_top }, 200);
		});
		block.mouseleave(function() {
			var org_opacity = parseFloat($(this).attr('org_opacity'));
			$(this).fadeTo(500, org_opacity);
		});
		
		block.attr('final_pos_left', coordinates[i][0] - size / 2);
		block.attr('final_pos_top', coordinates[i][1] - size / 2);
		block.animate({ left: coordinates[i][0] - size / 2, top: coordinates[i][1] - size / 2 },
						{ queue: false, duration: 1500 }).animate(
							{ opacity: opacity }, { duration: fade_time });
		/////////////////////////////////////////////////////////////////////////////////////
		
		// links ==========================================================================
		var link = $(links[i]).addClass('gendai_back_menu');
		link.css('left', $(container_selector).width() / 2);
		link.css('top', $(container_selector).height() / 2);
		link.css('opacity', 1.0);
		link.css('z-index', 99);
		link.css('color', '#fff');
		link.css('text-decoration', 'none');
		
		$(container_selector).append(link);
		link.mouseenter(function() {
			var menu_block_i = parseInt($(this).attr('menu_block_i'));
			block = blocks[menu_block_i];
			var block_final_pos_left = parseInt(block.attr('final_pos_left'));
			var block_final_pos_top = parseInt(block.attr('final_pos_top'));
			block.attr('src', '../../webdesign/gendai_block3.png');
			block.stop().animate({ opacity: 1 }, { queue: false, duration: 0 }).animate(
				{ left: block_final_pos_left, top: block_final_pos_top }, 200);
			
			$(this).css('background-position', '0 0');
			var menu_final_pos_left = parseInt($(this).attr('final_pos_left'));
			var menu_final_pos_top = parseInt($(this).attr('final_pos_top'));
			$(this).stop().animate({ opacity: 1.0 }, { queue: false, duration: 200 }).animate(
				{ left: menu_final_pos_left - 10, top: menu_final_pos_top }, 200);
		});
		link.mouseleave(function() {
			var menu_block_i = parseInt($(this).attr('menu_block_i'));
			block = blocks[menu_block_i];
			var block_final_pos_left = parseInt(block.attr('final_pos_left'));
			var block_final_pos_top = parseInt(block.attr('final_pos_top'));
			block.attr('src', '../../webdesign/gendai_block1.png');
			block.stop().animate({ opacity: 1.0 }, { queue: false, duration: 0 }).animate(
				{ left: block_final_pos_left, top: block_final_pos_top }, 200);
			
			$(this).css('background-position', '-118px 0px');
			var menu_final_pos_left = parseInt($(this).attr('final_pos_left'));
			var menu_final_pos_top = parseInt($(this).attr('final_pos_top'));
			$(this).stop().animate({ opacity: 1.0 }, { queue: false, duration: 200 }).animate(
				{ left: menu_final_pos_left, top: menu_final_pos_top }, 200);
		});
		
		link.attr('menu_block_i', i);
		link.attr('final_pos_left', coordinates[i][0] + 10);
		link.attr('final_pos_top', coordinates[i][1] - link.outerHeight() / 2);
		var translation_duration = Math.floor(Math.random() * 601) + 400;
		link.animate({ left: coordinates[i][0] + 10, top: coordinates[i][1] - link.outerHeight() / 2 },
						{ queue: false, duration: translation_duration }).animate(
						{ opacity: 0.8 }, { queue: false, duration: 1000 });
		// ====================================================================================
	}
}

function resetMenu(coordinates, container_selector, links) {
	$(container_selector + ' > a').addClass('trash');
	$('.trash').stop().fadeTo(1000, 0, function() {
		$('.trash').remove();
	 });
	drawMenu(coordinates, container_selector, links);
}