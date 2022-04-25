$(function() {
    // 电梯导航效果
    // 1、当页面高度到了今日推荐 显示 fixedtool 区域
    // 4、当我们点击小li 此时不需要执行 页面滚动事件里面的li 的背景选择  添加 current
    // 5、节流阀 互斥锁
    var flag = true;
    var divTop = $('.recommend').offset().top;
    console.log(divTop); // 658 今日推荐 距离页面的距离
    toggleTool();

    function toggleTool() {
        if ($(document).scrollTop() >= divTop) {
            $('.fixedtool').show();
        } else {
            $('.fixedtool').hide();
        }
    }
    $(window).scroll(function() {
            toggleTool();
            // 当页面焦点到了某个大图时，将li的类修改为current，兄弟移除类名
            // 需要遍历each()
            if (flag) {
                $('.floor .w').each(function(index, domEle) {
                    // 如果被卷去的头部 大于等于 内容区每个模块的offset().top;
                    if ($(document).scrollTop() >= $(domEle).offset().top) {
                        console.log(index); // 利用索引号找到相对应的电梯导航li 添加类
                        $('.fixedtool li').eq(index).addClass('current').siblings().removeClass();
                    }
                })
            }
        })
        // 2、添加点击事件  当用户点击fixed时 获取页面高度 设置 scrollTop 值为当前高度
    $('.fixedtool li').click(function() {
            flag = false;
            var current = $(' .floor .w').eq($(this).index()).offset().top;
            console.log(current);
            // 进行动画
            $('body,html').stop().animate({
                scrollTop: current
            }, function() {
                flag = true;
            });

            // 3、点击之后让当前li 添加类名
            $(this).addClass('current').siblings().removeClass('current');
        })
        // 当我们个滚动到内容区域的某个模块,左侧电梯导航，相对应的小li模块 也会添加current类，兄弟移除current类名
        // 3、触发事件是页面滚动 因此这个功能要写到页面滚动事件里面
})