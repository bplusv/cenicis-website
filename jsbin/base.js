/*
 * @author Luis Eduardo Salazar Valles
 * base.js v1.2
 * 1/21/2012
 *
 * bp.lusv@gmail.com
 * Have fun :)
 */

/*
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 * Copyright © 2008 George McGinley Smith
 *
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 * GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 */
 
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

var $backer;
var $central_container;
var $navi_blocks;
var $navi_menu_links;
var fx_shake_x = 0;
var fx_shake_y = 1;
var shake_factor = 5;

function fx_loop() {
	fx_shake_x = -fx_shake_x;
	fx_shake_y = -fx_shake_y;
	$navi_blocks.each(function(index) {
		$this = $(this);
		var block_dimmer = $this.attr('dimmer') === 'true';
		if (block_dimmer) {
			var dim_duration = Math.floor(Math.random() * 500) + 1000;
			var block_dimmer = (Math.floor(Math.random() * 70) + 20) * .01;
			$this.fadeTo(dim_duration, block_dimmer);
		}
		var block_shake = $this.attr('shake') === 'true';
		if (block_shake) {
			var f_left = parseFloat($this.attr('f_left')) + fx_shake_x * shake_factor;
			var f_top = parseFloat($this.attr('f_top')) + fx_shake_y * shake_factor;
			$this.animate(
				{ left: f_left - $this.width() / 2, top: f_top - $this.height() / 2 },
				{ queue: false, duration: 3000, easing:'easeOutElastic' }
			);
		}
	});
}

function animate_blocks() {
	$navi_blocks.each(function(index) {
		var $this = $(this);
		var size = Math.floor(Math.random() * 30) + 10;
		var c_left = $this.parents('.navi_container').width() / 2;
		var c_top = $this.parents('.navi_container').height() / 2;
		$this.css('width', size);
		$this.css('height', size);
		var f_left = $this.attr('f_left') === undefined ?
			$this.position().left :
			parseFloat($this.attr('f_left'));
		var f_top = $this.attr('f_top') === undefined ?
			$this.position().top :
			parseFloat($this.attr('f_top'));
		$this.css('left', c_left);
		$this.css('top', c_top);
		var opacity = (Math.floor(Math.random() * 70) + 20) * .01;
		$this.css('opacity', opacity);
		$this.attr('dimmer', 'true');
		$this.attr('f_left', f_left);
		$this.attr('f_top', f_top);
		var move_duration = Math.floor(Math.random() * 1000) + 1000;
		$this.click(function() {
			$this.addClass('super');
			$this.attr('shake', 'true');
		});
		$this.mouseenter(function() {
			var f_left = parseFloat($this.attr('f_left'));
			var f_top = parseFloat($this.attr('f_top'));
			$this.stop(true).fadeTo(0, 1.0);
			$this.attr('dimmer', 'false');
			$this.animate({ left: f_left - $this.width() / 2 , top: f_top - $this.height() / 2 },
				{ queue: false, duration: 0 }
			);
		});
		$this.mouseleave(function() {
			$this.fadeTo(500, 0.3);
			$this.attr('dimmer', 'true');
		});
		$this.animate({ left: f_left - $this.width() / 2, top: f_top - $this.height() / 2 },
			{ queue: false, duration: move_duration, easing: 'easeOutElastic' }
		);
	});
}

function animate_menus() {
	$navi_menu_links.each(function(index) {
		var $this = $(this);
		is_reverse = $this.parents('.navi_menu').hasClass('reverse');
		var f_left = $this.css('left');
		var f_top = $this.css('top');
		var c_left = $this.parents('.navi_container').width() / 2 + $this.width();
		var c_top = $this.parents('.navi_container').height() / 2 + $this.height();
		$this.css('left', c_left);
		$this.css('top', c_top);
		$this.css('margin-left', is_reverse ? 10 : -$this.outerWidth() - 10);
		$this.css('margin-top', -$this.outerHeight() / 2);
		$this.mouseenter(function() {
			$this = $(this);
			is_reverse = $this.parents('.navi_menu').hasClass('reverse');
			$this.animate({ marginLeft: is_reverse ? 0 : -$this.outerWidth() },
				{ queue: false, duration: 200 }
			);
			$that = $this.next();
			var f_left = parseFloat($that.attr('f_left'));
			var f_top = parseFloat($that.attr('f_top'));
			$that.stop(true).fadeTo(0, 1.0);
			$that.attr('dimmer', 'false');
			$that.animate({ left: f_left - $that.width() / 2, top: f_top - $that.height() / 2 },
				{ queue: false, duration: 0 }
			);		
		});
		$this.mouseleave(function() {
			$this = $(this);
			is_reverse = $this.parents('.navi_menu').hasClass('reverse');
			$this .animate({ marginLeft: is_reverse ? 10 : -$this.outerWidth() - 10 },
				{ queue: false, duration: 200 }
			);
			$that = $this.next();
			$that.fadeTo(500, 0.3);
			$that.attr('dimmer', 'true');
		});
		var move_duration = Math.floor(Math.random() * 600) + 400;
		$this.animate({ left: f_left, top: f_top },
			{ queue: false, duration: move_duration }
		);
	});
}

function ajax_update() {
	var hash = document.location.hash.substring(2, document.location.hash.length);
	hash = hash.split("&");
	var hash_values = {};
	hash_values["section"] = "index";
	for (i in hash) {
		hash_values[hash[i].split("=")[0]] = hash[i].split("=")[1]; 
	}
	var template_path = 'templates/' + hash_values["section"] + '.tpl';
	$central_container.fadeTo(0, 0.2);
	$central_container.load(template_path, function(r,s,x) {
		if (s === 'success') {
			hash_values["section"] === 'index' ? $backer.css('visibility', 'hidden') :
				$backer.css('visibility', 'visible');
			$navi_blocks = $('.navi_container div');
			$navi_menu_links = $('.navi_menu a');
			$central_container.fadeTo(500, 1.0);
			animate_blocks();
			animate_menus();
		} else {
			$central_container.fadeTo(500, 1.0);
		}
	});
}

$(document).ready(function() {
	$backer = $('#backer');
	$central_container = $('#central');
	$(window).bind('hashchange', ajax_update);
	ajax_update();
	setTimeout(function() {
		setInterval(fx_loop, 250);
	}, 1000);
});