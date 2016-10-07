$(document).ready(function(){
    $(".modalBTN").click(function(){
        $("body").addClass( "overflowclick" );
    });

    $(".modal-close").click(function(){
        $("body").removeClass( "overflowclick" );
    });
});
