$( document ).ready(function() {
        $(".teamdesc").hide();
        $( ".teamlist > li" ).mouseenter(function() {
            $("<div class='overlay'></div>").appendTo($(this)).hide().fadeIn('150')
            // $(this).append("<div class='overlay'></div>");
            $(this).children().fadeIn('fast');
            // $(this).animate({'background-size': '100%'});
        }).mouseleave(function() {
            // $(".overlay").fadeOut('fast', function() {
                $(".overlay").remove();
            // });
            $(this).children().fadeOut('fast');
        });


});
