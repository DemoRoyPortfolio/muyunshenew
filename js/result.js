window.onpageshow = pageInit;

function pageInit() {
	$(".cooperate-result").css("opacity",1);
	$(".cooperate-result .header").css("marginTop",0);
	$(".cooperate-result .shade").css("marginLeft",0);
	$(".cooperate-result .content .name").css("opacity",1);
	$(".cooperate-result .content .status").css("opacity",1);
	if($(document.body).outerWidth(true) > 768) {
		$(".cooperate-result .content .notepad").css({
			"opacity": 1,
			"marginTop": "80px"
		});
		$(".cooperate-result .content ul").css({
			"opacity": 1,
			"marginTop": "70px"
		});
	} else {
		$(".cooperate-result .content .notepad").css({
			"opacity": 1,
			"marginTop": "40px"
		});
		$(".cooperate-result .content ul").css({
			"opacity": 1,
			"marginTop": "30px"
		});
	}
}

var liArray = $(".bg-slide li");
var liIndex = 0;

$(document).ready(function(){
	setInterval(function(){
		liIndex++;
		if(liIndex == liArray.length) {
			liIndex = 0;
		}
		liArray.removeClass("on");
		liArray.eq(liIndex).addClass("on");
	},5000)
})