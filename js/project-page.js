window.onpageshow = pageInit;

function pageInit() {
	// 现行项目
	$(".project-1 .main").addClass("on");
	if($(document.body).outerWidth(true) > 768) {
		$(".project-1 .header").addClass("on");
	}
	setTimeout(function(){//避免加载时点击大图跳转
		$(".project-1 .bg-box a").addClass("on");
	},1600);
	$(".project-2").css("opacity",1);
	$(".project-3").css("opacity",1);
	$(".project-4").css("opacity",1);
	// 文章
	$(".project-article .content").css("opacity",1);
	$(".project-article .nav-toggle").css("opacity",1);
	$(".project-article .tool").css("opacity",1);
	$(".project-article .share").css("opacity",1);
	$(".project-article .tool .arrow").mouseover(function(){
		$(this).addClass("hover");
	}).mouseout(function(){
		$(this).removeClass("hover");
	});
}

$(document).ready(function(){
	var h = $(".content .item").innerHeight();
	var scrollDownIndex = 0;
	var scrollDown = 0;
	$(".project-2 .scrolldown").click(function(){
		if(!$(this).hasClass("before")) {
			scrollDownIndex++;
			scrollDown = h * scrollDownIndex;
			$(".project-2").animate({scrollTop:scrollDown},"slow");
			if(scrollDownIndex == $(".content .item").length - 1) {
				$(this).addClass("before");
			}
		} else {
			scrollDownIndex--;
			scrollDown = h * scrollDownIndex;
			$(".project-2").animate({scrollTop:scrollDown},"slow");
			if(scrollDownIndex == 0) {
				$(this).removeClass("before");
			}
		}
	});
	$(".project-3 .scrolldown").click(function(){
		if(!$(this).hasClass("before")) {
			scrollDownIndex++;
			scrollDown = h * scrollDownIndex;
			$(".project-3").animate({scrollTop:scrollDown},"slow");
			if(scrollDownIndex == $(".content .item").length - 1) {
				$(this).addClass("before");
			}
		} else {
			scrollDownIndex--;
			scrollDown = h * scrollDownIndex;
			$(".project-3").animate({scrollTop:scrollDown},"slow");
			if(scrollDownIndex == 0) {
				$(this).removeClass("before");
			}
		}
	});


	
	/*文章内容相关JS*/
	//阅读更多
	$(".project-article .btn-more").click(function(){
		$(".project-article .popup").addClass("on");
		$(".project-article .popup .close").mouseover(function(){
			$(this).css("transform","scale(0.7)");
		}).mouseout(function(){
			$(this).css("transform","scale(1)");
		}).click(function(){
			$(".project-article .popup").removeClass("on");
		});
	});

	$(".project-article .content img").click(function(){
		$(".project-article .photo-popup").addClass("on");
		$(".project-article .photo-popup").click(function(){
			$(this).removeClass("on");
		});
	});
});