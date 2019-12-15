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
        $('.content .content-text p').fadeTo(500, 1);
    });
    
    
    //slide
    var slideli = $('#section2 .rndImg ul li'),
        count = 0,
        lilength = slideli.length;
    
    slideli.first().show().siblings().hide();
    
    setInterval(make, 20000);
    
    function make(){
        count++;
        if(count==lilength){
            count=0;
        }
        slide();
    };
    function slide(){
      slideli.eq(count).fadeIn(5000).siblings().fadeOut(5000);  
    };
});