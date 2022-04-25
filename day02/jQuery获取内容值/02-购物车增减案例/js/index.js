$(function() {
    // 1、全选和全不选功能
    // 就是把全选按钮的状态 ( callback) 赋值给 三个小按钮( j-checkbox))就可以了
    // 事件可以使用change()
    $('.checkall').change(function() {
        $('.j-checkbox,.checkall').prop('checked', $(this).prop('checked'));
    })


    // 当我们每次小复选框被选中的个数等于3 就应该把全选按钮选上  否则 全选按钮不选
    // :checked选择器  :checked 查找所有 被选中的表单元素

    $('.j-checkbox').change(function() {
        // 判断 3个小复选框 是否选中  === 3
        // $('.j-checkbox').length 就是所有小复选框的 个数
        if ($('.j-checkbox:checked').length === $('.j-checkbox').length) {
            $('.checkall').prop('checked', true);
        } else {
            $('.checkall').prop('checked', false);
        }
    })


    // 3、增减商品数量模块， 声明一个变量 点击+号 (increment) ,就让这个值++ 赋值给文本框
    $('.increment').click(function() {
            var n = $(this).siblings('.itxt').val();
            n++;
            $(this).siblings('.itxt').val(n);
            // 获取商品单价
            var price = $(this).parents('.p-num').siblings('.p-price').html();
            // 去除￥ 符号
            price = price.substr(1);
            // 单价* 数量 然后显示在 html里面  四舍五入
            $(this).parent().parent().siblings('.p-sum').html('￥' + (price * n).toFixed(2));
            $()
                // console.log(price);
            getSum();
        })
        // 递减按钮
    $('.decrement').click(function() {
        var n = $(this).siblings('.itxt').val();
        if (n == 1) {
            return false;
        }
        n--;
        $(this).siblings('.itxt').val(n);
        var p = $(this).parents('.p-num').siblings('.p-price').html();
        p = p.substr(1);
        // console.log(p);
        getSum();

    })


    // 4、修改商品递减递增之后 的价格  数量 * 单价 = 商品的小计  获取当前的价格 this.parent.parent.siblings('.p_price')
    // 核心思路：每次点击+号 或者小号  根据文本框的值 乘以 商品单价 = 商品小计
    // 注意1:只能增加本商品的小计  就是当前商品的小计模块 (p-sum)
    // 修改普通元素的内容 使用 text() 方法
    // 注意2:当前商品的价格，把￥符号去掉再相乘  截取字符串substr(1) 



    // 5、用户直接输入 商品数量  修改小计 使用change
    // 最新的表格内的值 * 商品单价 
    $('.itxt').change(function() {
        // 先获取表单里面的值
        // console.log($(this).val());
        var n = $(this).val();
        var p = $(this).parents('.p-num').siblings('.p-price').html();
        p = p.substr(1);
        $(this).parents('.p-num').siblings('.p-sum').html('￥' + (p * n).toFixed(2));
        getSum();

    })


    // 6、计算购物车总计
    function getSum() {
        var sum = 0;
        var money = 0;
        // 商品总计数
        $('.itxt').each(function(index, docEle) {
            sum += parseInt($(docEle).val());
            sum = parseFloat(sum);
            // console.log(sum);
        });
        $('.amount-sum em').text(sum);

        // 商品总价格
        $('.p-sum').each(function(index, docEle) {
            money += parseFloat($(docEle).html().substr(1));
        })
        $('.price-sum em').text(money.toFixed(2));
    }
})