$(document).ready(function(){
 
    $('.menu_btn>a').on('click', function(){
        $('.menu_bg').show(); 
        $('.sidebar_menu').show().animate({
            top:0
        });  
    });
    $('.close_btn>a').on('click', function(){
        $('.menu_bg').hide(); 
        $('.sidebar_menu').animate({
            top: '-' + 100 + '%'
                    },function(){
                        $('.sidebar_menu').hide();          
                    });  
    });


    $(function(){
        $(".top>a").click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
        $(window).scroll(function() {
            var height = $(window).scrollTop();
            if (height > 100) {
                $('.top').fadeIn();
            } else {
                $('.top').fadeOut();
            }
        });
    });
});


