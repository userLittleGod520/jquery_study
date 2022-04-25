$(function() {
    // 1、点击全选按钮  后面小按钮跟着 全选按钮
    $('.checkall').change(function() {
        var value = $(this).prop('checked');
        $('.j-checkbox').prop('checked', value);
    })

    ///2、点击小复选框 长度 == 3  全选按钮的状态跟着改变

    $('.j-checkbox').click(function() {
        if ($('.j-checkbox:checked').length == 3) {
            $('.checkall').prop('checked', true);
        } else {
            $('.checkall').prop('checked', false);
        }
    })

    // 3、 购物车数量递增递减
    // 递增
    $('.increment').click(function() {
        var n = $(this).siblings('.itxt').val();
        n++;
        $(this).siblings('.itxt').val(n);
    })

    // 递减
    $('.decrement').click(function() {
        var n = $(this).siblings('.itxt').val();
        if (n == 1) {
            return false;
        }
        n--;
        $(this).siblings('.itxt').val(n);
    })
})