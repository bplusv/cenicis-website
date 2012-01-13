jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	}
});

function moveBlocks() {
	$('.gendai_block').each(function(index) {
		var block_final_pos_left = parseInt($(this).attr('final_pos_left'));
		var block_final_pos_top = parseInt($(this).attr('final_pos_top'));
		var moveDuration = Math.floor(Math.random() * 3501) + 1000;
		
		$(this).stop().animate(
			{ left: block_final_pos_left, top: block_final_pos_top },
			{ queue: false, duration: moveDuration, easing:'easeOutElastic' }
		);
	});
}

function shakeBlocks() {
	$('.gendai_block').each(function(index) {
		var shake_factor = 5;
		var block_shake_vect_x = parseInt($(this).attr('shake_vect_x'));
		var block_shake_vect_y = parseInt($(this).attr('shake_vect_y'));
		var block_final_pos_left = parseInt($(this).attr('final_pos_left'));
		var block_final_pos_top = parseInt($(this).attr('final_pos_top'));
		
		$(this).attr('final_pos_left', block_final_pos_left +
			(block_shake_vect_x * shake_factor));
		$(this).attr('final_pos_top', block_final_pos_top +
			(block_shake_vect_y * shake_factor));
		$(this).attr('shake_vect_x', block_shake_vect_x * -1);
		$(this).attr('shake_vect_y', block_shake_vect_y * -1);
	});
}

function drawBlocks(coordinates, container_selector) {
	for (i in coordinates) {
			var block = $('<img />').addClass('gendai_block');
			var blockTypeRange = (Math.floor(Math.random() * 101) + 1);
			var blockType = 1;
			
			if (blockTypeRange >= 1 && blockTypeRange <= 50) {
				blockType = 1;
			} else if (blockTypeRange > 50 && blockTypeRange <= 65) {
				blockType = 4;
			} else if (blockTypeRange > 65 && blockTypeRange <= 90) {
				blockType = 3;
			} else if (blockTypeRange > 90 && blockTypeRange <= 100) {
				blockType = 2;
			}
			
			block.attr('src', '../../img/gendai_block' + blockType + '.png');
			var size = Math.floor(Math.random() * 41) + 10;
			block.css('width', size);
			block.css('height', size);
			block.css('left', $(container_selector).width() / 2);
			block.css('top', $(container_selector).height() / 2);
			block.css('opacity', 1.0);
			
			$(container_selector).append(block);
			block.attr('final_pos_left', coordinates[i][0] - size / 2);
			block.attr('final_pos_top', coordinates[i][1] - size / 2);
			block.attr('shake_vect_x', 0);
			block.attr('shake_vect_y', 1);
			
			block.click(function() {
				$(this).attr('src', '../../img/gendai_block4.png');
				var block_final_pos_left = parseInt($(this).parent().width() /
					2 - $(this).width() / 2);
				var block_final_pos_top = parseInt($(this).parent().height() /
					2 - $(this).height() / 2);
				$(this).stop().animate(
					{ left: block_final_pos_left, top: block_final_pos_top },
					{ duration: 200 }
				);
			});
	}
}

function startBlocksAnimation() {
	moveBlocks();
	setTimeout(function() {
		setInterval(function() {
		  shakeBlocks();
		  moveBlocks();
		}, 350);
	}, 1000);
}

var blocks = [];
function drawMenu(coordinates, container_selector, links, direction) {
	var reverseDir = direction === 'left';
	for (i in coordinates) {
		var block = $('<img />').addClass('gendai_block');
		blocks.push(block);
		block.attr('src', '../../img/gendai_block1.png');
		var size = Math.floor(Math.random() * 41) + 10;
		block.css('width', size);
		block.css('height', size);
		block.css('left', $(container_selector).width() / 2);
		block.css('top', $(container_selector).height() / 2);
		
		$(container_selector).append(block);
		block.attr('final_pos_left', coordinates[i][0] - size / 2);
		block.attr('final_pos_top', coordinates[i][1] - size / 2);
		block.attr('shake_vect_x', 0);
		block.attr('shake_vect_y', 1);
		
		block.click(function() {
			var block_final_pos_left = parseInt($(this).parent().width() /
				2 - $(this).width() / 2);
			var block_final_pos_top = parseInt($(this).parent().height() /
				2 - $(this).height() / 2);
			$(this).stop().animate(
				{ left: block_final_pos_left, top: block_final_pos_top },
				{duration: 200 }
			);
		});
		
		var moveDuration = Math.floor(Math.random() * 3501) + 1000;			
		block.animate(
			{ left: block.attr('final_pos_left'), top: block.attr('final_pos_top') },
			{ queue: false, duration: moveDuration, easing:'easeOutElastic' }
		);
		
		var link = $(links[i]).addClass(reverseDir ? 'gendai_back_menu' : 'gendai_menu');
		link.css('left', $(container_selector).width() / 2);
		link.css('top', $(container_selector).height() / 2);
		link.css('z-index', 99);
		link.css('color', '#fff');
		link.css('text-decoration', 'none');
		$(container_selector).append(link);
		
		link.mouseenter(function() {
			var menu_block_i = parseInt($(this).attr('menu_block_i'));
			block = blocks[menu_block_i];
			var block_final_pos_left = parseInt(block.attr('final_pos_left'));
			var block_final_pos_top = parseInt(block.attr('final_pos_top'));
			var reverseDir = $(this).attr('reverse_dir') === 'true';
			block.attr('src', '../../img/gendai_block3.png');
			block.stop().animate(
				{ left: block_final_pos_left, top: block_final_pos_top },
				{ duration: 200 }
			);
			$(this).css('background-position', reverseDir ? '0px 0px' : '-118px 0px');
			var menu_final_pos_left = parseInt($(this).attr('final_pos_left'));
			var menu_final_pos_top = parseInt($(this).attr('final_pos_top'));
			$(this).stop().animate(
				{ left: menu_final_pos_left + (reverseDir ? -10 : 10),
					top: menu_final_pos_top }, { duration: 200 }
			);
		});
		
		link.mouseleave(function() {
			var menu_block_i = parseInt($(this).attr('menu_block_i'));
			block = blocks[menu_block_i];
			var block_final_pos_left = parseInt(block.attr('final_pos_left'));
			var block_final_pos_top = parseInt(block.attr('final_pos_top'));
			var reverseDir = $(this).attr('reverse_dir') === 'true';
			block.attr('src', '../../img/gendai_block1.png');
			block.stop().animate(
				{ left: block_final_pos_left, top: block_final_pos_top },
				{ duration: 200 } );
			$(this).css('background-position', reverseDir ? '-118px 0px' : '0px 0px');
			var menu_final_pos_left = parseInt($(this).attr('final_pos_left'));
			var menu_final_pos_top = parseInt($(this).attr('final_pos_top'));
			$(this).stop().animate(
				{ left: menu_final_pos_left, top: menu_final_pos_top },
				{ duration: 200 });
		});
		
		link.attr('menu_block_i', i);
		link.attr('final_pos_left', reverseDir ? coordinates[i][0] + 10 :
			coordinates[i][0] - link.outerWidth() - 10);
		link.attr('final_pos_top', coordinates[i][1] - link.outerHeight() / 2);
		link.attr('reverse_dir', reverseDir);
		var translation_duration = Math.floor(Math.random() * 601) + 400;
		
		link.animate(
			{ left: link.attr('final_pos_left'),
				top: link.attr('final_pos_top') },
			{ queue: false, duration: translation_duration }
		);
	}
}