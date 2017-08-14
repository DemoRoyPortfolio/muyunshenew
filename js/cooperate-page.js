window.onpageshow = pageInit;

function pageInit() {
	$(".cooperate-1").css("opacity",1);
	$(".photo").css("marginRight",0);
	$(".cooperate-3 .shade").css("top","100%");
}

$(document).ready(function(){
	var liArray = $(".photo li");
	var liIndex = 0;
	setInterval(function(){
		liIndex++;
		if (liIndex == liArray.length) {
			liIndex = 0;
		}
		liArray.removeClass("on");
		liArray.eq(liIndex).addClass("on");
	},5000);
	// 捐赠查询标签悬浮
	$(".cooperate-3 .tag a").mouseover(function(){
		$(this).addClass("hover");
	}).mouseout(function(){
		$(this).removeClass("hover");
	});
});