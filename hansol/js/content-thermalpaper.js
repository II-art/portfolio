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
            $('.section3-content .explain .explain-img').stop(true, true).hide().fadeIn(500);
            coursetitle.html('<h3>고객의 제품이 최고가 될 수 있도록, 한솔 Hi-Q<br> 세계에서 인정받는 한솔의 감열지, <span>한솔감열지</span>를 소개합니다!</h3>').stop(true, true).hide().fadeIn(500);
            coursetext.html('<p>감열지란 특수한 약품을 처리하여 일정 온도의 열이 가해질 시 색상이 변하는 종이로 POS와 영수증, 라벨용으로 다양하게 사용되는 기능지입니다. 시간이 지나도 변하지 않는 우수한 내구성을 지닌 종이입니다.<br><br>오랜 시간 축적된 한솔제지의 기술력의 집합체 &#39;한솔감열지란&#39;?<br><br>특수한 약품을 처리하여 일정 온도의 열이 가해질 시 색상이 변하는 종이로 POS와 영수증, 라벨용으로 다양하게 사용되는 기능지 입니다.<br>현색제는 BPA를 사용, 시간이 지나도 변하지 않는 우수한 내구성을 가진 종이입니다.</p><p>한솔제지 감열지의 특장점은,<br><br><bold>첫째, Back면 4도 옵셋인쇄시 인쇄품질이 우수합니다.<br>둘째, 발색면성(Image Sensitivity)이 우수합니다.<br></bold><br><span>[평량에 따른 용도]<br>55, 58, 65g - Fax, POS용 영수증<br>80, 100g - 티켓, 게임용<br>80, 100g(고백색) - 게임용<br><br></span><br>우리 생활 곳곳에서 꼭 필요한 역할을 하는 특수 기능지<br>한결 같은 제품, 균일한 품질을 약속드립니다.</p><div class="bar"></div><div class="table"><table><tr><th>평량</th><td><span>55g</span><span>28g</span><span>65g</span><span>74/80g</span><span>100g(고백색)</span></td></tr><tr><th>사용범위</th><td>특수용도</td></tr><tr><th>최종용도</th><td>Fax지 , POS , 영수증 , 복권 , 티켓</td></tr><tr><th>색상</th><td><div class="color-box1"></div><dd>백색</dd><div class="color-box2"></div><dd>고백색</dd></td></tr></table></div>').stop(true, true).hide().fadeIn(500);
        }
        if(idx==1){
            $('.section3-content .explain .explain-img').stop(true, true).hide().fadeIn(500);
            coursetitle.html('<h3>고객의 제품이 최고가 될 수 있도록, 한솔 Hi-Q<br> 세계에서 인정받는 한솔의 감열지, <span>한솔감열지Green</span>를 소개합니다!</h3>').stop(true, true).hide().fadeIn(500);
            coursetext.html('<p>비스페놀A가 들어있지 않아 환경 호르몬으로부터 안전하고, 발색도, 보존성, 인쇄적성 등 우수한 품질을 자랑합니다.<br><br><br>오랜 시간 축적된 한솔제지의 기술력의 집합체 &#39;한솔감열지Green&#39;이란?<br>특수한 약품을 처리하여 일정 온도의 열이 가해질 시 색상이 변하는 종이로 POS와 영수증, 라벨용으로 다양하게 사용되는 기능지 입니다.<br>BPA-free로 제작되었으며, 시간이 지나도 변하지 않는 우수한 내구성을 가진 종이입니다.</p><p>우리 생활 곳곳에서 꼭 필요한 역할을 하는 특수 기능지<br>한결 같은 제품, 균일한 품질을 약속드립니다.</p><div class="bar"></div><div class="table"><table><tr><th>평량</th><td><span>48g</span><span>55g</span><span>58g</span><span>65g</span><span>80g</span></td></tr><tr><th>사용범위</th><td>특수용도</td></tr><tr><th>최종용도</th><td>Fax지 , 영수증 , POS , 티켓</td></tr></table></div>').stop(true, true).hide().fadeIn(500);
        }
        if(idx==2){
            $('.section3-content .explain .explain-img').stop(true, true).hide().fadeIn(500);
            coursetitle.html('<h3>고객의 제품이 최고가 될 수 있도록, 한솔 Hi-Q<br> 세계에서 인정받는 한솔의 감열지, <span>한솔감열지HS</span>를 소개합니다!</h3>').stop(true, true).hide().fadeIn(500);
            coursetext.html('<p>POS, ATM, 티켓 용도 등으로 사용되는 고품질의 감열지입니다.<br>최고의 프린팅 효율을 자랑하며 바코드 가독성이 뛰어납니다.</p><p>우리 생활 곳곳에서 꼭 필요한 역할을 하는 특수 기능지<br>한결 같은 제품, 균일한 품질을 약속드립니다.</p><div class="bar"></div><div class="table"><table><tr><th>평량</th><td><span>55g</span><span>58g</span><span>65g</span><span>74g</span></td></tr><tr><th>사용범위</th><td>특수용도</td></tr><tr><th>최종용도</th><td>Fax지 , 영수증 , POS , 티켓</td></tr></table></div>').stop(true, true).hide().fadeIn(500);
        }
        if(idx==3){
            $('.section3-content .explain .explain-img').stop(true, true).hide().fadeIn(500);
            coursetitle.html('<h3>고객의 제품이 최고가 될 수 있도록, 한솔 Hi-Q<br> 세계에서 인정받는 한솔의 감열지, <span>한솔감열지 HL</span>을 소개합니다!</h3>').stop(true, true).hide().fadeIn(500).stop(true, true).hide().fadeIn(500);
            coursetext.html('<p>내열성이 우수한 탑코팅된 라벨 상지용 감열지입니다.<br>발색이 우수하며 보존성이 우수하여 택배라벨, 전자레인지용 라벨 등에 적합합니다.</p><p>우리 생활 곳곳에서 꼭 필요한 역할을 하는 특수 기능지<br>한결 같은 제품, 균일한 품질을 약속드립니다.</p><div class="bar"></div>').stop(true, true).hide().fadeIn(500).stop(true, true).hide().fadeIn(500);
        }
        if(idx==4){
            $('.section3-content .explain .explain-img').stop(true, true).hide().fadeIn(500);
            coursetitle.html('<h3>고객의 제품이 최고가 될 수 있도록, 한솔 Hi-Q<br> 세계에서 인정받는 한솔의 감열지, <span>한솔감열지 SL</span>을 소개합니다!</h3>').stop(true, true).hide().fadeIn(500);
            coursetext.html('<p>탑코팅된 라벨상지로써 뛰어난 바코드 스캐닝 능력과 습기, UV 등에 뛰어난 저항력을 가지고 있습니다.</p><p>우리 생활 곳곳에서 꼭 필요한 역할을 하는 특수 기능지<br>한결 같은 제품, 균일한 품질을 약속드립니다.</p><div class="bar"></div>').stop(true, true).hide().fadeIn(500); 
        }
        if(idx==5){
            $('.section3-content .explain .explain-img').stop(true, true).hide().fadeIn(500);
            coursetitle.html('<h3>고객의 제품이 최고가 될 수 있도록, 한솔 Hi-Q<br> 세계에서 인정받는 한솔의 감열지, <span>한솔감열지 CL</span>을 소개합니다!</h3>').stop(true, true).hide().fadeIn(500);
            coursetext.html('<p>HL과 SL의 장점을 두루갖춘 경제적인 탑코팅 라벨용 감열지입니다.<br>내열성과 바코드 적성이 우수하며 마트용 가격라벨 등의 용도로 사용가능합니다.</p><p>우리 생활 곳곳에서 꼭 필요한 역할을 하는 특수 기능지<br>한결 같은 제품, 균일한 품질을 약속드립니다.</p><div class="bar"></div>').stop(true, true).hide().fadeIn(500);
        }
        if(idx==6){
            $('.section3-content .explain .explain-img').stop(true, true).hide().fadeIn(500);
            coursetitle.html('<h3>고객의 제품이 최고가 될 수 있도록, 한솔 Hi-Q<br> 세계에서 인정받는 한솔의 감열지, <span>한솔감열지 EL</span>을 소개합니다!</h3>').stop(true, true).hide().fadeIn(500);
            coursetext.html('<p>코팅이 되지 않은 라벨 상지입니다.<br>접착력과 바코드 가독성이 뛰어나며 평량 대비 품질이 뛰어난 라벨용 감열지입니다.</p><p>우리 생활 곳곳에서 꼭 필요한 역할을 하는 특수 기능지<br>한결 같은 제품, 균일한 품질을 약속드립니다.</p><div class="bar"></div>').stop(true, true).hide().fadeIn(500);
        }
        if(idx==7){
            $('.section3-content .explain .explain-img').stop(true, true).hide().fadeIn(500);
            coursetitle.html('<h3>고객의 제품이 최고가 될 수 있도록, 한솔 Hi-Q<br> 세계에서 인정받는 한솔의 감열지, <span>한솔감열지 HR</span>을 소개합니다!</h3>').stop(true, true).hide().fadeIn(500);
            coursetext.html('<p>높은 발색도와 우수한 보존성을 지닌 탑코팅 감열지로 다양한 평량을 보유하고 있습니다.<br>POS부터 티켓 용도까지 다양하게 활용가능합니다.</p><p>우리 생활 곳곳에서 꼭 필요한 역할을 하는 특수 기능지<br>한결 같은 제품, 균일한 품질을 약속드립니다.</p><div class="bar"></div>').stop(true, true).hide().fadeIn(500);
        }
        if(idx==8){
            $('.section3-content .explain .explain-img').stop(true, true).hide().fadeIn(500);
            coursetitle.html('<h3>고객의 제품이 최고가 될 수 있도록, 한솔 Hi-Q<br> 세계에서 인정받는 한솔의 감열지, <span>한솔감열지 LO</span>을 소개합니다!</h3>').stop(true, true).hide().fadeIn(500);
            coursetext.html('<p>Lottery용도로 사용할 수 있는 발색도와 바코드 가독성이 우수한 감열지입니다.<br>탑코팅된 제품으로 보존성 또한 매우 뛰어납니다.</p><p>우리 생활 곳곳에서 꼭 필요한 역할을 하는 특수 기능지<br>한결 같은 제품, 균일한 품질을 약속드립니다.</p><div class="bar"></div>').stop(true, true).hide().fadeIn(500);
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