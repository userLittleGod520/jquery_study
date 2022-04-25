$(function() {
    // 电梯门效果
    // 给页面添加 窗口滑动事件
    // 1、获取页面今日推荐 距离页面的高度
    var tool = $('.recommend').offset().top;
    xianshi();
    // console.log(tool);
    // 如果页面被卷高度达到了 今日推荐 就显示和隐藏
    function xianshi() {
        if ($(document).scrollTop() >= tool) {
            // 显示 导航
            $('.fixedtool').fadeIn();
        } else {
            $('.fixedtool').fadeOut();
        }
    }
    $(window).scroll(function() {
        xianshi();
    });
    $('.fixedtool li').click(function() {
        console.log($(this).index());
        var current = $('.floor .w').eq($(this).index()).offset().top;
        console.log(current);
        // 添加动画
        $('body,html').stop().animate({
            scrollTop: current,
        });
        // 点击li添加背景，设置其他兄弟为空
        $(this).addClass('current').siblings().removeClass('current');
    })
})