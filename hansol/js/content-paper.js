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
            $('.explain-img').css('background-image','url(img/explain-img0.jpg)').stop(true, true).hide().fadeIn(500);
            coursetitle.html('<h3>고객의 작품이 최고가 될 수 있도록, 한솔 Hi-Q<br>한솔제지의 프리미엄 아트지, <span>Hi-Q 밀레니엄</span>을 소개합니다!</h3>').stop(true, true).hide().fadeIn(500);
            coursetext.html('<p>인쇄작업성, 품질 균일성이 한단계 업그레이드 된 프리미엄 아트지로서 평활성 및 색상이 우수하여 인쇄 시 어던 색상이든 선명하게 재현합니다.강도가 우수하여 인쇄 작업성이 뛰어나며, 타사 제품 대비 인쇄 시 발생하는 지분/픽킹이 적어 우수한 품질 재현성을 자랑합니다.</p><p>인쇄 작업성, 품질 균일성이 한 단계 업그레이드 된 Hi-Q 밀레니엄의 3가지 특장점<br><bold>첫째, 내추럴하고 부드러운 고급 백색<br>둘째, 자연스러운 광택<br>셋째, 신속 작업에 적합한 빠른 잉크 건조성<br></bold><br>한결 같은 제품, 균일한 품질로 안정적인 인쇄 작업을 약속드립니다.</p><div class="bar"></div><div class="table"><table><tr><th>평량</th><td><span>80g</span><span>100g</span><span>120g</span><span>150g</span><span>180g</span><span>200g</span><span>250g</span><span>300g</span></td></tr><tr><th>사용범위</th><td>인쇄 및 출판</td></tr><tr><th>최종용도</th><td>카탈로그 , 브로슈어 , 캘린더 , 레포트 , 매뉴얼 , 잡지 , 그래픽디자인 , 화보</td></tr><tr><th>색상</th><td><div class="color-box1"></div><dd>백색</dd></td></tr></table></div>').stop(true, true).hide().fadeIn(500);
        }
        if(idx==1){
            $('.explain-img').css('background-image','url(img/explain-img1.jpg)').stop(true, true).hide().fadeIn(500);
            coursetitle.html('<h3>고객의 작품이 최고가 될 수 있도록, 한솔 Hi-Q<br>한솔제지의 고품격 아트지, <span>Hi-Q 듀오매트</span>을 소개합니다!</h3>').stop(true, true).hide().fadeIn(500);
            coursetext.html('<p>뛰어난 평활성과 탁월한 백감도의 고품격 매트지입니다. 고품격의 촉감과 균일한 표면 면성이 강점인 Hi-Q 듀오매트는 뛰어난 백감도와 함께 인쇄 광택 등의 효과로 최적의 인쇄효과를 얻을 수 있습니다.</p><p>인쇄작업성, 품질 균일성이 한 단계 업그레이드 된 Hi-Q 듀오매트의 3가지 특장점<br><bold>첫째, 백색도 94%의 순백색 색상<br>둘째, 뛰어난 Stiffness<br>셋째, 탁월한 면성과 광택, 빠른 잉크 건조성<br></bold><br>한결 같은 제품, 균일한 품질로 안정적인 인쇄 작업을 약속드립니다.</p><div class="bar"></div><div class="table"><table><tr><td>평량</td><td><span>80g</span><span>100g</span><span>120g</span><span>150g</span><span>180g</span><span>200g</span><span>250g</span><span>300g</span></td></tr><tr><th>사용범위</th><td>인쇄 및 출판</td></tr><tr><th>최종용도</th><td>카탈로그 , 브로슈어 , 캘린더 , 레포트 , 매뉴얼 , 잡지 , 그래픽디자인 , 화보</td></tr><tr><th>색상</th><td><div class="color-box1"></div><dd>백색</dd></td></tr></table></div>').stop(true, true).hide().fadeIn(500);
        }
        if(idx==2){
            $('.explain-img').css('background-image','url(img/explain-img2.jpg)').stop(true, true).hide().fadeIn(500);
            coursetitle.html('<h3>고객의 작품이 최고가 될 수 있도록, 한솔 Hi-Q<br>한솔제지의 차별화 제품, <span>Hi-Q 미스틱</span>을 소개합니다!</h3>').stop(true, true).hide().fadeIn(500);
            coursetext.html('<p>놀랍도록 가볍고 두꺼운 느낌을 주는 미스틱은 기존 매트지와는 차별화된 새로운 질감의 고급 아트지입니다.깔끔하고 선명한 인쇄품질로 색 발현성이 뛰어나 다양한 디자인과 컬러풀한 사진들이 리얼하게 잘 표현됩니다.</p><p>고객이 원하는 2%를 찾아내는 한솔의 차별화 제품,<br>가볍고 도톰한 하이벌크 Hi-Q 미스틱의 3가지 특장점<br><bold>첫째, 손끝으로 전해지는 종이결의 까글하면서도 부드러운 질감<br>둘째, 같은 무게 대비 도톰한 두께, 그리고 경쟁력 있는 가격<br>셋째, 우수한 불투명도<br></bold><br>한결 같은 제품, 균일한 품질로 안정적인 인쇄 작업을 약속드립니다.</p><div class="bar"></div><div class="table"><table><tr><th>평량</th><td><span>83g</span><span>90g</span><span>105g</span><span>128g</span><span>157g</span><span>208g</span><span>228g</span></td></tr><tr><th>사용범위</th><td>인쇄 및 출판</td></tr><tr><th>최종용도</th><td>단행본 , 잡지 , 캘린더 , 단행본표지 , 매뉴얼 , 레포트</td></tr><tr><th>색상</th><td><div class="color-box1"></div><dd>백색</dd></td></tr></table></div>').stop(true, true).hide().fadeIn(500);
        }
        if(idx==3){
            $('.explain-img').css('background-image','url(img/explain-img3.jpg)').stop(true, true).hide().fadeIn(500);
            coursetitle.html('<h3>고객의 작품이 최고가 될 수 있도록, 한솔 Hi-Q<br>한솔제지의 경량코트지 <span>화인코트</span>를 소개합니다!</h3>').stop(true, true).hide().fadeIn(500);
            coursetext.html('<p>일반 백상지에 미량 코팅을 한 후에 슈퍼카렌딩 처리를 하여 인쇄면성과 적정광택을 살린 종이입니다.무게가 가볍고 인쇄광택이 좋기때문에 잡지나 전단지, 카탈로그 등의 인쇄에 적합합니다.탁월한 광택, Stiffness, 불투명도를 자랑하는 경량 아트지입니다.<br>탁월한 광택으로 패션잡지 등 고급 인쇄물에 많이 활용되고 있는 제품으로, 고급스러운 느낌의 화상 재현성 고급스러운 광택과 평활한 인쇄면성으로 고품질을 요구하는 인쇄물에 주로 사용됩니다.</p><br><br><p>한결 같은 제품, 균일한 품질로 안정적인 인쇄 작업을 약속드립니다.</p><div class="bar"></div><div class="table"><table><tr><th>평량</th><td><span>70g</span><span>80g</span></td></tr><tr><th>사용범위</th><td>인쇄 및 출판</td></tr><tr><th>최종용도</th><td>잡지 , 전단지</td></tr><tr><th>색상</th><td><div class="color-box1"></div><dd>백색</dd></td></tr></table></div>').stop(true, true).hide().fadeIn(500);
        }
        if(idx==4){
            $('.explain-img').css('background-image','url(img/explain-img4.jpg)').stop(true, true).hide().fadeIn(500);
            coursetitle.html('<h3>고객의 작품이 최고가 될 수 있도록, 한솔 Hi-Q<br>한솔제지의 대표 MFC(온머신코트)지 <span>뉴플러스</span>를 소개합니다!</h3>').stop(true, true).hide().fadeIn(500);
            coursetext.html('<p>뉴플러스는 백상지를 한 차원 업그레이드한 프리미엄 온머신 코트지로 기존 백상지 표면에 미량 도공하여 평활도가 높고, 불투명도와 면성이 우수하여 인쇄품질이 뛰어납니다.<br><br>MFC란?<br>원지(백상지)에 미량의 코팅이 들어가는 종이로, 보통 경량코트 혹은 미량코트지로 불리우나 한솔제지는 초지기에서 바로 코팅을 입히는 종이를 MFC, 별도의 코팅과정을 거치는 종이를 &#39;경량코트지&#39;로 구분하였습니다.</p><p>뉴플러스 블루의 3가지 특장점<br><bold>첫째, 색상재현, 망점재현성이 우수하여 고급스러운 인쇄 실현<br>둘째, 자연스러운 색감<br>셋째, 불투명도, 평활도 , 두께 등 기본 품질의 균일성</bold><br><br>한결 같은 제품, 균일한 품질로 안정적인 인쇄 작업을 약속드립니다.</p><div class="bar"></div><div class="table"><table><tr><th>평량</th><td><span>70g</span><span>80g</span><span>100g</span><span>110g</span><span>120g</span></td></tr><tr><th>사용범위</th><td>인쇄 및 출판</td></tr><tr><th>최종용도</th><td>학습지 , 부교재 , 단행본</td></tr><tr><th>색상</th><td><div class="color-box1"></div><dd>백색</dd><div class="color-box2"></div><dd>미색</dd></td></tr></table></div>').stop(true, true).hide().fadeIn(500);
            
            var colorindex = $(this).index();
            
            $('.section3-content .explain .explain-text .explain-text-wrap .table table tr td .color-box1').click(function(){
                $('.explain-img').css('background-image','url(img/explain-img4.jpg)').stop(true, true).hide().fadeIn(1000);
            });
            $('.section3-content .explain .explain-text .explain-text-wrap .table table tr td .color-box2').click(function(){
                $('.explain-img').css('background-image','url(img/explain-img4-1.jpg)').stop(true, true).hide().fadeIn(1000);
            }); 
        }
        if(idx==5){
            $('.explain-img').css('background-image','url(img/explain-img5.jpg)').stop(true, true).hide().fadeIn(500);
            coursetitle.html('<h3>고객의 작품이 최고가 될 수 있도록, 한솔 Hi-Q<br>한솔제지의 대표 MFC(온머신코트)지 <span>고급교과서지</span>를 소개합니다!</h3>').stop(true, true).hide().fadeIn(500);
            coursetext.html('<p>가벼운 느낌과 함께 눈의 피로도를 경감시켜 장시간 공부를 해야하는 학생들에게 효과적으로 적근할 수 있는 교과서 전문 용지입니다.<br><br>MFC란?<br>원지(백상지)에 미량의 코팅이 들어가는 종이로, 보통 경량코트 혹은 미량코트지로 불리우나 한솔제지는 초지기에서 바로 코팅을 입히는 종이를 MFC, 별도의 코팅과정을 거치는 종이를 &#39;경량코트지&#39;로 구분하였습니다.</p><p>한솔제지 고급교과서지의 3가지 특장점<br><bold>첫째, 색상재현, 망점재현성이 우수하여 고급스러운 인쇄 실현<br>둘째, 자연스러운 색감<br>셋째, 불투명도, 평활도 , 두께 등 기본 품질의 균일성</bold><br><br>한결 같은 제품, 균일한 품질로 안정적인 인쇄 작업을 약속드립니다.</p><div class="bar"></div><div class="table"><table><tr><th>평량</th><td><span>70g</span><span>80g</span><span>100g</span><span>110g</span><span>120g</span></td></tr><tr><th>사용범위</th><td>인쇄 및 출판</td></tr><tr><th>최종용도</th><td>학습지 , 부교재 , 단행본</td></tr><tr><th>색상</th><td><div class="color-box2"></div><dd>미색</dd></td></tr></table></div>').stop(true, true).hide().fadeIn(500);
        }
        if(idx==6){
            $('.explain-img').css('background-image','url(img/explain-img6.jpg)').stop(true, true).hide().fadeIn(500);
            coursetitle.html('<h3>고객의 작품이 최고가 될 수 있도록, 한솔 Hi-Q<br>한솔제지의 백상지 <span>뉴-백상지</span>를 소개합니다!</h3>').stop(true, true).hide().fadeIn(1000);
            coursetext.html('<p>뉴-백상지는 인쇄면성이 좋고 표면강도가 우수하고 지분이 적어, 많은 고객들에게 사랑을 받고 있는 제품입니다.</p><p>종이의 기본, 한솔 뉴-백상지의 3가지 특장점<br><bold>첫째, 부드러운 촉감과 탁월한 인쇄성면<br>둘째, 깨끗하고 은은한 도자기의 백색도로 고급스러운 인쇄물 완성<br>셋째, 우수한 표면강도를 비롯, 안정감있게 유지되는 기본 품질로 많은 고객에게 사랑받고 있습니다.</bold><br><br>한결 같은 제품, 균일한 품질로 안정적인 인쇄 작업을 약속드립니다.</p><div class="bar"></div><div class="table"><table><tr><th>평량</th><td><span>70g</span><span>80g</span><span>100g</span><span>120g</span><span>150g</span><span>180g</span><span>220g</span></td></tr><tr><th>사용범위</th><td>인쇄 및 출판</td></tr><tr><th>최종용도</th><td>단행본 , 학습지 , 라벨 , 노트 , 잡지 , 수첩 , 매뉴얼</td></tr><tr><th>색상</th><td><div class="color-box1"></div><dd>백색</dd></td></tr></table></div>').stop(true, true).hide().fadeIn(500);
        }
        if(idx==7){
            $('.explain-img').css('background-image','url(img/explain-img7.jpg)').stop(true, true).hide().fadeIn(500);
            coursetitle.html('<h3>고객의 작품이 최고가 될 수 있도록, 한솔 Hi-Q<br>한솔제지의 신제품 <span>뉴클래식</span>를 소개합니다!</h3>').stop(true, true).hide().fadeIn(500);;
            coursetext.html('<p>뉴클래식은 눈부심이 적으며 백상지보다는 은은한 광택을 자랑하는 종이입니다. 기존 백상지와 대비하여 2% 이상 높은 불투명도를 자랑합니다. 원료에서부터 불투명도가 좋은 펄프를 배합하여 생산하기 때문에 두께에 비해 불투명도가 뛰어납니다.</p><p>고객이 원하는 2%를 찾아내는 한솔의 신제품,<br>백상지의 장점과 MFC의 장점을 결합한 뉴클래식의 3가지 특장점<br><bold>첫째, 110sec 이상의 우수한 평활도<br>둘째, 기존 백상지 대비 2% 이상 높은 불투명도!<br>셋째, 수험서와 학습용 교재를 완성하는 우수한 지움적성</bold><br><br>한결 같은 제품, 균일한 품질로 안정적인 인쇄 작업을 약속드립니다.</p><div class="bar"></div><div class="table"><table><tr><th>평량</th><td><span>70g</span><span>80g</span></td></tr><tr><th>사용범위</th><td>인쇄 및 출판</td></tr><tr><th>최종용도</th><td>단행본 , 학습지 , 전문교재</td></tr></table></div>').stop(true, true).hide().fadeIn(500);
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