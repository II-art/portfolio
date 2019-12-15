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
    
    var sel ;
    setInterval(function(){
        sel = $('#sel option:selected').val();
    },200);
    
    $('.go').click(function(){
        if(sel=='한솔그룹'){
            window.open('http://hansol.com/kor/main/main.jsp?main_flag=swf','_blank')
        }
        else if(sel=='한솔PNS'){
            window.open('http://www.hansolpns.com/paper/','_blank')
        }
        else if(sel=='한솔홈데코'){
            window.open('http://www.hansolhomedeco.co.kr/home/','_blank')
        }
    });
    
    
    $('#mid .flex-wrap .button0').click(function(){
        $('#mid .flex-wrap').css({'margin-left':'0px'});
        $('#mid .flex-wrap .button0').css({'left':'40px'});
    });
    
    $('#header .sub-wrap ul .gain').click(function(){
        $('#gain').css({'display':'block'});
        $('#inbox').css({'display':'block'});
        $('html').scrollTop(0);
    });
    $('#header .ham .minimenu .top ul .gain').click(function(){
        $('#gain').css({'display':'block'});
        $('#inbox').css({'display':'block'});
        $('.ham span.bar1').css({transform: 'rotate(0deg)'});
        $('.ham span.bar2').css({display:'block'});
        $('.ham span.bar3').css({transform: 'rotate(0deg)'});
        $('.ham span.bar1').animate({top:'0px'},300);
        $('.ham span.bar2').animate({top:'12px'},300);
        $('.ham span.bar3').animate({top:'24px'},300);
        $('.ham').addClass('active');
        $('.minimenu').css({right: '-500px'});
        $('html').scrollTop(0);
    });
    
    $('#inbox .exit').click(function(){
        $('#gain').css({'display':'none'});
        $('#inbox').css({'display':'none'});
    });
});
$(function(){
    $('.service-wrap .click-box .p1').click(function(){
        $('.service-wrap .click-box .p').css({'margin-top':'0'});
        $(this).css({'margin-top':'-40px'});
        $('.service-wrap .box .text .te').css({'opacity':'0'});
        $('.service-wrap .box .text .text1').css({'opacity':'1'});
        $('.service-wrap .box .img .im').css({'opacity':'0'});
        $('.service-wrap .box .img .img1').css({'opacity':'1'});
    });
    $('.service-wrap .click-box .p2').click(function(){
        $('.service-wrap .click-box .p').css({'margin-top':'0'});
        $(this).css({'margin-top':'-40px'});
        $('.service-wrap .box .text .te').css({'opacity':'0'});
        $('.service-wrap .box .text .text2').css({'opacity':'1'});
        $('.service-wrap .box .img .im').css({'opacity':'0'});
        $('.service-wrap .box .img .img2').css({'opacity':'1'});
    });
    $('.service-wrap .click-box .p3').click(function(){
        $('.service-wrap .click-box .p').css({'margin-top':'0'});
        $(this).css({'margin-top':'-40px'});
        $('.service-wrap .box .text .te').css({'opacity':'0'});
        $('.service-wrap .box .text .text3').css({'opacity':'1'});
        $('.service-wrap .box .img .im').css({'opacity':'0'});
        $('.service-wrap .box .img .img3').css({'opacity':'1'});
    });
    $('.service-wrap .click-box .p4').click(function(){
        $('.service-wrap .click-box .p').css({'margin-top':'0'});
        $(this).css({'margin-top':'-40px'});
        $('.service-wrap .box .text .te').css({'opacity':'0'});
        $('.service-wrap .box .text .text4').css({'opacity':'1'});
        $('.service-wrap .box .img .im').css({'opacity':'0'});
        $('.service-wrap .box .img .img4').css({'opacity':'1'});
    });
    $('.service-wrap .click-box .p5').click(function(){
        $('.service-wrap .click-box .p').css({'margin-top':'0'});
        $(this).css({'margin-top':'-40px'});
        $('.service-wrap .box .text .te').css({'opacity':'0'});
        $('.service-wrap .box .text .text5').css({'opacity':'1'});
        $('.service-wrap .box .img .im').css({'opacity':'0'});
        $('.service-wrap .box .img .img5').css({'opacity':'1'});
    });
    
});
$(function(){
    var sitemap = $('#sitemap'),
		sitemapoffset = sitemap.offset().top;/*내가원하는 요소까지의 높이*/
    var slide = $('#mid .env-wrap'),
        notice = $('#mid .flex-wrap'),
        service = $('#mid .service-wrap'),
		slideoffset = slide.offset().top,
        serviceoffset = service.offset().top,/*내가원하는 요소까지의 높이*/
        noticeoffset = notice.offset().top;
//		console.log(sitempaoffset);
		
    setInterval(function(){
        sitemapoffset = sitemap.offset().top;
        slideoffset = slide.offset().top;
        noticeoffset = notice.offset().top;
//        console.log(sitempaoffset);
    },500);
		$(window).scroll(function(){
			var scroll=$(this).scrollTop();
//			console.log(scroll);
			
			if(scroll > sitemapoffset-200){
				$('#header').css({display:'none'});
			}else{
				$('#header').css({display:'flex'});
			}
            
            if(scroll > slideoffset && (scroll < noticeoffset ||scroll == noticeoffset)){
				$('#header .logo-wrap a').css({'background-image': 'url(./img/footerlogo.png)'});
                $('#header .main-wrap ul li a').css({'color':'#fff'});
                $('#header .ham .bar').css({'background-color':'#fff'});
			}else{
				$('#header .logo-wrap a').css({'background-image': 'url(./img/mainlogo.png)'});
                $('#header .main-wrap ul li a').css({'color':'#000'});
                $('#header .ham .bar').css({'background-color':'#918f8f'});
			}
            
            if(scroll > noticeoffset-400){
                $('.paper1').addClass('dis');
                $('.paper2').addClass('dis');
                $('.paper3').addClass('dis');
                $('.paper4').addClass('dis');
            }
            
            if(scroll > serviceoffset-400){
                $('.srv1').addClass('dis');
                $('.srv2').addClass('dis');
                $('.srv3').addClass('dis');
                $('.srv4').addClass('dis');
                $('.srv5').addClass('dis');
            }
		});
});
$(function(){
    var x = 1;
        $('#mid .flex-wrap .button2 i').click(function(){
           if(x==1){ 
               $('#mid .flex-wrap').css({'margin-left':'-960px'});
                $('#mid .flex-wrap .button1').css({'left':'980px'});
                $('#mid .flex-wrap .button2').css({'left':'1860px'});
               $('#mid .flex-wrap .button0').css({'left':'1000px'});
                x+=1;
//                console.log('1;',x);
            }
        });
        $('#mid .flex-wrap .button1 i').click(function(){
            if(x==2){
               $('#mid .flex-wrap').css({'margin-left':'0px'});
                $('#mid .flex-wrap .button1').css({'left':'20px'});
                $('#mid .flex-wrap .button2').css({'left':'900px'});
                $('#mid .flex-wrap .button0').css({'left':'40px'});
                x-=1;
//                console.log('2;',x);
            } 
        });  
    
//        $('#mid .service-wrap .srv1').mouseover(function(){
//            $('#mid .service-wrap .srv1 .cube .blue').css({'margin-left':'0px'});
//        });
//        $('#mid .service-wrap .srv1').mouseleave(function(){
//            $('#mid .service-wrap .srv1 .cube .blue').css({'margin-left':'400px'});
//        });
//    $('#mid .service-wrap .srv2').mouseover(function(){
//            $('#mid .service-wrap .srv2 .cube .blue').css({'margin-left':'0px'});
//        });
//        $('#mid .service-wrap .srv2').mouseleave(function(){
//            $('#mid .service-wrap .srv2 .cube .blue').css({'margin-left':'400px'});
//        });
//    $('#mid .service-wrap .srv3').mouseover(function(){
//            $('#mid .service-wrap .srv3 .cube .blue').css({'margin-left':'0px'});
//        });
//        $('#mid .service-wrap .srv3').mouseleave(function(){
//            $('#mid .service-wrap .srv3 .cube .blue').css({'margin-left':'400px'});
//        });
//    $('#mid .service-wrap .srv4').mouseover(function(){
//            $('#mid .service-wrap .srv4 .cube .blue').css({'margin-left':'0px'});
//        });
//        $('#mid .service-wrap .srv4').mouseleave(function(){
//            $('#mid .service-wrap .srv4 .cube .blue').css({'margin-left':'400px'});
//        });
//    $('#mid .service-wrap .srv5').mouseover(function(){
//            $('#mid .service-wrap .srv5 .cube .blue').css({'margin-left':'0px'});
//        });
//        $('#mid .service-wrap .srv5').mouseleave(function(){
//            $('#mid .service-wrap .srv5 .cube .blue').css({'margin-left':'400px'});
//        });
});
$(function(){
    var y = 1;
    $('#mid .flex-wrap .button22 i').click(function(){
        if(y==1){
           $('#mid .flex-wrap').css({'margin-left':'-480px'});
            $('#mid .flex-wrap .button11').css({'left':'500px'});
            $('#mid .flex-wrap .button22').css({'left':'900px'});
            $('#mid .flex-wrap .button0').css({'left':'520px'});
            y+=1;
        }
        else if(y==2){
           $('#mid .flex-wrap').css({'margin-left':'-960px'});
            $('#mid .flex-wrap .button11').css({'left':'980px'});
            $('#mid .flex-wrap .button22').css({'left':'1380px'});
            $('#mid .flex-wrap .button0').css({'left':'1000px'});
            y+=1;
        }
        else if(y==3){
           $('#mid .flex-wrap').css({'margin-left':'-1170px'});
            $('#mid .flex-wrap .button11').css({'left':'1220px'});
            $('#mid .flex-wrap .button22').css({'left':'1840px'});
            $('#mid .flex-wrap .button0').css({'left':'1240px'});
            y+=1;
        }
    });
    $('#mid .flex-wrap .button11 i').click(function(){
        if(y==2){
           $('#mid .flex-wrap').css({'margin-left':'0px'});
            $('#mid .flex-wrap .button11').css({'left':'20px'});
            $('#mid .flex-wrap .button22').css({'left':'420px'});
            $('#mid .flex-wrap .button0').css({'left':'40px'});
            y-=1;
        }
        else if(y==3){
           $('#mid .flex-wrap').css({'margin-left':'-480px'});
            $('#mid .flex-wrap .button11').css({'left':'500px'});
            $('#mid .flex-wrap .button22').css({'left':'900px'});
            $('#mid .flex-wrap .button0').css({'left':'520px'});
            y-=1;
        }
        else if(y==4){
           $('#mid .flex-wrap').css({'margin-left':'-960px'});
            $('#mid .flex-wrap .button11').css({'left':'980px'});
            $('#mid .flex-wrap .button22').css({'left':'1380px'});
            $('#mid .flex-wrap .button0').css({'left':'1000px'});
            y-=1;
        }
    }); 
});
$(function(){
    var z = 1;
    $('#mid .flex-wrap .button222 i').click(function(){
        if(z==1){
           $('#mid .flex-wrap').css({'margin-left':'-480px'});
            $('#mid .flex-wrap .button111').css({'left':'500px'});
            $('#mid .flex-wrap .button222').css({'left':'900px'});
            $('#mid .flex-wrap .button0').css({'left':'520px'});
            z+=1;
        }
        else if(z==2){
           $('#mid .flex-wrap').css({'margin-left':'-960px'});
            $('#mid .flex-wrap .button111').css({'left':'980px'});
            $('#mid .flex-wrap .button222').css({'left':'1380px'});
            $('#mid .flex-wrap .button0').css({'left':'1000px'});
            z+=1;
        }
        else if(z==3){
           $('#mid .flex-wrap').css({'margin-left':'-1440px'});
            $('#mid .flex-wrap .button111').css({'left':'1460px'});
            $('#mid .flex-wrap .button222').css({'left':'1860px'});
            $('#mid .flex-wrap .button0').css({'left':'1480px'});
            z+=1;
        }
    });
    $('#mid .flex-wrap .button111 i').click(function(){
        if(z==2){
           $('#mid .flex-wrap').css({'margin-left':'0px'});
            $('#mid .flex-wrap .button111').css({'left':'20px'});
            $('#mid .flex-wrap .button222').css({'left':'420px'});
            $('#mid .flex-wrap .button0').css({'left':'40px'});
            z-=1;
        }
        else if(z==3){
           $('#mid .flex-wrap').css({'margin-left':'-480px'});
            $('#mid .flex-wrap .button111').css({'left':'500px'});
            $('#mid .flex-wrap .button222').css({'left':'900px'});
            $('#mid .flex-wrap .button0').css({'left':'520px'});
            z-=1;
        }
        else if(z==4){
           $('#mid .flex-wrap').css({'margin-left':'-960px'});
            $('#mid .flex-wrap .button111').css({'left':'980px'});
            $('#mid .flex-wrap .button222').css({'left':'1380px'});
            $('#mid .flex-wrap .button0').css({'left':'1000px'});
            z-=1;
        }
    }); 
});
$(function(){
    window.onload = function () {
    var elm = ".box";//같은부모안에있는 box들끼리만 적용
    $(elm).each(function (index) {
        // 개별적으로 Wheel 이벤트 적용
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = 0;
            if (!event){
              event = window.event;
            }
            // console.log("wheelDelta : ",event.wheelDelta);
            // console.log("detail : ",event.detail);
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                // if (window.opera) delta = -delta;
            }
            // else if (event.detail){
            //     delta = -event.detail / 3;
            // }
            var moveTop = $(window).scrollTop();
            console.log("moveTop : ",moveTop);
            var elmSelecter = $(elm).eq(index);
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if ($(elmSelecter).next() != undefined) {
                    try{
                        moveTop = $(elmSelecter).next().offset().top;
                    }catch(e){}
                }
            // 마우스휠을 아래에서 위로
            } else {
                if ($(elmSelecter).prev() != undefined) {
                    try{
                        moveTop = $(elmSelecter).prev().offset().top;
                    }catch(e){}
                }
            }

            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 800, complete: function () {
                }
            });
        });
    });
}
});
