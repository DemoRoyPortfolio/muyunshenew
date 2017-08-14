// 首页初始化
window.onpageshow = indexInit;

function indexInit() {
  // 企业LOGO淡出
  $("#logo").css("opacity", 1);
  // PC端动效
  if($(document.body).outerWidth(true) > 768) {
    // 导航条下滑出现
    setTimeout(function() {
      $("#nav-main").css("transform", "translateY(0)");
      $("#lang").css("transform", "translateY(0)");
      $("#search").css("transform", "translateY(0)");
    }, 1000);
    // 捐款人信息和分享
    setTimeout(function() {
      $("#donor").css("opacity", 1);
      $("#share").css("opacity", 1);
    }, 2000);
    // 大图轮播淡出
    setTimeout(function(){
      $("#index-slide").css({
        "opacity": 1,
        "transform": "translateY(0)"
      });
      setTimeout(function(){
        $("#index-slide .text").css({
          "transform": "translateY(0)",
          "opacity": 1
        });
      },500);
    },2500);
  } else { //移动端特效
    setTimeout(function(){
      $("#index-slide").css("opacity",1);
      $("#index-slide .text").css("opacity", 1);
    },1500);
    setTimeout(function(){
      $(".nav-toggle").css("opacity",1);
    },2200);
  }
}

$(document).ready(function(){
  // 首页大图轮播
  if($(document.body).outerWidth(true) > 768) {
    var itemIndex = 0;
    var itemCount = $(".item").length;
    setInterval(function(){
      if(itemIndex == itemCount - 1) {
        itemIndex = 0;
      } else {
        itemIndex++;
      };
      $(".item").eq(itemIndex - 1).fadeOut(2000);
      $(".item").eq(itemIndex).fadeIn(4000);
    },8000);
  }
  // 按钮效果
  $("#index-slide .title").mouseover(function(){
    $(this).addClass("hover");
  }).mouseout(function(){
    $(this).removeClass("hover");
  });

});