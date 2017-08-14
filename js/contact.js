window.onpageshow = contactInit;

function contactInit() {
	$(".contact #nav-sub").css("marginLeft","50px");
	$(".contact .nav-toggle").css("opacity",1);
	$(".contact #back").css("opacity",1);
	$(".contact address").css({
		"opacity": 1,
		"marginLeft": 0
	});
	$(".contact .qr").css({
		"opacity": 1,
		"marginLeft": 0
	});
	$(".page-title").css("opacity",1);
}