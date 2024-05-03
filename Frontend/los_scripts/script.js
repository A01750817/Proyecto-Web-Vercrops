$(document).ready(function(){

    // link action
    $(".action").click(function(e){
        e.preventDefault();

        $(".slide").removeClass("active");
        var slide = $(this).closest(".slide");
        slide.addClass("active");
    });

    // checkWidth
    var checkWidth = function(){
        var windowsize = $(window).width();
        if (windowsize > 480) {
            var slideWidth = $('.active').width();
            $('.slide-content').css({
                "width" : slideWidth+"px"
            });
        }
    };

    // Call checkWidth on page load
    checkWidth();

    // Call checkWidth on window resize
    $(window).resize(function() {
        // onresize
        checkWidth();

        // finish resize
        clearTimeout(window.resizedFinished);
        window.resizedFinished = setTimeout(checkWidth, 500);
    });
});
