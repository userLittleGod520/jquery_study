$(function() {
    // 1、当页面高度到了今日推荐时，显示和隐藏导航栏
    // 添加节流阀
    var flag = true;
    var divTop = $('.recommend').offset().top;
    console.log(divTop);
    toggleTool();

    function toggleTool() {
        if ($(document).scrollTop() >= divTop) {
            $('.fixedtool').fadeIn();
        } else {
            $('.fixedtool').fadeOut();
        }
    }
    $(window).scroll(function() {
            toggleTool();
            // 4、使用循环去遍历.floor的 .w
            if (flag) {
                $('.floor .w').each(function(i, ele) {
                    // 如果被页面卷去的高度  大于等于 内容区的高度 offset().top
                    if ($(document).scrollTop() >= $(ele).offset().top) {
                        console.log(i); //获取了 内容区高度的索引值
                        // 利用索引号找到导航栏里面的li添加样式 兄弟去除样式
                        $('.fixedtool li').eq($(this).index()).addClass('current').siblings().removeClass();
                    }
                })
            }
        })
        // 2、导航栏添加点击事件
    $('.fixedtool li').click(function() {
        // 关闭节流阀
        flag = false;
        var current = $('.floor .w').eq($(this).index()).offset().top;
        console.log(current);
        // 添加动画
        $('body,html').stop().animate({
                scrollTop: current
            }, function() {
                flag = true;
            })
            // 3、点击导航栏的li时 添加类名 兄弟删除类名
        $(this).addClass('current').siblings().removeClass();
    })

})