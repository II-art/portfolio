$(function(){
//    $('.content .content-root .content-root-list > li > ul').hide();
    $('.content .content-root .content-root-list > li:nth-of-type(5) > a').click(function(){
        $(this).toggleClass('active');
        
        
        if($(this).hasClass('active')){
            $('.content .content-root .content-root-list > li > ul').removeClass('active');
            $('.content .content-root .content-root-list > li > ul').addClass('active');
        }else{
            $('.content .content-root .content-root-list > li > ul').removeClass('active');
        }
    });
    

    
    $('.content .content-text .order-button span').mouseenter(function(){
        $('.content .content-text .order-button span').removeClass('on');
        $(this).addClass('on');
    }).mouseleave(function(){
        $('.content .content-text .order-button span').removeClass('on');
    });
    

    $('.content .content-text .order-button .backBtn').click(function(){
        window.history.go(-1);
    });
    
    
    $('.content .content-text .order-button .order').click(function(){
        var url = "business07.html";
        $(location).attr('href', url);
    });
    
   
});