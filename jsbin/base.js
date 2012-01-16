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

function dim_blocks() {
	$('.gendai_block').each(function(index) {
		var block_dimmer = $(this).attr('dimmer') === 'true';
		if (block_dimmer) {
			var dim_duration = Math.floor(Math.random() * 500) + 1000;
			var block_dimmer = (Math.floor(Math.random() * 70) + 20) * .01;
			$(this).fadeTo(dim_duration, block_dimmer);
		}
	});
}

function move_blocks() {
	$('.gendai_block').each(function(index) {
		var block_final_pos_left = parseInt($(this).attr('final_pos_left'));
		var block_final_pos_top = parseInt($(this).attr('final_pos_top'));
		var move_duration = Math.floor(Math.random() * 1000) + 1000;
		
		$(this).animate(
			{ left: block_final_pos_left, top: block_final_pos_top },
			{ queue: false, duration: move_duration, easing:'easeOutElastic' }
		);
	});
}

var block_shake_vect_x = 0;
var block_shake_vect_y = 1;
function shake_blocks() {
	block_shake_vect_x = -block_shake_vect_x;
	block_shake_vect_y = -block_shake_vect_y;
	$('.gendai_block').each(function(index) {
		var block_shake = $(this).attr('shake') === 'true';
		if (block_shake) {
			var shake_factor = 5;
			var block_final_pos_left = parseInt($(this).attr('final_pos_left'));
			var block_final_pos_top = parseInt($(this).attr('final_pos_top'));
			
			$(this).attr('final_pos_left', block_final_pos_left +
				(block_shake_vect_x * shake_factor));
			$(this).attr('final_pos_top', block_final_pos_top +
				(block_shake_vect_y * shake_factor));
		}
	});
	dim_blocks();
}

function draw_blocks(coordinates, container_selector) {
	for (i in coordinates) {
			var block = $('<div />').addClass('gendai_block');
			
			block.addClass('gendai_block_beta');
			var size = Math.floor(Math.random() * 30) + 10;
			block.css('width', size);
			block.css('height', size);
			block.css('left', $(container_selector).width() / 2);
			block.css('top', $(container_selector).height() / 2);
			var opacity = (Math.floor(Math.random() * 70) + 20) * .01;
			block.css('opacity', opacity);
			
			$(container_selector).append(block);

			block.attr('final_pos_left', coordinates[i][0] - size / 2);
			block.attr('final_pos_top', coordinates[i][1] - size / 2);
			block.attr('dimmer', 'true');
			
			block.click(function() {
				$(this).removeClass();
				$(this).addClass('gendai_block gendai_block_alpha');
				$(this).attr('shake', 'true');
			});
			
			block.mouseenter(function() {
				$(this).clearQueue();
				$(this).stop();
				$(this).fadeTo(0, 1.0);
				$(this).attr('dimmer', 'false');
				
			});
			
			block.mouseleave(function() {
				$(this).clearQueue();
				$(this).stop();
				$(this).fadeTo(500, 0.3);
				$(this).attr('dimmer', 'true');
			});
	}
}

function start_blocks_animation() {
	move_blocks();
	setTimeout(function() {
		setInterval(function() {
		  shake_blocks();
		  move_blocks();
		}, 250);
	}, 1000);
}

