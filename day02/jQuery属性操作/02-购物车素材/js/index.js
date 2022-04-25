$(function() {
    // 1、全选按钮
    $('.checkall').click(function() {
        var value = $(this).prop('checked');
        $('.j-checkbox,.checkall').prop('checked', value);
        if ($(this).prop('checked')) {
            $('.cart-item').addClass('check-cart-item');
        } else {
            $('.cart-item').removeClass('check-cart-item');
        }
    })

    // 2、点击小复选框 长度 checked长度 等于 3 就让  全选按钮 一起发生改变
    $('.j-checkbox').click(function() {
        if ($('.j-checkbox:checked').length === 3) {
            $('.checkall').prop('checked', true);
        } else {
            $('.checkall').prop('checked', false);
        }
        if ($(this).prop('checked')) {
            $(this).parents('.cart-item').addClass('check-cart-item');
        } else {
            $(this).parents('.cart-item').removeClass('check-cart-item');
        }
    })

    // 3、修改商品购物车  数量 和价格发生修改
    // 递增
    $('.increment').click(function() {
            var n = $(this).siblings('.itxt').val();
            n++;
            $(this).siblings('.itxt').val(n);
            var price = $(this).parent().parent().siblings('.p-price').html();
            price = price.substr(1);
            $(this).parents('.p-num').siblings('.p-sum').html('￥' + (price * n).toFixed(2));
            getSum();
        })
        // 递减
    $('.decrement').click(function() {
        var n = $(this).siblings('.itxt').val();
        if (n == 1) {
            return false;
        }
        n--;
        $(this).siblings('.itxt').val(n);
        getSum();
    })

    // 4、当用户手动修改 商品数量时
    $('.itxt').change(function() {
        var n = $(this).val();
        var price = $(this).parents('.p-num').siblings('.p-price').html();
        price = price.substr(1);
        $(this).parents('.p-num').siblings('.p-sum').html('￥' + (price * n).toFixed(2));
        getSum();
    })


    // 5、each() 循环DOM节点 添加getSum求和函数
    // 使用each() 遍历所有的价格
    function getSum() {
        var sum = 0;
        var money = 0;
        // 开始循环
        $('.itxt').each(function(index, obj) {
            sum += parseInt($(obj).val());
        })
        $('.amount-sum em').text(sum);

        // 计算商品总计
        $('.p-sum').each(function(index, obj) {
            money += parseFloat($(obj).html().substr(1));
        })
        $('.price-sum em').text(money.toFixed(2));
    }

    // 6、购物车删除
    // 1、商品后面的删除按钮  删除当前商品 $(this) 
    // 2、商品下面的 勾选删除所有按钮  判断按钮的checked状态
    // 3、清理购物车

    $('.p-action a').click(function() {
        // 删除当前商品
        $(this).parents('.cart-item').remove('');
    });

    // 删除选中的商品
    $('.remove-batch').click(function() {
        // 删除的是小复选框的checked 等于 true
        $('.j-checkbox:checked').parents('.cart-item').remove();
    })

    // 清空购物车
    $('.clear-all').click(function() {
        $('.cart-item').remove();
    })
})