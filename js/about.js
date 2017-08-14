// 首页初始化
window.onpageshow = aboutInit;

function aboutInit() {
  $(".about #nav-sub").css("marginLeft","50px");
  $(".about .nav-toggle").css("opacity",1);
  $(".about #back").css("opacity",1);
  $(".about .shade").css("marginLeft","100%");
  $(".about .content").css("opacity",1);
  $(".about .arrow-wrap").css("opacity",1);
  $(".page-title").css("opacity",1);
}


$(document).ready(function(){

  // 导航切换
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

  // 向右切换
  $(".arrow-right").click(function(){
    if(itemOnIndex == liArray.length - 1) {
      itemOnIndex = 0;
      $(".arrow-left").removeClass("on");
    } else {
      itemOnIndex++;
      $(".arrow-left").addClass("on");
    }
    liArray.removeClass("on");
    itemArray.removeClass("on");
    liArray.eq(itemOnIndex).addClass("on");
    itemArray.eq(itemOnIndex).addClass("on");
  })

  // 向左切换
  $(".arrow-left").click(function(){
    if(itemOnIndex == 1) {
      $(".arrow-left").removeClass("on");
    }
    itemOnIndex--;
    liArray.removeClass("on");
    itemArray.removeClass("on");
    liArray.eq(itemOnIndex).addClass("on");
    itemArray.eq(itemOnIndex).addClass("on");
  })

  $(".arrow").mouseover(function(){
    $(this).addClass("hover");
  }).mouseout(function(){
    $(this).removeClass("hover");
  });

  // 移动端设置
  var pageTitle = liArray.eq(0).text();
  $("#page-title").text(pageTitle);

  for(var i = 0; i < liArray.length; i++) {
    $(".item-title").eq(i).text(liArray.eq(i).text());
  }
  
});