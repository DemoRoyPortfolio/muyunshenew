// 基金会动态首页初始化
window.onpageshow = conditionInit;

function conditionInit() {
	$(".condition #nav-sub").css("marginLeft","50px");
	$(".condition .nav-toggle").css("opacity",1);
	$(".condition #back").css("opacity",1);
	$(".condition .shade").css("marginLeft","100%");
	$(".condition .item-1 h2").css({
		"opacity": 1,
		"marginTop": 0
	});
	if($(document.body).outerWidth(true) > 768) {
		$(".condition .item-1 ul").css({
			"opacity": 1,
			"marginTop": "80px"
		});
		$(".condition .item-1 .dot-wrap").css({
			"opacity": 1,
			"marginTop": "60px"
		});
		$(".condition .item-1 .btn").css({
			"opacity": 1,
			"marginTop": "60px"
		});
	} else {
		$(".condition .item-1 ul").css({
			"opacity": 1,
			"marginTop": "50px"
		});
		$(".condition .item-1 .dot-wrap").css({
			"opacity": 1,
			"marginTop": "30px"
		});
		$(".condition .item-1 .btn").css({
			"opacity": 1,
			"marginTop": "30px"
		});
	};
	$(".page-title").css("opacity",1);
}

$(document).ready(function(){

	// 公告历史&&历史新闻轮播
	$(".item-1 .notice li").eq(0).clone().appendTo($(".item-1 .notice ul"));
	$(".item-1 .news li").eq(0).clone().appendTo($(".item-1 .news ul"));
	var noticeIndex = 0;
	var newsIndex = 0;
	var noticeNum = $(".notice li").length;
	var newsNum = $(".news li").length;
	var noticeUlWidth = noticeNum * 100 + "%"; 
	var noticeLiWidth = 100 / noticeNum + "%";
	var newsUlWidth = newsNum * 100 + "%";
	var newsLiWidth = 100 / newsNum + "%";
	$(".item-1 .notice ul").css("width",noticeUlWidth);//动态计算轮播容器ul的宽度
	$(".item-1 .notice li").css("width",noticeLiWidth);//动态计算每个轮播图的宽度
	$(".item-1 .news ul").css("width",newsUlWidth);
	$(".item-1 .news li").css("width",newsLiWidth);

	// 轮播圆点
	for(var i = 0; i < noticeNum - 1; i++) {
		$(".notice .dot-wrap").append('<span class="dot"></span>');
		$(".notice .dot-wrap .dot").eq(0).addClass("on");
	}
	for(var i = 0; i < newsNum - 1; i++) {
		$(".news .dot-wrap").append('<span class="dot"></span>');
		$(".news .dot-wrap .dot").eq(0).addClass("on");
	}

	if($(".item-1").hasClass("on")) {
		// 公告轮播
		setInterval(function(){
			if (noticeIndex == noticeNum - 1) {
				$(".item-1 .notice ul").css("marginLeft","0");
				noticeIndex = 0;
			};
			$(".item-1 .notice ul").animate({marginLeft: -100 * (noticeIndex + 1) +"%"},1000);
			$(".item-1 .notice .dot").removeClass("on");
			if(noticeIndex == noticeNum -2) {
				$(".item-1 .notice .dot").eq(0).addClass("on");
			} else {
				$(".item-1 .notice .dot").eq(noticeIndex + 1).addClass("on");
			};
			noticeIndex++;
		},8000);

		// 新闻轮播
		setTimeout(function(){
			setInterval(function(){
				if (newsIndex == newsNum - 1) {
					$(".item-1 .news ul").css("marginLeft","0");
					newsIndex = 0;
				};
				$(".item-1 .news ul").animate({marginLeft: -100 * (newsIndex + 1) +"%"},1000);
				$(".item-1 .news .dot").removeClass("on");
				if(newsIndex == newsNum -2) {
					$(".item-1 .news .dot").eq(0).addClass("on");
				} else {
					$(".item-1 .news .dot").eq(newsIndex + 1).addClass("on");
				};
				newsIndex++;
			},8000);
		},4000)
	};

	// 导航链接点击切换
	var liArray = $("#nav-sub li");
	var itemArray = $(".content .item");
	var itemOnIndex = itemArray.index($(".content .on"));
	$("#nav-sub li").click(function(){
		$("#nav-sub li").removeClass("on");
		if(!$(this).hasClass("active")) {
		  $(this).addClass("on");
		}
		$(".content .item").removeClass("on");
		$(".content .item-" + $(this).data("about")).addClass("on");
		itemOnIndex = itemArray.index($(".content .on"));
		if (itemOnIndex != 0) {
		  $(".arrow-left").addClass("on");
		} else {
		  $(".arrow-left").removeClass("on");
		}
	});
	// 公告历史&&历史新闻按钮点击切换
	$(".content .item-1 .btn").click(function(){
		$(".content .item").removeClass("on");
		liArray.removeClass("on");
		if($(this).hasClass("btn-notice")) {
			$(".content .item-2").addClass("on");
			liArray.eq(1).addClass("on");
		} else {
			$(".content .item-3").addClass("on");
			liArray.eq(2).addClass("on");
		};
	});

	// 公告历史&&历史新闻鼠标悬浮动动效
	$(".btn").mouseover(function(){
		$(this).addClass("hover").css("color","#ffffff");
	}).mouseout(function(){
		$(this).removeClass("hover").css("color","#000000");
	});

	// 公告历史&&历史新闻内容滚动效果
	$(".noticelist").scroll(function(){
        var noticebefore = $(".noticelist").scrollTop();
        var noticetop = $(".noticelist .list-1").offset().top;
        $(".noticelist").scroll(function() {
            var noticeafter = $(".noticelist").scrollTop();
            if (noticebefore<noticeafter && noticetop < 170) {
                $(".condition .header").addClass("scroll-header");
                noticebefore = noticeafter;
            };
            if (noticebefore>noticeafter && noticetop > 170 || noticetop == 170) {
                $(".condition .header").removeClass("scroll-header");
                noticebefore = noticeafter;
            };
        });
    });
    $(".newslist").scroll(function(){
        var newsbefore = $(".newslist").scrollTop();
        var newstop = $(".newslist .list-1").offset().top;
        $(".newslist").scroll(function() {
            var newsafter = $(".newslist").scrollTop();
            if (newsbefore<newsafter && newstop < 170) {
                $(".condition .header").addClass("scroll-header");
                newsbefore = newsafter;
            };
            if (newsbefore>newsafter && newstop > 170 || newstop == 170) {
                $(".condition .header").removeClass("scroll-header");
                newsbefore = newsafter;
            };
        });
    });

    // 公告新闻轮播点击浏览详情
    $(".item-1 .notice li").click(function(){
    	$("#nav-sub li").removeClass("on");
    	liArray.eq(1).addClass("on");
    	$(".item").removeClass("on");
    	$(".item-2").addClass("on");
    	$(".item-2 .notice-detail").addClass("on");
    	$(".notice-detail .article-" + $(this).data("article")).addClass("on");
    	$(".notice-detail .tool").addClass("on");
    });

    $(".item-1 .news li").click(function(){
    	$("#nav-sub li").removeClass("on");
    	liArray.eq(2).addClass("on");
    	$(".item").removeClass("on");
    	$(".item-3").addClass("on");
    	$(".item-3 .news-detail").addClass("on");
    	$(".news-detail .article-" + $(this).data("article")).addClass("on");
    	$(".news-detail .tool").addClass("on");
    });

    // 公告&&新闻详情
    $(".notice-img").click(function(){
    	$(".notice-detail").addClass("on");
    	$(".notice-detail .article-" + $(this).data("article")).addClass("on");
    	$(".notice-detail .tool").addClass("on");
    }).mouseover(function(){
    	$(this).css("transform","scale(1.05)");
    }).mouseout(function(){
    	$(this).css("transform","scale(1)");
    });

    $(".news-img").click(function(){
    	$(".news-detail").addClass("on");
    	$(".news-detail .article-" + $(this).data("article")).addClass("on")
    	$(".news-detail .tool").addClass("on");
    }).mouseover(function(){
    	$(this).css("transform","scale(1.1)");
    }).mouseout(function(){
    	$(this).css("transform","scale(1)");
    });

    $(".tool .icon").mouseover(function(){
    	$(this).addClass("hover");
    }).mouseout(function(){
		$(this).removeClass("hover");
    });
    // 关闭
    $(".tool-close").click(function(){
    	$(".article").removeClass("on");
    	$(".detail").removeClass("on");
    	$(".tool").removeClass("on");
    });

    // 公告文章切换
	var articleNotSum = $(".notice-detail .article").length;
	$(".item-2 .icon-prev").click(function(){
		var articleOnIndex = $(".notice-detail .article.on").index();
		articleOnIndex--;
		if (articleOnIndex == -1) {
			articleOnIndex = articleNotSum -1;
		}
		$(".notice-detail .article").removeClass("on");
		$(".notice-detail .article").eq(articleOnIndex).addClass("on");
    });
    $(".item-2 .icon-next").click(function(){
    	var articleOnIndex = $(".notice-detail .article.on").index();
		articleOnIndex++;
		if (articleOnIndex == articleNotSum) {
			articleOnIndex = 0;
		}
		$(".notice-detail .article").removeClass("on");
		$(".notice-detail .article").eq(articleOnIndex).addClass("on");
    });
    

 	// 新闻文章切换
 	var articleNewsSum = $(".news-detail .article").length;
	$(".item-3 .icon-prev").click(function(){
		var articleOnIndex = $(".news-detail .article.on").index();
		articleOnIndex--;
		if (articleOnIndex == -1) {
			articleOnIndex = articleNewsSum -1;
		}
		$(".news-detail .article").removeClass("on");
		$(".news-detail .article").eq(articleOnIndex).addClass("on");
    });
    $(".item-3 .icon-next").click(function(){
    	var articleOnIndex = $(".news-detail .article.on").index();
		articleOnIndex++;
		if (articleOnIndex == articleNewsSum) {
			articleOnIndex = 0;
		}
		$(".news-detail .article").removeClass("on");
		$(".news-detail .article").eq(articleOnIndex).addClass("on");
    });

});