function draw_menu(coordinates, container_selector, links, direction) {
	var reverse_dir = direction === 'left';
	for (i in coordinates) {
		var block = $('<div />').addClass('gendai_block');
		
		block.addClass('gendai_block_beta');
		var size = Math.floor(Math.random() * 30) + 10;
		block.css('width', size);
		block.css('height', size);
		block.css('left', $(container_selector).width() / 2);
		block.css('top', $(container_selector).height() / 2);
		var opacity = (Math.floor(Math.random() * 70) + 20) * .01;
		block.css('opacity', opacity);
		
		$(container_selector).append(block);
		block.attr('id', 'gendai_menu_block_' + i);
		block.attr('final_pos_left', coordinates[i][0] - size / 2);
		block.attr('final_pos_top', coordinates[i][1] - size / 2);
		block.attr('dimmer', 'true');
		
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
		
		block.mouseenter(function() {
			$(this).clearQueue();
			$(this).stop();
			$(this).fadeTo(0, 1.0);
			$(this).attr('dimmer', 'false');
		});
		
		block.mouseleave(function() {
			$(this).clearQueue();
			$(this).stop();
			$(this).fadeTo(500, 0.3);
			$(this).attr('dimmer', 'true');
		});
			
		var move_duration = Math.floor(Math.random() * 3500) + 1000;			
		block.animate(
			{ left: block.attr('final_pos_left'), top: block.attr('final_pos_top') },
			{ queue: false, duration: move_duration, easing:'easeOutElastic' }
		);
		
		var link = $(links[i]).addClass(reverse_dir ? 'gendai_back_menu' : 'gendai_menu');
		link.css('left', $(container_selector).width() / 2);
		link.css('top', $(container_selector).height() / 2);
		link.css('z-index', 99);
		link.css('color', '#fff');
		link.css('text-decoration', 'none');
		$(container_selector).append(link);
			
		link.mouseenter(function() {
			var menu_index = parseInt($(this).attr('menu_index'));
			block = $('#gendai_menu_block_' + menu_index);
			var block_final_pos_left = parseInt(block.attr('final_pos_left'));
			var block_final_pos_top = parseInt(block.attr('final_pos_top'));
			var reverse_dir = $(this).attr('reverse_dir') === 'true';
			block.removeClass();
			block.addClass('gendai_block gendai_block_alpha');
			block.clearQueue();
			block.stop();
			block.fadeTo(0, 1.0);
			block.attr('dimmer', 'false');
			block.animate(
				{ left: block_final_pos_left, top: block_final_pos_top },
				{ queue: false, duration: 200 }
			);
			$(this).css('background-position', reverse_dir ? '-659px -44px' : '-777px -71px');
			var menu_final_pos_left = parseInt($(this).attr('final_pos_left'));
			var menu_final_pos_top = parseInt($(this).attr('final_pos_top'));
			$(this).stop().animate(
				{ left: menu_final_pos_left + (reverse_dir ? -10 : 10),
					top: menu_final_pos_top }, { duration: 200 }
			);
		});
		
		link.mouseleave(function() {
			var menu_index = parseInt($(this).attr('menu_index'));
			var reverse_dir = $(this).attr('reverse_dir') === 'true';
			block = $('#gendai_menu_block_' + menu_index);
			var block_final_pos_left = parseInt(block.attr('final_pos_left'));
			var block_final_pos_top = parseInt(block.attr('final_pos_top'));
			
			block.removeClass();
			block.addClass('gendai_block gendai_block_beta');
			block.clearQueue();
			block.stop();
			block.fadeTo(0, 0.3);
			block.attr('dimmer', 'true');
			block.stop().animate(
				{ left: block_final_pos_left, top: block_final_pos_top },
				{ duration: 200 } );
			$(this).css('background-position', reverse_dir ? '-777px -44px' : '-659px -71px');
			var menu_final_pos_left = parseInt($(this).attr('final_pos_left'));
			var menu_final_pos_top = parseInt($(this).attr('final_pos_top'));
			$(this).stop().animate(
				{ left: menu_final_pos_left, top: menu_final_pos_top },
				{ duration: 200 });
		});
		
		link.attr('menu_index', i);
		link.attr('final_pos_left', reverse_dir ? coordinates[i][0] + 10 :
			coordinates[i][0] - link.outerWidth() - 10);
		link.attr('final_pos_top', coordinates[i][1] - link.outerHeight() / 2);
		link.attr('reverse_dir', reverse_dir);
		var translation_duration = Math.floor(Math.random() * 600) + 400;
		
		link.animate(
			{ left: link.attr('final_pos_left'),
				top: link.attr('final_pos_top') },
			{ queue: false, duration: translation_duration }
		);
	}
}