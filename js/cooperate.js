// 基金会动态首页初始化
window.onpageshow = cooperateInit;

function cooperateInit() {
	$(".cooperate #nav-sub").css("marginLeft","50px");
	$(".cooperate .nav-toggle").css("opacity",1);
	$(".cooperate #back").css("opacity",1);
	$(".cooperate .coop").css("transform","translateY(0)");
	$(".cooperate .coop .shade").css("transform","translateY(0)");
	$(".cooperate .coop .position").css("opacity",1);
	$(".page-title").css("opacity",1);
}

$(document).ready(function(){
	$(".cooperate .coop .position").mouseover(function(){
		$(this).addClass("hover");
	}).mouseout(function(){
		$(this).removeClass("hover");
	});
});