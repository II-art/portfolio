$(function(){
    $('.ham span.bar').click(function(){
            if($('.ham').hasClass('active')){
                $('.ham span.bar').animate({top:'15px'},100,function(){
                    $('.ham span.bar1').css({transform: 'rotate(-45deg)'});
                    $('.ham span.bar2').css({display:'none'});
                    $('.ham span.bar3').css({transform: 'rotate(45deg)'});
                });
                $('.ham').removeClass('active');
                $('.minimenu').css({right: '-150px'});
//                $('.minimenu').slideDown();
            }
            else{
                $('.ham span.bar1').css({transform: 'rotate(0deg)'});
                $('.ham span.bar2').css({display:'block'});
                $('.ham span.bar3').css({transform: 'rotate(0deg)'});
                $('.ham span.bar1').animate({top:'0px'},300);
                $('.ham span.bar2').animate({top:'12px'},300);
                $('.ham span.bar3').animate({top:'24px'},300);
                $('.ham').addClass('active');
                $('.minimenu').css({right: '-500px'});
//                $('.minimenu').slideUp();
            }
    });
});
$(function(){
    var sitemap = $('#sitemap'),
		sitempaoffset = sitemap.offset().top;/*내가원하는 요소까지의 높이*/
		
		console.log(sitempaoffset);
		
		$(window).scroll(function(){
			var scroll=$(this).scrollTop();
			console.log(scroll);
			
			if(scroll > sitempaoffset-200){
				$('#header').css({display:'none'});
			}else{
				$('#header').css({display:'flex'});
			}
		});
});