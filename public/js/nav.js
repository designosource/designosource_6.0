(function($) {          
    $(document).ready(function(){                    
        $(window).scroll(function(){
            var P_header = $("header").position().top;
            if ($(this).scrollTop() > P_header - 100) {
                $('#menu').fadeIn(500);
            } else {
                $('#menu').fadeOut(500);
            }
        });
    });
})(jQuery);

$(function() {
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000); 
        return false;
      }
    }
  });
});