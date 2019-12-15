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
    
     $('#mid .board-wrap .locate .locate-list > li:nth-of-type(5) > a').click(function(){
        $(this).toggleClass('active');
        
        
        if($(this).hasClass('active')){
            $('#mid .board-wrap .locate .locate-list > li > ul').removeClass('active');
            $('#mid .board-wrap .locate .locate-list > li > ul').addClass('active');
        }else{
            $('#mid .board-wrap .locate .locate-list > li > ul').removeClass('active');
        }
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
    
    $('#mid .board-wrap .post1 .text').click(function(){
        $('#gain').css({'display':'block'});
        $('#inbox2').css({'display':'block'});
    });
    
    $('#inbox2 .exit').click(function(){
        $('#gain').css({'display':'none'});
        $('#inbox2').css({'display':'none'});
    });
    
    $('#mid .board-wrap .post2 .text').click(function(){
        $('#gain').css({'display':'block'});
        $('#inbox3').css({'display':'block'});
    });
    
    $('#inbox3 .exit').click(function(){
        $('#gain').css({'display':'none'});
        $('#inbox3').css({'display':'none'});
    });
    
    $('#mid .board-wrap .post1').mouseover(function(){
        $('#mid .board-wrap .post1').css({'border-bottom':'solid #007dc5 3px'});
        $('#mid .board-wrap .post1 .date span').css({'color':'#007dc5'});
        $('#mid .board-wrap .post1 .date').css({'color':'#007dc5'});
    });
    $('#mid .board-wrap .post1').mouseleave(function(){
        $('#mid .board-wrap .post1').css({'border-bottom':'solid #727d7d 3px'});
        $('#mid .board-wrap .post1 .date span').css({'color':'#727d7d'});
        $('#mid .board-wrap .post1 .date').css({'color':'#727d7d'});
    });$('#mid .board-wrap .post2').mouseover(function(){
        $('#mid .board-wrap .post2').css({'border-bottom':'solid #007dc5 3px'});
        $('#mid .board-wrap .post2 .date span').css({'color':'#007dc5'});
        $('#mid .board-wrap .post2 .date').css({'color':'#007dc5'});
    });
    $('#mid .board-wrap .post2').mouseleave(function(){
        $('#mid .board-wrap .post2').css({'border-bottom':'solid #727d7d 3px'});
        $('#mid .board-wrap .post2 .date span').css({'color':'#727d7d'});
        $('#mid .board-wrap .post2 .date').css({'color':'#727d7d'});
    });$('#mid .board-wrap .post3').mouseover(function(){
        $('#mid .board-wrap .post3').css({'border-bottom':'solid #007dc5 3px'});
        $('#mid .board-wrap .post3 .date span').css({'color':'#007dc5'});
        $('#mid .board-wrap .post3 .date').css({'color':'#007dc5'});
    });
    $('#mid .board-wrap .post3').mouseleave(function(){
        $('#mid .board-wrap .post3').css({'border-bottom':'solid #727d7d 3px'});
        $('#mid .board-wrap .post3 .date span').css({'color':'#727d7d'});
        $('#mid .board-wrap .post3 .date').css({'color':'#727d7d'});
    });$('#mid .board-wrap .post4').mouseover(function(){
        $('#mid .board-wrap .post4').css({'border-bottom':'solid #007dc5 3px'});
        $('#mid .board-wrap .post4 .date span').css({'color':'#007dc5'});
        $('#mid .board-wrap .post4 .date').css({'color':'#007dc5'});
    });
    $('#mid .board-wrap .post4').mouseleave(function(){
        $('#mid .board-wrap .post4').css({'border-bottom':'solid #727d7d 3px'});
        $('#mid .board-wrap .post4 .date span').css({'color':'#727d7d'});
        $('#mid .board-wrap .post4 .date').css({'color':'#727d7d'});
    });
    $('#mid .board-wrap .post5').mouseover(function(){
        $('#mid .board-wrap .post5').css({'border-bottom':'solid #007dc5 3px'});
        $('#mid .board-wrap .post5 .date span').css({'color':'#007dc5'});
        $('#mid .board-wrap .post5 .date').css({'color':'#007dc5'});
    });
    $('#mid .board-wrap .post5').mouseleave(function(){
        $('#mid .board-wrap .post5').css({'border-bottom':'solid #727d7d 3px'});
        $('#mid .board-wrap .post5 .date span').css({'color':'#727d7d'});
        $('#mid .board-wrap .post5 .date').css({'color':'#727d7d'});
    });
});
$(function(){
    var sitemap = $('#sitemap'),
		sitempaoffset = sitemap.offset().top;/*내가원하는 요소까지의 높이*/
    var slide = $('#mid .video-wrap'),
        notice = $('#mid .slide-wrap'),
		slideoffset = slide.offset().top,/*내가원하는 요소까지의 높이*/
        noticeoffset = notice.offset().top;
//		console.log(sitempaoffset);
		
    setInterval(function(){
        sitempaoffset = sitemap.offset().top;
        slideoffset = slide.offset().top;
        noticeoffset = notice.offset().top;
//        console.log(sitempaoffset);
    },500);
		$(window).scroll(function(){
			var scroll=$(this).scrollTop();
//			console.log(scroll);
			
			if(scroll > sitempaoffset-200){
				$('#header').css({display:'none'});
			}else{
				$('#header').css({display:'flex'});
			}
            
            if(scroll > slideoffset && scroll < noticeoffset){
				$('#header .logo-wrap a').css({'background-image': 'url(./img/footerlogo.png)'});
                $('#header .main-wrap ul li a').css({'color':'#fff'});
                $('#header .ham .bar').css({'background-color':'#fff'});
			}else{
				$('#header .logo-wrap a').css({'background-image': 'url(./img/mainlogo.png)'});
                $('#header .main-wrap ul li a').css({'color':'#000'});
                $('#header .ham .bar').css({'background-color':'#918f8f'});
			}
		});
});

