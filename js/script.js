$(function () {

    /* 네비 열고 닫기 버튼 */

    $('#mini_nav').each(function () {
        var closebtn = $(this).find('.mini_nav>ul>li .closebtn');
        var openbtn = $(this).find('.mini_nav>ul>li .hbgbtn');
        var navList = $(this).find('.mini_nav');

        openbtn.click(function () {
            navList.stop().animate({ height: '100vh' }, 300);
            $(this).css('display', 'none');
            closebtn.css('display', 'block');
        });

        closebtn.click(function () {
            navList.stop().animate({ height: '60px' }, 300);
            $(this).css('display', 'none');
            openbtn.css('display', 'block');
        });
    });

    /* 네비 나타났다 사라지기 */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('nav').stop().animate({ opacity: 1 });
        } else {
            $('nav').stop().animate({ opacity: 0 });
        }
    });

/* 탑버튼 */
    $('nav .topBtn').click(function (e) {
        $('html,body').animate({ scrollTop: 0 });
        e.preventDefault();

    })

    /* 섹션1 호버 */
    $('.section_cont>ul>li').mouseover(function () {
        $(this).find('.img').stop().animate({ opacity: 1 });
    });

    $('.section_cont>ul>li>a').mouseout(function () {
        $(this).stop().animate({ opacity: 0 });
    });



    /* 사이트맵 클릭 */
    $('.siteMap>ul>li>a').click(function () {
        $('.siteMap>ul>li>a').css('color', 'black');
        $('.siteMap>ul>li>a').css('background-color', 'white');
        $('.siteMap>ul>li>ul').animate({ width: '0px' }, 200);
        $(this).css('background-color', 'black')
        $(this).css('color', 'white')
        $(this).next('ul').animate({ width: '210px' }, 200);
    });
});