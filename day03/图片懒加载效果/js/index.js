$(function() {
    // 页面滚动  大于等于 今日推荐  显示和隐藏 
    var toolTop = $('.recommend').offset().top;
    console.log(toolTop);
    $(window).scroll(function() {
            if ($(document).scrollTop() >= toolTop) {
                $('.fixedtool').fadeIn();
            } else {
                $('.fixedtool').fadeOut();
            }
        })
        // 添加点击事件 电梯导航和内容区域 一一对应
    $('.fixedtool li').click(function() {
        console.log($(this).index());
        // 当我们每次点击小li, 就需要计算出页面 去往的位置
        // 选出对应索引号的内容盒子 计算他的offset().top
        var current = $('.floor .w').eq($(this).index()).offset().top;
        console.log(current);
        // 页面滚动效果
        $('body,html').stop().animate({
            scrollTop: current,
        })
    })
})