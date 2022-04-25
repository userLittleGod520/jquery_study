$(function() {
    // 1、点击按钮 将input里面的val值显示出来
    $('.btn').click(function() {
        var li = $('<li></li>');
        li.html($('#text').val() + '<a href="#">删除</a>');
        $('.info').prepend(li);
        $('#text').val('');
    })
})