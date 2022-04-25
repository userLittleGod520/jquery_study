$(function() {
    // 让购物车里面的数量初始化为0
    //  1、全选按钮checked 点击小复选框 状态一样
    $('.checkall').change(function() {
        var value = $(this).prop('checked');
        $('.j-checkbox,.checkall').prop('checked', value);
        if ($(this).prop('checked')) {
            $('.cart-item').addClass('check-cart-item');
        } else {
            $('.cart-item').removeClass('check-cart-item');
        }
    })

    // 2、小复选框长度 ===3 时 全选按钮跟着 改变checked状态
    $('.j-checkbox').click(function() {
        if ($('.j-checkbox:checked').length === 3) {
            $('.checkall').prop('checked', true);
        } else {
            $('.checkall').prop('checked', false);
        }
        // 添加商品选中效果
        if ($(this).prop('checked')) {
            $(this).parents('.cart-item').addClass('check-cart-item');
        } else {
            $(this).parents('.cart-item').removeClass('check-cart-item');
        }
    })

    // 3、修改购物车的数量 和小计
    // 递增
    $('.increment').click(function() {
            var n = $(this).siblings('.itxt').val();
            n++;
            $(this).siblings('.itxt').val(n);
            var price = $(this).parents('.p-num').siblings('.p-price').html();
            price = price.substr(1);
            $(this).parents('.p-num').siblings('.p-sum').html('￥' + (price * n).toFixed(2));
            getSum();
        })
        // 递减
    $('.decrement').click(function() {
        var n = $(this).siblings('.itxt').val();
        if (n == 0) {
            return false;
        }
        n--;
        $(this).siblings('.itxt').val(n);
        var price = $(this).parents('.p-num').siblings('.p-price').html();
        price = price.substr(1);
        $(this).parents('.p-num').siblings('.p-sum').html('￥' + (price * n).toFixed(2));
        getSum();

    })

    // 3、用户点击 input的 状态
    $('.itxt').change(function() {
        var n = $(this).val();
        var price = $(this).parents('.p-num').siblings('.p-price').html();
        price = price.substr(1);
        $(this).parents('.p-num').siblings('.p-sum').html('￥' + (price * n).toFixed(2));
        console.log(price);
        getSum();
    })

    // 4、购物车总计金额 和 总计  定义求和函数 使用each() 遍历DOM节点
    function getSum() {
        var sum = 0;
        var money = 0;

        // 5、计算 购物车商品总计
        $('.itxt').each(function(index, domEle) {
            sum += parseInt($(domEle).val());
        })
        $('.amount-sum em').html(sum);

        // 计算 购物车总金额
        $('.p-sum').each(function(index, domEle) {
            money += parseFloat($(domEle).html().substr(1));
            console.log(money);
        })
        $('.price-sum em').html(money.toFixed(2));
    }

    // 6、删除购物车功能
    // 三种删除 1、点击删除商品后面的  2、删除勾选的商品   3、清空购物车
    // 第一种
    $('.p-action a').click(function() {
        $(this).parents('.cart-item').remove();
        getSum();
    });
    // 第二种 删除所勾选的商品
    $('.remove-batch').click(function() {
        // 查看勾选框里面checked值
        $('.j-checkbox:checked').parents('.cart-item').remove();
        getSum();
    })

    // 第三种 清空 购物车
    $('.clear-all').click(function() {
        $('.cart-item').remove();
        getSum();
    })


    // 7、选中商品时，修改商品背景颜色 未选商品 清空商品背景色
    // 添加样式  
})