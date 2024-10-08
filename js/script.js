

$(document).ready(function () {
    function calculateImageSize() {
        var $img = $(".dimensions img");
        var $container = $img.parent();

        var containerWidth = $container.width();
        var containerHeight = $container.height();

        var naturalWidth = $img[0].naturalWidth;
        var naturalHeight = $img[0].naturalHeight;

        // حساب النسبة
        var widthRatio = containerWidth / naturalWidth;
        var heightRatio = containerHeight / naturalHeight;
        var scale = Math.min(widthRatio, heightRatio);

        // العرض والارتفاع بعد التحجيم
        var fittedWidth = naturalWidth * scale;
        var fittedHeight = naturalHeight * scale;


        $(".screen-dimensions").css({ "width": fittedWidth + 'px', "height": fittedHeight + 'px' })
        $(".num").css({ "width": (fittedWidth * (46.63 / 1080)) + 'px ',"padding":"0px"})

        // حساب حجم الخط بناءً على أصغر بُعد
        var minDimension = Math.min(fittedWidth, fittedHeight);
        var fontSize = minDimension ;

        $(".hero .hero-title").css("font-size", (fontSize * .07) + 'px');
        $(".hero button").css("font-size", (fontSize * .036) + 'px');
        $(".ar-section p").css("font-size", (fontSize * .034) + 'px');
        $(".en-section p").css("font-size", (fontSize * .032) + 'px');
        $(".ar-section .mid-title").css("font-size", (fontSize * .05) + 'px');
        $(".en-section .mid-title").css("font-size", (fontSize * .04) + 'px');
        $(".ar-section .goal-box p").css("font-size", (fontSize * .027) + 'px');
        $(".en-section .goal-box p").css("font-size", (fontSize * .027) + 'px');
        $(".ar-section .center-goal-box p").css("font-size", (fontSize * .023) + 'px');
        $(".en-section .center-goal-box p").css({"font-size": (fontSize * .02) + 'px',"padding":"0px"});
        $(".ar-section .goal-row .mid-title").css("font-size", (fontSize * .04) + 'px');
        $(".en-section .goal-row .mid-title").css("font-size", (fontSize * .04) + 'px');
        $(".en-section .qr-box p").css("font-size", (fontSize * .025) + 'px');
        $(".tadreeb-dawly p").css("font-size", (fontSize * .032) + 'px');
        $(".tadreeb-wekaalaat p").css("font-size", (fontSize * .032) + 'px');
        $(".num").css("width", (fontSize * .06) + 'px');
        $(".num").css("font-size", (fontSize * .034) + 'px');
        $(".mid-text").css("font-size", (fontSize * .021) + 'px');
        $(".comik-en .mid-title").css("font-size", (fontSize * .03) + 'px');
        $(".ar-section .goal-box .num").css("font-size", (fontSize * .025) + 'px');
        $(".en-section .goal-box .num").css("font-size", (fontSize * .019) + 'px');
        $(".baba-en .mid-title").css("font-size", (fontSize * .034) + 'px');
        $(".tadreeb-targama .goal-box p").css("font-size", (fontSize * .03) + 'px');
        $(".alketaab .goal-box p").css("font-size", (fontSize * .021) + 'px');
        $(".aamaal .description").css("font-size", (fontSize * .027) + 'px');
        $(".sharaakaat .mid-title").css("font-size", (fontSize * .044) + 'px');
        $(".hero p").css("font-size", (fontSize * .043) + 'px');
        $(".sharaakaat p.wid-85").css("font-size", (fontSize * .031) + 'px');
        $(".tadreeb-wekaalaat p:nth-child(5)").css("font-size", (fontSize * .049) + 'px');
        $(".tadreeb-naashreen p.wid-85").css("font-size", (fontSize * .031) + 'px');
        $(".tadreeb-naashreen .goal-box p").css("font-size", (fontSize * .024) + 'px');
        $(".tadreeb-falsafa  p.wid-85").css("font-size", (fontSize * .029) + 'px');
        $(".alketaab  p.wid-85").css("font-size", (fontSize * .033) + 'px');
        $(".sharaakaat-en .mid-title").css("font-size", (fontSize * .036) + 'px');
        
    }

    // أول مرة لما الصفحة تتحمل
    calculateImageSize();

    // لما يحصل تغيير في حجم الشاشة
    $(window).on('resize', function () {
        calculateImageSize();
    });


    // screens and button

    // menu

    $(".hero .ar-btn").click(function () {
        $("section ").fadeOut(700);
        $(".menu-ar").fadeIn(800);
    })
    $(".hero .en-btn").click(function () {
        $("section ").fadeOut(700);
        $(".menu-en").fadeIn(800);
    })

    // back btn
    $(".menu .back-btn").click(function () {
        $("section").fadeOut(700);
        $(".hero").fadeIn(800);
    })

    $(".ar-section .back-btn").click(function () {
        $("section").fadeOut(700);
        $(".menu-ar").fadeIn(800);
        $(".info-section video").trigger("pause")
        $(".info-section video").prop('currentTime', 0);
        $("iframe").attr("src","none")
        $("iframe").attr("src","https://www.youtube.com/embed/rEA7D2wMTK4")
        
    })
    $(".en-section .back-btn").click(function () {
        $("section").fadeOut(700);
        $(".menu-en").fadeIn(800);
        $(".info-section video").trigger("pause")
        $(".info-section video").prop('currentTime', 0);
        $("iframe").attr("src","none")
        $("iframe").attr("src","https://www.youtube.com/embed/rEA7D2wMTK4")
        
    })

    // open section

    $(".menu-btn").click(function () {
        let pageTarget = $(this).attr("target")
        $("section").fadeOut(700);
        $("." + pageTarget).fadeIn(800);
    })


    $(".aamaal-ar .next-btn button").click(function () {
        $("section").fadeOut(700);
        $(".aamaal2-ar").fadeIn(800);
        $(".info-section video").trigger("pause")
        $(".info-section video").prop('currentTime', 0);
    })
    $(".aamaal-en .next-btn button").click(function () {
        $("section").fadeOut(700);
        $(".aamaal2-en").fadeIn(800);
        $(".info-section video").trigger("pause")
        $(".info-section video").prop('currentTime', 0);
    })

    
    $(".aamaal2-ar .prev-btn button").click(function () {
        $("section").fadeOut(700);
        $(".aamaal-ar").fadeIn(800);
        $(".info-section video").trigger("pause")
        $(".info-section video").prop('currentTime', 0);
    })
    $(".aamaal2-en .prev-btn button").click(function () {
        $("section").fadeOut(700);
        $(".aamaal-en").fadeIn(800);
        $(".info-section video").trigger("pause")
        $(".info-section video").prop('currentTime', 0);
    })


    $('video').on('play', function () {
        // وقف كل الفيديوهات الأخرى
        $('video').not(this).each(function () {
            this.pause();
        });
        $("iframe").attr("src", "none")
        $("iframe").attr("src", "https://www.youtube.com/embed/rEA7D2wMTK4")
    });
});

