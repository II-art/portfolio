$(function(){
    $('.content .content-root .content-root-list > li:nth-of-type(5) > a').click(function(){
        $(this).toggleClass('active');
        
        
        if($(this).hasClass('active')){
            $('.content .content-root .content-root-list > li > ul').removeClass('active');
            $('.content .content-root .content-root-list > li > ul').addClass('active');
        }else{
            $('.content .content-root .content-root-list > li > ul').removeClass('active');
        }
    });
    
    
    $('.content .content-text h2').fadeTo(1000, 1).queue(function(){
        $('.content .content-text p').fadeTo(500, 1).queue(function(){
            $('#section2').fadeTo(500, 1);
        });
    });
    
    
    $('.section3-content .order-button dd').click(function(){
        location.href='https://www.insper.co.kr/';
    });
    
    
    var exText = $('.section3-content .explain .explain-text');
    $(window).scroll(function(){
        var scrollValue = $(document).scrollTop();
        console.log(scrollValue);
        
        if(scrollValue > 300){
            exText.removeClass('on');
        }else{
            exText.addClass('on');
        }
    });
    
    
    
    
    

    
    
    
});