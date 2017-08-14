$(document).ready(function(){
  // 移动端菜单按钮
  $(".nav-toggle").click(function(){
    if(!$(this).hasClass("toggle-animate")) {//点击打开
      $(this).addClass("toggle-animate");//按钮动画
      $("#nav-main").addClass("open-nav");
      setTimeout(function(){
        $(".navitem").css("opacity",1);
        $("#lang").css({
          "opacity": 1,
          "bottom": "5%"
        });
      },1000);
    } else {
      $(".nav-toggle").removeClass("toggle-animate");
      $("#nav-main").removeClass("open-nav");
      $(".navitem").css("opacity",0);
      $("#lang").css({
        "opacity": 0,
        "bottom": "-62px"
      });
      if($(document.body).outerWidth(true) > 768) {
        $("#lang").css("opacity",1);
      };
    };
  });

  // 菜单按钮悬浮特效
  $(".nav-toggle").mouseover(function(){
    $(this).addClass("hover");
  }).mouseout(function(){
    $(this).removeClass("hover");
  });

  // 二级页面头部标题
  var liArray = $("#nav-sub li");
  var pageTitle = liArray.eq(0).text();
  $("#page-title").text(pageTitle);

  // 返回上一页
  $("#back").click(function(){
    window.history.back();
  });

});

