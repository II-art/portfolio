$(function () {


    //    
    //  $('.ww_01B').click(function(){
    //     $('.mapaA').hide();
    //      var state = $('.mapaB').css('opacity');
    //      if (state == '1'){
    //          $('.mapaB').show();
    //      }else {
    //          $('.mapaB').hide();
    //      }
    //      
    //  });
    //    





//    $('.map-w .ww_01 .ww_01A').click(function () {
//        var state = $('.mapaA').css('display');
//        if (state == 'none') {
//            $('.mapaA').show();
//        } 
//        else {
//            $('.mapaA').hide();
//        }
//
//    });
//
//
//
//    $('.map-w .ww_01 .ww_01B').click(function () {
//        var state = $('.mapaB').css('display');
//        if (state == 'none') {
//            $('.mapaB').show();
//        } else {
//            $('.mapaB').hide();
//        }
//
//    });
//
//
//
//    $('.map-w .ww_01 .ww_01C').click(function () {
//        var state = $('.mapaC').css('display');
//        if (state == 'none') {
//            $('.mapaC').show();
//        } else {
//            $('.mapaC').hide();
//        }
//
//    });
//
//
//    $('.map-w .ww_01 .ww_01D').click(function () {
//        var state = $('.mapaD').css('display');
//        if (state == 'none') {
//            $('.mapaD').show();
//        } else {
//            $('.mapaD').hide();
//        }
//
//    });
//
//    $('.map-w .ww_01 .ww_01E').click(function () {
//        var state = $('.mapaE').css('display');
//        if (state == 'none') {
//            $('.mapaE').show();
//        } else {
//            $('.mapaE').hide();
//        }
//
//    });
//
//
//    $('.map-w .ww_01 .ww_01F').click(function () {
//        var state = $('.mapaF').css('display');
//        if (state == 'none') {
//            $('.mapaF').show();
//        } else {
//            $('.mapaF').hide();
//        }
//
//    });
//


    $('a').click(function () {
        $('html,body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });



    $(window).scroll(function () {

        $('#mainC #tabs .tab1 a').each(function (i) {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({
                    'opacity': '1',
                    'bottom': '0'
                }, 1000);
            }
        });


        $('#mainC #tabs .tab2 a').each(function (i) {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({
                    'opacity': '1',
                    'bottom': '0'
                }, 1000);
            }
        });



        $('#mainC #tabs .tab3 a').each(function (i) {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({
                    'opacity': '1',
                    'bottom': '0'
                }, 1000);
            }
        });


        $('#mainC #tabs ul.tab1 li .img').each(function (i) {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({
                    'opacity': '1',
                    'margin-left': '20px'
                }, 1000);
            }
        });




        $('#mainC #tabs ul.tab1 li .img-2').each(function (i) {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({
                    'opacity': '1',
                    'margin-left': '20px'
                }, 1000);
            }
        });





        $('#mainC #tabs ul.tab1 li .img-3').each(function (i) {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({
                    'opacity': '1',
                    'margin-left': '20px'
                }, 1000);
            }
        });




        $('#mainC #tabs ul.tab1 li .img-4').each(function (i) {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({
                    'opacity': '1',
                    'margin-left': '20px'
                }, 1000);
            }
        });


        $('#mainC #tabs ul.tab1 li .img-5').each(function (i) {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({
                    'opacity': '1',
                    'margin-left': '20px'
                }, 1000);
            }
        });



        $('#mainC #tabs ul.tab1 li .img-6').each(function (i) {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({
                    'opacity': '1',
                    'margin-left': '20px'
                }, 1000);
            }
        });


        $('#mainC #tabs ul.tab1 li .img-7').each(function (i) {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({
                    'opacity': '1',
                    'margin-left': '20px'
                }, 1000);
            }
        });



        $('#mainC #tabs ul.tab1 li .img-8').each(function (i) {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({
                    'opacity': '1',
                    'margin-left': '20px'
                }, 1000);
            }
        });



        $('#mainC #tabs ul.tab1 li .img-9').each(function (i) {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({
                    'opacity': '1',
                    'margin-left': '20px'
                }, 1000);
            }
        });


        $('#tabs li ul.tab2 li .img-10').each(function (i) {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({
                    'opacity': '1',
                    'margin-left': '20px'
                }, 1000);
            }
        });

        $('#tabs li ul.tab2 li .img-11').each(function (i) {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({
                    'opacity': '1',
                    'margin-left': '20px'
                }, 1000);
            }
        });


        $('#tabs li ul.tab2 li .img-12').each(function (i) {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({
                    'opacity': '1',
                    'margin-left': '20px'
                }, 1000);
            }
        });

        $('#tabs li ul.tab2 li .img-13').each(function (i) {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({
                    'opacity': '1',
                    'margin-left': '20px'
                }, 1000);
            }
        });



        $('#tabs li ul.tab3 li .img-14').each(function (i) {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({
                    'opacity': '1',
                    'margin-left': '20px'
                }, 1000);
            }
        });


        $('#tabs li ul.tab3 li .img-15').each(function (i) {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({
                    'opacity': '1',
                    'margin-left': '20px'
                }, 1000);
            }
        });



        $('#tabs li ul.tab3 li .img-16').each(function (i) {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({
                    'opacity': '1',
                    'margin-left': '20px'
                }, 1000);
            }
        });


        $('#tabs li ul.tab3 li .img-17').each(function (i) {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({
                    'opacity': '1',
                    'margin-left': '20px'
                }, 1000);
            }
        });

        $('.boxLeft').each(function (i) {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({
                    'opacity': '1',

                }, 1000);
            }
        });

        $('.boxRight').each(function (i) {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({
                    'opacity': '1',

                }, 1000);
            }
        });



    });









});
