$(document).ready(function() {
    $("#btnbericht").click(function() {

        var email = $('#emailadres').val();
        var subject = $("input:radio[name=subject]").val();
        var message = $('#bericht').val();

        var veld_email = $("#emailadres"); 
        var veld_message = $("#bericht");

        if(email == '' && message == ''){
            veld_message.addClass("error");
            veld_email.addClass("error");
            return;
        }else{
            if(email == '' || message == ''){
                if(email == ''){veld_email.addClass("error");return;}else{veld_email.removeClass("error");}
                if(message == ''){veld_message.addClass("error");return;}else{veld_message.removeClass("error");}
            }else{
                if(veld_email.hasClass("error") || veld_message.hasClass("error")){
                    console.log("mag ni, justekes invulle.")
                    return;
                }else{
                    var values = $("#contactForm").serialize();

                    $.ajax({
                        url: "mail/contact_us.php",
                        type: "post",
                        data: values ,
                        success: function (response) {
                           // you will get response from your php page (what you echo or print)                 
                        window.location = 'http://www.designosource.be';
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                           console.log(textStatus, errorThrown);
                        }
                    });      
                }
            }
        }
    });

    $('#bericht').keyup(function(event) {
        var input=$(this);
        var message=$(this).val();
        console.log(message);
        if(message){input.removeClass("error");}
        else{input.addClass("error");}   
    });

    $('#emailadres').on('input', function() {
        var input=$(this);
        var re = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var is_email=re.test(input.val());
        if(is_email){input.removeClass("error");}
        else{input.addClass("error");} 
    });
});

    //form validation met plugin

   /* $('#contactForm').validate({
        rules: {
            emailadres: {
                required: true,
                email: true
            },
            bericht: {
                required: true
            },
            highlight: function (element) {
                $(element).parent().addClass('error')
            },
            unhighlight: function (element) {
                $(element).parent().removeClass('error')
            },
            submitHandler: function(form) {
             /*var data = $('#contactForm').serialize();   
             $.post(
                    '../mail/contact_us.php',
                    {data: data},
                    function(response){
                      console.log(response);
                    }
                );
            $("#contactForm").ajaxForm({url: 'mail/contact_us.php', type: 'post'});
            }
        }
    });*/
    //http://code.runnable.com/UkmCKF6ekb0tAAC-/how-to-use-jquery-validation-custom-messages-and-placement
    //end form validation