$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $('nav').addClass('navbar--fixed');
        } else {
            $('nav').removeClass('navbar--fixed');
        }
    });


    $('nav a').click(function (event) {
        var id = $(this).attr("href");
        var offset = 0;
        var target = $(id).offset().top;
        $('html, body').animate({
            scrollTop: target
        }, 500);
        event.preventDefault();
    });


    var sections = $('article'),
        nav = $('nav'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

});
