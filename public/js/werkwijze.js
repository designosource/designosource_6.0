$( document ).ready(function() {
	$(".uitlegtekst > div").hide();
	$(".ww1").show();


    $(".wwstap1").click(function() {
        if(!$(this).hasClass("ticked")){
        	$(".uitlegtekst > div").slideUp();
        	$(".ww1").slideDown();
        };
    });

    $(".wwstap2").click(function() {
        if(!$(this).hasClass("ticked")){
        	$(".uitlegtekst > div").slideUp();
        	$(".ww2").slideDown();
        };
    });

    $(".wwstap3").click(function() {
        if(!$(this).hasClass("ticked")){
        	$(".uitlegtekst > div").slideUp();
        	$(".ww3").slideDown();
        };
    });

    $(".wwstap4").click(function() {
        if(!$(this).hasClass("ticked")){
        	$(".uitlegtekst > div").slideUp();
        	$(".ww4").slideDown();
        };
    });

    $(".wwstap5").click(function() {
        if(!$(this).hasClass("ticked")){
        	$(".uitlegtekst > div").slideUp();
        	$(".ww5").slideDown();
        };
    });

    // class ticked

    $(".watwedoen-werkwijze > div").click(function() {
        $(".watwedoen-werkwijze > div").removeClass("ticked");
        $(this).addClass("ticked");
    });

    // WERKWIJZE MOBILE

    $(".ww_m_content > p").css('visibility', 'hidden').css('height', '0px');
    $(".ww1_m_content > p").css('visibility', 'visible').css('height', 'auto');


     $(".ww_m_cont").click(function() {
        $(".ww_m_content > p").css('visibility', 'hidden').css('height', '0px');
        $(this).find('*').css('visibility', 'visible').css('height', 'auto');
    });


    // class ticked

    $(".ww_m_cont").click(function() {
        $(".ww_m_cont > div").removeClass("m_ticked");
        $(this).children(".ww_m_getal").addClass("m_ticked");
    });




});