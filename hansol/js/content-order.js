$(function () {
    $('.content .content-root .content-root-list > li:nth-of-type(5) > a').click(function () {
        $(this).toggleClass('active');


        if($(this).hasClass('active')){
            $('.content .content-root .content-root-list > li > ul').removeClass('active');
            $('.content .content-root .content-root-list > li > ul').addClass('active');
        }else {
            $('.content .content-root .content-root-list > li > ul').removeClass('active');
        }
    });
    
    $('.content-text').fadeTo(1000, 1).queue(function(){
        $('.content-main').fadeTo(500, 1);
    });
    

    //select-box_email
    $('#email').change(function(){
        $('#email option:selected').each(function () {
            if($(this).val() == '2') {
                $('#str_email02').val('');
                $('#str_email02').attr('disabled', false);
            }else {
                $('#str_email02').val($(this).text());
                $('#str_email02').attr('disabled', true);
            }
        });
    });


    //file-upload
    var fileTarget = $('.filebox .upload-hidden');

    fileTarget.on('change', function(){
        if (window.FileReader){
            var filename = $(this)[0].files[0].name;
        }else{
            var filename = $(this).val().split('/').pop().split('\\').pop();
        }

        $(this).siblings('.upload-name').val(filename);
    });



    $('.content .order-button span').mouseenter(function () {
        $('.content .order-button span').removeClass('on');
        $(this).addClass('on');
    }).mouseleave(function () {
        $('.content .order-button span').removeClass('on');
    });


    //cancel-button
    $('.content .order-button .del').click(function () {
        $('form').each(function () {
            this.reset();
        });
    });


    $('.content .order-button .registration').click(function () {
        if (confirm("입력하신 내용으로 문의하시겠습니까?")) {
            if (!$('#agree').is(":checked")) {
                alert('개인 정보 수집 이용에 동의하지 않으셨습니다.\n개인 정보 수집 이용에 동의하셔야 서비스를 이용하실 수 있습니다.');
                $('#agree').focusin();
                return false;
            } else {
                alert('접수되었습니다');
            }
        }
    });


});
