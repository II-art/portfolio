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
    
    
    $('.content .content-text h2').fadeTo(1000, 1).queue(function(){
        $('.content .content-text p').fadeTo(500, 1).queue(function(){
            $('#section2').fadeTo(500, 1);
        });
    });
    
    
    $('.section3-content .order-button span').mouseenter(function(){
        $('.section3-content .order-button span').removeClass('on');
        $(this).addClass('on');
    }).mouseleave(function(){
        $('.section3-content .order-button span').removeClass('on');
    });
    
    $('.section3-content .menu-content > .buttom > li').click(function(){
        var index = $(this).index();
        course(index);
    });
    
    function course(idx){
        $('.section3-content .menu-content > .buttom > li').removeClass('active');
        $('.section3-content .menu-content > .buttom > li').eq(idx).addClass('active');
        
        var courseimg = $('.section3-content .explain .explain-img');
        var coursetitle = $('.section3-content .explain .explain-text .explain-title-wrap');
        var coursetext = $('.section3-content .explain .explain-text .explain-text-wrap');
        
        if(idx==0){
            $('.explain-img').css('background-image','url(img/explain-img8.jpg)').stop(true, true).hide().fadeIn(500);
            coursetitle.html('<h3>고객의 제품이 최고가 될 수 있도록, 한솔 Hi-Q<br>국내 생산량 1위, 수출 1위 한솔제지의 백판지, <span>Hi-Q SC</span>를 소개합니다!</h3>').stop(true, true).hide().fadeIn(500);
            coursetext.html('<p>Hi-Q SC는 재생펄프(고지)를 주원료로 생산한 친환경제품입니다. 우수한 인쇄적성과 높은 강도를 가지고 있어 제품 가치를 높일 수 있고,다양한 제품의 포장재로 사용할 수 있습니다.</p><p>두껍고 강한 백판지, 한솔제지 Hi-Q SC(Sunny Coated)의 3가지 특장점<br><bold>첫째, 백색 표면층을 제외한 나머지 층을 친환경 재생 펄프(DIP)로 제작<br>둘째, 두껍고 강하며, 휘어짐이 적어 견고한 패키지 제작 가능<br>셋째, 적은 양의 잉크로 원하는 색상의 인쇄 가능<br></bold><br>최고의 제품과 신속한 납기를 자랑하는 한솔의 산업용지, 한결같은 제품과 서비스를 약속드립니다.</p><div class="bar"></div><div class="table"><table><tr><th>평량</th><td><span>180g</span><span>240g</span><span>260g</span><span>280g</span><span>300g</span><span>350g</span><span>400g</span><span>450g</span><span>500g</span></td></tr><tr><th>사용범위</th><td>제품패키지</td></tr><tr><th>최종용도</th><td>가공식품(제과) , 생활용품(세제) , 화장품/향수 , 의류/잡화 , 완구 , 제약</td></tr><tr><th>색상</th><td><div class="color-box1"></div><dd>백색</dd></td></tr></table></div>').stop(true, true).hide().fadeIn(500);
        }
        if(idx==1){
            $('.explain-img').css('background-image','url(img/explain-img9.jpg)').stop(true, true).hide().fadeIn(500);
            coursetitle.html('<h3>고객의 작품이 최고가 될 수 있도록, 한솔 Hi-Q<br>농산물 박스에 특화된 한솔제지의 백판지, <span>Hi-Q ACB/SB</span>를 소개합니다!</h3>').stop(true, true).hide().fadeIn(500);
            coursetext.html('<p>HI-Q FSB는 과일, 채소 등 농산물에 특화된 롤(Roll) 타입의 제품입니다. 프리프린팅 등 높은 강도를 요구하는 공정에 사용하기에 적합한 제품입니다.<br>Hi-Q ACB는 220g 단평량으로 새안되는 농산물 및 공산품 BOX용 제품이며, SB는 강도 보완을 위해 TOP층에 NBKP를 사용한 Roll지로 주로 과일 BOX로 사용하는 200g 단평량 제품입니다.</p><p>두껍고 강한 백판지, 한솔제지 Hi-Q ACB/SB의 2가지 특장점<br><bold>첫째, 과일과 채소 박스에 특화된 견고한 백판지<br>둘째, 적은 양의 잉크로 원하는 색상의 인쇄 가능<br></bold><br>최고의 제품과 신속한 납기를 자랑하는 한솔의 산업용지, 한결같은 제품과 서비스를 약속드립니다.</p><div class="bar"></div><div class="table"><table><tr><th>평량</th><td><span>220g</span></td></tr><tr><th>사용범위</th><td>제품패키지</td></tr><tr><th>최종용도</th><td>농산물포장</td></tr><tr><th>색상</th><td><div class="color-box1"></div><dd>백색</dd></td></tr></table></div>').stop(true, true).hide().fadeIn(500);
        }
        if(idx==2){
            $('.explain-img').css('background-image','url(img/explain-img10.jpg)').stop(true, true).hide().fadeIn(500);
            coursetitle.html('<h3>고객의 제품이 최고가 될 수 있도록, 한솔 Hi-Q<br>국내 생산량 1위, 수출 1위 한솔제지의 백판지, <span>Hi-Q IV</span>를 소개합니다!</h3>').stop(true, true).hide().fadeIn(500);
            coursetext.html('<p>Hi-Q IV는 재생펄프(고지)로 만들어진 백색후면을 가진 친환경 제품입니다. 제과, 의약품, 의류 등의 고급 포장재, 일반 화일용 표지 등에 사용되는 제품입니다.<br>표면과 후면이 백색이고, 단면은 회색인 주급 포장지용 판지입니다.<br></p><p>두껍고 강한 백판지, 한솔제지 Hi-Q IV(Ivory)의 3가지 특장점<br><bold>첫째, 표면과 후면 모두 흰색으로, 후면 인쇄 가능<br>둘째, 두껍고 강하며, 휘어짐이 적어 견고한 패키지 제작 가능<br>셋째, 적은 양의 잉크로 원하는 색상의 인쇄 가능<br></bold><br>최고의 제품과 신속한 납기를 자랑하는 한솔의 산업용지, 한결같은 제품과 서비스를 약속드립니다.</p><div class="bar"></div><div class="table"><table><tr><th>평량</th><td><span>240g</span><span>260g</span><span>280g</span><span>300g</span><span>350g</span><span>400g</span><span>450g</span><span>500g</span></td></tr><tr><th>사용범위</th><td>제품패키지</td></tr><tr><th>최종용도</th><td>의류/잡화 , 가공식품(제과) , 화장품/향수 , 제약</td></tr><tr><th>색상</th><td><div class="color-box1"></div><dd>백색</dd></td></tr></table></div>').stop(true, true).hide().fadeIn(500);
        }
        if(idx==3){
            $('.explain-img').css('background-image','url(img/explain-img11.jpg)').stop(true, true).hide().fadeIn(500);
            coursetitle.html('<h3>고객의 제품이 최고가 될 수 있도록, 한솔 Hi-Q<br>한솔제지의 최고급 백판지, <span>Hi-Q AB플러스</span>를 소개합니다!</h3>').stop(true, true).hide().fadeIn(500);
            coursetext.html('<p>Hi-Q AB플러스는 100% 천연 펄프를 사용한 무형광 제품입니다. 우수한 인쇄적성과 높은 강도, 고급스러운 표면을 가지고 있어 화장품, 의약품, 고급 포장재나 식품 포장재로 사용됩니다.<br>중간층에 BCTMP사용, 무형광 All Pulp 판지입니다. 화장품과 의약품 등 고급포장재에 사용 가능합니다.</p><p>두껍고 강한 백판지, 한솔제지 Hi-Q AB+(Art Board)의 3가지 특장점<br><bold>첫째, 5개 층 모두 100% 화학펄프 사용<br>둘째, 특수 Barrier Coating을 통해 강화된 내수성과 내구성<br>셋째, 표면과 후면 모두 흰색으로, 적은 잉크로 우수한 인쇄 가능<br></bold><br>최고의 제품과 신속한 납기를 자랑하는 한솔의 산업용지, 한결같은 제품과 서비스를 약속드립니다.</p><div class="bar"></div><div class="table"><table><tr><th>평량</th><td><span>210g</span><span>230g</span><span>280g</span><span>300g</span><span>350g</span><span>400g</span></td></tr><tr><th>사용범위</th><td>제품패키지 , 인쇄 및 출판</td></tr><tr><th>최종용도</th><td>식품용기 , 아동교재</td></tr><tr><th>색상</th><td><div class="color-box1"></div><dd>백색</dd></td></tr></table></div>').stop(true, true).hide().fadeIn(500);
        }
        if(idx==4){
            $('.explain-img').css('background-image','url(img/explain-img12.jpg)').stop(true, true).hide().fadeIn(500);
//            $('.section3-content .explain .explain-text .explain-text-wrap').css('margin-top','400px').stop(true, true).hide().fadeIn(500);
            coursetitle.html('<h3>고객의 제품이 최고가 될 수 있도록, 한솔 Hi-Q<br>한솔제지의 100% 순수 펄프 백판지, <span>Hi-Q FAB</span>를 소개합니다!</h3>').stop(true, true).hide().fadeIn(500);
            coursetext.html('<p>Hi-Q FAB는 100% 천연펄프를 사용한 무형광 제품입니다. 우수한 강조와 성형 적성을 가지고 있어 라면용기, 종이 그릇 등 식품 용기로 사용할 수 있습니다.<br>종이컵, 패스트푸드 음료컵, 컵라면 용기에 사용하는 100% 천연펄프 제품입니다.</p><p>식품 포장에 특화된 깨끗한 위생판지 Hi-Q FAB의 3가지 특장점<br><bold>첫째, 100% 순수 천연 펄프를 사용한 깨끗한 백판지<br>둘째, 식품 포장용에 특화된 무형광 제품<br>셋째, 우수한 인쇄적성과 고광택도, 고백색도 외관 품질</bold><br><br>최고의 제품과 신속한 납기를 자랑하는 한솔의 산업용지, 한결같은 제품과 서비스를 약속드립니다.</p><div class="bar"></div><div class="table"><table><tr><th>평량</th><td><span>180g</span><span>250g</span><span>300g</span><span>350g</span></td></tr><tr><th>사용범위</th><td>제품패키지</td></tr><tr><th>최종용도</th><td>식품용기</td></tr><tr><th>색상</th><td><div class="color-box1"></div><dd>백색</dd></td></tr></table></div>').stop(true, true).hide().fadeIn(500); 
        }
        if(idx==5){
            $('.section3-content .explain .explain-img').css('display','none');
            $(this).css('margin-top','50px').stop(true, true).hide().fadeIn(500);
            coursetitle.html('<h3><span>Hi-Q HBB</span></h3>').stop(true, true).hide().fadeIn(500);
            coursetext.html('<p>고급 All Pulp 제품으로써 치킨박스, 1회용품 등에 적합한 제품입니다.<br></p><div class="bar"></div>').stop(true, true).hide().fadeIn(500);
            
//            var responsive;
//            function setResponsiv(){
//                if($('.section3-content .explain .explain-text .explain-text-wrap'))
//            }
        }
    };
    
    $('.order-button .price').click(function(){
        var url = "business06.html";
        $(location).attr('href', url);
    });
    
    
    $('.order-button .order').click(function(){
        var url = "business07.html";
        $(location).attr('href', url);
    });
    
});