$(function(){
    $('#mid .slide-wrap .vision-wrap').click(function(){
        $('#mid .slide-wrap').css({'background-image': 'url(./img/back11.png)'});
        $('#mid .slide-wrap .vision-wrap .vision').css({'height': '750px'});
        $('#mid .slide-wrap .paper-wrap .paper').css({'height': '700px'});
        $('#mid .slide-wrap .nature-wrap .nature').css({'height': '650px'});
        $('#mid .slide-wrap .vision-wrap .vision .black').css({'opacity': '0.1'});
        $('#mid .slide-wrap .paper-wrap .paper .black').css({'opacity': '0.5'});
        $('#mid .slide-wrap .nature-wrap .nature .black').css({'opacity': '0.5'});
        $('#mid .slide-wrap .text1').html("푸른지구 실현으로<br><span>세계적 환경기업 달성을 꿈꾸다.</span>");
    });
    $('#mid .slide-wrap .paper-wrap').click(function(){
        $('#mid .slide-wrap').css({'background-image': 'url(./img/222.png)'});
        $('#mid .slide-wrap .vision-wrap .vision').css({'height': '700px'});
        $('#mid .slide-wrap .paper-wrap .paper').css({'height': '750px'});
        $('#mid .slide-wrap .nature-wrap .nature').css({'height': '650px'});
        $('#mid .slide-wrap .vision-wrap .vision .black').css({'opacity': '0.5'});
        $('#mid .slide-wrap .paper-wrap .paper .black').css({'opacity': '0.1'});
        $('#mid .slide-wrap .nature-wrap .nature .black').css({'opacity': '0.5'});
        $('#mid .slide-wrap .text1').html("도전과 창의를 통한 품질 좋은 종이와<br><span>환경 보전의 조화를 추구하다.</span>");
    });
    $('#mid .slide-wrap .nature-wrap').click(function(){
        $('#mid .slide-wrap').css({'background-image': 'url(./img/back333.png)'});
        $('#mid .slide-wrap .vision-wrap .vision').css({'height': '650px'});
        $('#mid .slide-wrap .paper-wrap .paper').css({'height': '700px'});
        $('#mid .slide-wrap .nature-wrap .nature').css({'height': '750px'});
        $('#mid .slide-wrap .vision-wrap .vision .black').css({'opacity': '0.5'});
        $('#mid .slide-wrap .paper-wrap .paper .black').css({'opacity': '0.5'});
        $('#mid .slide-wrap .nature-wrap .nature .black').css({'opacity': '0.1'});
        $('#mid .slide-wrap .text1').html("모든 기업활동이 환경과 조화를<br><span>이루는 환경공동체를 달성하다.</span>"); 
    });
});
$(function(){
    $('#mid .slide-wrap .vision-wrap').mouseover(function(){
        $('#mid .slide-wrap .vision-wrap .vision .black').css({'opacity': '0'});
    });
    $('#mid .slide-wrap .vision-wrap').mouseleave(function(){
        $('#mid .slide-wrap .vision-wrap .vision .black').css({'opacity': '0.5'});
    });
    $('#mid .slide-wrap .paper-wrap').mouseover(function(){
        $('#mid .slide-wrap .paper-wrap .paper .black').css({'opacity': '0'});
    });
    $('#mid .slide-wrap .paper-wrap').mouseleave(function(){
        $('#mid .slide-wrap .paper-wrap .paper .black').css({'opacity': '0.5'});
    });
    $('#mid .slide-wrap .nature-wrap').mouseover(function(){
        $('#mid .slide-wrap .nature-wrap .nature .black').css({'opacity': '0'});
    });
    $('#mid .slide-wrap .nature-wrap').mouseleave(function(){
        $('#mid .slide-wrap .nature-wrap .nature .black').css({'opacity': '0.5'});
    });
});
$(function(){
    $('#mid .slide-wrap .button .button1').click(function(){
        $('#mid .slide-wrap').css({'background-image': 'url(./img/back11.png)'});
        $('#mid .slide-wrap .text1').html("푸른지구 실현으로<br><span>세계적 환경기업 달성을 꿈꾸다.</span>");
    });
    $('#mid .slide-wrap .button .button2').click(function(){
        $('#mid .slide-wrap').css({'background-image': 'url(./img/222.png)'});
        $('#mid .slide-wrap .text1').html("도전과 창의를 통한 품질 좋은 종이와<br><span>환경 보전의 조화를 추구하다.</span>");
    });
    $('#mid .slide-wrap .button .button3').click(function(){
        $('#mid .slide-wrap').css({'background-image': 'url(./img/back333.png)'});
        $('#mid .slide-wrap .text1').html("모든 기업활동이 환경과 조화를<br><span>이루는 환경공동체를 달성하다.</span>"); 
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
//$(function(){
//    var position = $(window).scrollTop();
//    var stack = 1;
//    var first = $('.video-wrap').offset();
//    var second = $('.slide-wrap').offset();
//    var third = $('.ex-wrap').offset();
//    var fourth = $('#sitemap').offset();
//    console.log(first);
//    console.log(second);
//    console.log(third);
//    console.log(fourth);
//    $(window).scroll(function(){
//        var scroll = $(window).scrollTop();
//        console.log(scroll);
//        console.log(stack);
//        if(stack==1){
//            if(scroll > position) {
//                $('html, body').animate({scrollTop : second.top}, 1000);
//                stack = 2;
//            } else {
//                $('html, body').animate({scrollTop : first.top}, 1000);
//                stack = 1;
//            }
//            position = scroll;
//        }
//        else if(stack==2){
//            if(scroll > position) {
//                $('html, body').animate({scrollTop : third.top}, 1000);
//                stack = 3;
//            } else {
//                $('html, body').animate({scrollTop : first.top}, 1000);
//                stack = 1;
//            }
//            position = scroll;
//        }
//        else if(stack==3){
//            if(scroll > position) {
//                $('html, body').animate({scrollTop : fourth.top}, 1000);
//                stack = 4;
//            } else {
//                $('html, body').animate({scrollTop : second.top}, 1000);
//                stack = 2;
//            }
//            position = scroll;
//        }
//        else{
//            if(scroll > position) {
//                $('html, body').animate({scrollTop : fourth.top}, 1000);
//                stack = 4;
//            } else {
//                $('html, body').animate({scrollTop : third.top}, 1000);
//                stack = 3;
//            }
//            position = scroll;
//        }
//    });
//});
