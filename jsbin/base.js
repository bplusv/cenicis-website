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

/*
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,e,b){var c="hashchange",h=document,f,g=$.event.special,i=h.documentMode,d="on"+c in e&&(i===b||i>7);function a(j){j=j||location.href;return"#"+j.replace(/^[^#]*#?(.*)$/,"$1")}$.fn[c]=function(j){return j?this.bind(c,j):this.trigger(c)};$.fn[c].delay=50;g[c]=$.extend(g[c],{setup:function(){if(d){return false}$(f.start)},teardown:function(){if(d){return false}$(f.stop)}});f=(function(){var j={},p,m=a(),k=function(q){return q},l=k,o=k;j.start=function(){p||n()};j.stop=function(){p&&clearTimeout(p);p=b};function n(){var r=a(),q=o(m);if(r!==m){l(m=r,q);$(e).trigger(c)}else{if(q!==m){location.href=location.href.replace(/#.*/,"")+q}}p=setTimeout(n,$.fn[c].delay)}$.browser.msie&&!d&&(function(){var q,r;j.start=function(){if(!q){r=$.fn[c].src;r=r&&r+a();q=$('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){r||l(a());n()}).attr("src",r||"javascript:0").insertAfter("body")[0].contentWindow;h.onpropertychange=function(){try{if(event.propertyName==="title"){q.document.title=h.title}}catch(s){}}}};j.stop=k;o=function(){return a(q.location.href)};l=function(v,s){var u=q.document,t=$.fn[c].domain;if(v!==s){u.title=h.title;u.open();t&&u.write('<script>document.domain="'+t+'"<\/script>');u.close();q.location.hash=v}}})();return j})()})(jQuery,this);

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

var prev_hash = "";
function check_hash() {
	hash = document.location.hash.substring(2, document.location.hash.length);
	if (hash != prev_hash) {
		prev_hash = hash;
		ajax_update();
	}
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
	$(window).hashchange( function(){
		ajax_update();
	});
	$(window).hashchange();
	setInterval(function() { fx_loop(); }, 250);
});