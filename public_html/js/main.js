$(function () {
    $('ul.tabs').delegate('li:not(.current)', 'click', function() {
      $(this).addClass('current').siblings().removeClass('current')
      .parents('div.section').find('div.box').hide().eq($(this).index()).show();
    });
    
    $('.search-popup').hide();
    $('.drop').hide();
    $('.shadow').hide();
    $('.popup').hide();
    $('.obj-hover').hide();
    
    $('.close-popup a').click(function(){
        $(this).parents('.search-popup').fadeOut();
        return false;
    });
    $('.close').click(function(){
        $(this).parents('.shadow').fadeOut();
        return false;
    });
    
    $('.type-select a').click(function(){
        $(this).parent().find('.drop').show();
        return false;
    });
    $('.obj-add a').click(function(){
        $('.obj-hover').show();
        return false;
    });
    $('.drop-close a').click(function(){
        $(this).parents('.drop').hide();
    });
    
    $('.show-popup').click(function(){
        $('.shadow').show();
        $('.popup').show();
    });
});