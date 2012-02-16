<style type="text/css">
	.bottom_content {
		height: auto;
		margin-left: auto;
		margin-right: auto;
		margin-top: 80px;
		position: relative;
		width: 360px;
	}

	.text_1 {
		text-align: center;
		width: 360px;
	}

	.title_1 {
		height: 60px;
		margin-bottom: 15px;
		text-align: center;
		width: 360px;
	}

	.top_content {
		height: auto;
		margin-left: auto;
		margin-right: auto;
		margin-top: 20px;
		position: relative;
		text-align: center;
		width: auto;
	}
	
	.pic_content {
		background-image: url(../../img/cenicis_place.png);
		display: inline-block;
		height: 675px;
		left: -105px;
		position: relative;
		top: -355px;
		width: 720px;
	}
	
	.pic_container {
		display: inline-block;
		height: 250px;
		margin-left: auto;
		margin-right: auto;
		overflow: hidden;
		position: relative;
		width: 360px;
	}
	
</style>
<script type="text/javascript">
	function change_content(content_sel, content_x, content_y, time) {
		$(content_sel).animate({
			left: content_x,
			top: content_y
			}, { queue: false, duration: time }
		);
	}

	function change_container(container_selector, container_x, container_y, container_width, container_height, transparency, time) {
		$(container_selector).animate({
			height: container_height,
			left: container_x,
			opacity: transparency,
			top: container_y,
			width: container_width
			}, { queue: false, duration: time,
				step: function( now, fx ){

			} }
		);
	}

	$(document).ready(function(){
		$('#zoom_out').css('opacity', 0);
		
		$('#pic_container').mouseenter(function() {
			$('#zoom_in').animate({ opacity: 0.0 }, { queue: false, duration: 500 });
			$('#zoom_out').animate({ opacity: 1.0 }, { queue: false, duration: 500 });
			change_content('#pic_content', '0', '0', 500);
			change_container('#pic_container', '0px', '0px', '720px', '675px', 1.0, 500);
		});
		$('#pic_container').mouseleave(function() {
			$('#zoom_in').animate({ opacity: 1.0 }, { queue: false, duration: 500 });
			$('#zoom_out').animate({ opacity: 0.0 }, { queue: false, duration: 500 });
			change_content('#pic_content', '-105px', '-355px', 500);
			change_container('#pic_container', '0px', '0px', '360px', '250px', 1.0, 500);
		});
	});
</script>
<div id="top_content" class="top_content">
	<span id="pic_container" class="pic_container">
		<span id="pic_content" class="pic_content"></span>
	</span>
	<div id="zoom_in" class="navi_container" style="position:absolute;left:0px;top:0px;">
		<div style="position:absolute;left:150px;top:-30px;"></div>
		<div style="position:absolute;left:190px;top:-30px;"></div>
		<div style="position:absolute;left:150px;top:10px;"></div>
		
		<div style="position:absolute;left:570px;top:-30px;"></div>
		<div style="position:absolute;left:530px;top:-30px;"></div>
		<div style="position:absolute;left:570px;top:10px;"></div>
		
		<div style="position:absolute;left:570px;top:280px;"></div>
		<div style="position:absolute;left:530px;top:280px;"></div>
		<div style="position:absolute;left:570px;top:240px;"></div>
		
		<div style="position:absolute;left:150px;top:280px;"></div>
		<div style="position:absolute;left:190px;top:280px;"></div>
		<div style="position:absolute;left:150px;top:240px;"></div>
	</div>
	<div id="zoom_out" class="navi_container" style="position:absolute;left:0px;top:0px;">
		<div style="position:absolute;left:-30px;top:-30px;"></div>
		<div style="position:absolute;left:-70px;top:-30px;"></div>
		<div style="position:absolute;left:-30px;top:-70px;"></div>
		
		<div style="position:absolute;left:750px;top:-30px;"></div>
		<div style="position:absolute;left:790px;top:-30px;"></div>
		<div style="position:absolute;left:750px;top:-70px;"></div>
		
		<div style="position:absolute;left:750px;top:705px;"></div>
		<div style="position:absolute;left:790px;top:705px;"></div>
		<div style="position:absolute;left:750px;top:745px;"></div>
		
		<div style="position:absolute;left:-30px;top:705px;"></div>
		<div style="position:absolute;left:-70px;top:705px;"></div>
		<div style="position:absolute;left:-30px;top:745px;"></div>
	</div>
</div>
<div id="bottom_content" class="bottom_content">
	<div id="title_1" class="title_1">
		<span class="lsq_bracket"></span>
		<span class="rsq_bracket"></span>
		<h1>Contacto</h1>
		<div class="clearer"></div>
	</div>	
	<p id="text_1" class="text_1">
		IIT - Edificio Y5, Sala 114<br />
		Teléfono: (656)688-48-00 al 09 Ext. 6473<br />
		Fax: (656)688-48-00 Ext. 4841<br />
		Correo electrónico:&nbsp;<a href="mailto:cis@uacj.mx">cis@uacj.mx</a>
	</p>
</div>