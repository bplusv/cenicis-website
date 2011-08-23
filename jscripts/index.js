function animationIn(hero_sel, widthF, heightF, time) {
	$(hero_sel).animate({
		height: heightF,
		opacity: 1.0,
		width: widthF
	}, { queue: false, duration: time });
	$(hero_sel + ' div').animate({			
		left: 0,
		top: 0
	}, { queue: false, duration: time});
}

function animationOut(hero_sel, pageIX, pageIY, oHeight, oWidth, time) {
	$(hero_sel).animate({			
		height: oHeight,
		opacity: 0.25,
		width: oWidth
	}, { queue: false, duration: time });
	$(hero_sel + ' div').animate({
		left: pageIX,
		top: pageIY
	}, { queue: false, duration: time});
}

$(document).ready(function(){

	// hero animation on hover
	// --------------------------------------------
	$('div#hero').mouseenter(function(){ animationIn('#hero', '500px', '300px', 500) });


	$('div#hero').mouseleave(function() { animationOut('#hero', '-150px', '-150px', 150, 150, 500) });
	// --------------------------------------------
});
