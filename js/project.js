// 慈善项目及子页首页初始化
window.onpageshow = projectInit;

function projectInit() {
	$(".project #nav-sub").css("marginLeft","50px");
	$(".project .nav-toggle").css("opacity",1);
	$(".project #back").css("opacity",1);
	$(".project .pro").css("transform","translateY(0)");
	$(".project .pro .shade").css("transform","translateY(0)");
	$(".project .pro .position").css("opacity",1);
	$(".page-title").css("opacity",1);
}

$(document).ready(function(){

	var articleSum = $(".itemlist li").length;
	var index = 1;

	var bgArray = $(".bg");
	var index = 0;
	$(".next").click(function(){
		index++;
		if (index == 6) {
			index = 0;
		};
		bgArray.removeClass("on");
		bgArray.eq(index).addClass("on");
	});

	$(".prev").click(function(){
		index--;
		if (index == -1) {
			index == 5;
		};
		bgArray.removeClass("on");
		bgArray.eq(index).addClass("on");
	});

	// $(".project .info .shade").mouseover(function(){
	// 	$(this).css("opacity",0.3);
	// }).mouseout(function(){
	// 	$(this).css("opacity",0.3);
	// });

});