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

$(document).ready(function(){
	// hero animation on hover
	// --------------------------------------------
	$('div#hero_left').mouseenter(function() {
		change_page('div#hero_left div', '0', '0', 500);
		change_cont('div#hero_left', '0px', '0px', '500px', '300px', 1.0, 500);
	});
	$('div#hero_left').mouseleave(function() {
		change_page('div#hero_left div', '-250px', '-75px', 500);
		change_cont('div#hero_left', '0px', '0px', '150px', '150px', 0.25, 500);
	});

	$('div#hero_central').mouseenter(function() {
		change_page('div#hero_central div', '0', '0', 500);
		change_cont('div#hero_central', '170px', '0px', '450px', '300px', 1.0, 500);
	});
	$('div#hero_central').mouseleave(function() {
		change_page('div#hero_central div', '-350px', '-75px', 500);
		change_cont('div#hero_central', '350px', '50px', '50px', '200px', 0.25, 500);
	});

	$('div#hero_right').mouseenter(function() {
		change_page('#hero_right div', '0', '0', 500);
		change_cont('#hero_right', '374px', '0px', '500px', '300px', 1.0, 500);
	});
	$('div#hero_right').mouseleave(function() {
		change_page('#hero_right div', '-250px', '-75px', 500);
		change_cont('#hero_right', '724px', '150px', '150px', '150px', 0.25, 500);
	});
	// --------------------------------------------
});
