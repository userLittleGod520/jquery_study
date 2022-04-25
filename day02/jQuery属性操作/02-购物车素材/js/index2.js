$(function() {
    // 1、全选按钮 选中checked  3个小复选框的checked跟着改变
    $('.checkall').change(function() {
        var value = $(this).prop('checked');
        $('.j-checkbox,.checkall').prop('checked', value);
        if ($(this).prop('checked')) {
            $('.cart-item').addClass('check-cart-item');
        } else {
            $('.cart-item').removeClass('check-cart-item');
        }
    })

    // 2、点击小复选框 checked长度 ===3 则 修改全选按钮d
    $('.j-checkbox').change(function() {
        if ($('.j-checkbox:checked').length == 3) {
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

    // 3、购物车商品增加和减少  并且修改商品小计
    // 商品递增
    $('.increment').click(function() {
        var n = $(this).siblings().val();
        n++;
        $(this).siblings().val(n);
        var price = $(this).parents('.p-num').siblings('.p-price').html();
        price = price.substr(1);
        console.log(price);
        $(this).parents('.p-num').siblings('.p-sum').html('￥' + (price * n).toFixed(2));
        getSum();
    });
    // 商品递减
    $('.decrement').click(function() {
        var n = $(this).siblings().val();
        if (n == 1) {
            return false;
        }
        n--;
        $(this).siblings().val(n);
        var price = $(this).parents('.p-num').siblings('.p-price').html();
        price = price.substr(1);
        console.log(price);
        $(this).parents('.p-num').siblings('.p-sum').html('￥' + (price * n).toFixed(2));
        getSum();
    })

    // 4、当用户直接修改商品数量时
    $('.itxt').change(function() {
        var n = $(this).val();
        var price = $(this).parents('.p-num').siblings('.p-price').html();
        price = price.substr(1);
        $(this).parents('.p-num').siblings('.p-sum').html('￥' + (price * n).toFixed(2));
        getSum();
    })

    // 5、设置购物车 下方结算  商品总数量和 总金额 使用求和函数  + each() 函数
    function getSum() {
        var sum = 0;
        var money = 0;
        $('.itxt').each(function(index, domEle) {
            // 表单获取的值为字符串要进行数据转换
            sum += parseInt($(domEle).val());
        })
        $('.amount-sum em').text(sum);

        // 计算商品总金额
        $('.p-sum').each(function(index, domEle) {
            money += parseFloat($(domEle).html().substr(1));
        })
        $('.price-sum em').text(money.toFixed(2));
    }

    // 6、删除功能
    $('.p-action a').click(function() {
        $(this).parents('.cart-item').remove();
        getSum();
    })
    $('.remove-batch').click(function() {
        $('.j-checkbox:checked').parents('.cart-item').remove();
        getSum();
    })
    $('.clear-all').click(function() {
        $('.cart-item').remove();
        getSum();
    })
})