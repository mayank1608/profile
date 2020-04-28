(function($) {
    "use strict";
    /*=====================================
     Start Loading
     =====================================*/
    $(window).on('load', function () {
        $('#loading').fadeOut(1000);
    });
    /*=====================================
     End Loading
     =====================================*/


    /* =====================================
     Header Fixed
     =====================================*/
    $(window).on('scroll', function(){
        if ($(window).scrollTop() >= 100) {
            $('header').addClass('fixed-header');
        }
        else {
            $('header').removeClass('fixed-header');
        }
    });
    /* =====================================
     Header End
     =====================================*/



    /*=====================================
     Start Typed
     =====================================*/
    $(function () {
        $("#typed").typed({
            stringsElement: $('#typed-strings'),
            typeSpeed: 0,
            startDelay: 0,
            backSpeed: 0,
            backDelay: 3000,
            loop: true,
            loopCount: false,
            showCursor: true,
            cursorChar: "*",
            attr: null,
            contentType: 'html'
        });
    });
    /*=====================================
     End Typed
     =====================================*/
	 
	 
	 /*=====================================
     Start Skillbar Set
     =====================================*/
	 jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	 });
	/*=====================================
     End Skillbar Set
     =====================================*/



    



    $(document).ready(function(){
        /* =====================================
         Home Banner
         =====================================*/
        $(".home-banner").height($(window).height());

        $(window).on('resize', function(){
            $(".home-banner").height($(window).height());
        });
        /* =====================================
         Home Banner end
         =====================================*/



        /*=====================================
        Start Portfolio filter
        =====================================*/
            var mixer = mixitup('.portfolio-filter');                         
        /*=====================================
        End Portfolio filter
        =====================================*/



        /* =====================================
         Header Scroll
         =====================================*/
        $('.header .navbar').onePageNav({
            currentClass: 'current',
            changeHash: false,
            scrollSpeed: 1000
        });
        /* =====================================
         Header Scroll end
         =====================================*/



        /* =====================================
         Banner Icon Scroll
         =====================================*/
        $(".icon-btn").on('click', function() {
            $('html,body').animate({
                    scrollTop: $("#about").offset().top},
                'slow');
        });
        /* =====================================
         Banner Icon Scroll end
         =====================================*/



        /* =====================================
         Elements animating while entering the viewport
         =====================================*/
        $('.animate').viewportChecker({
            classToAdd: 'animated fadeIn',
            offset: 100
        });


        /* =====================================
         Night Mode toggler
         =====================================*/
        
        
        
         /*=====================================
        Start Contact Form
        =====================================*/

        $("#contact-form [type='submit']").click(function(e) {
            e.preventDefault();
            // Get input field values of the contact form
            var user_name       = $('input[name=name]').val();
            var user_email      = $('input[name=email]').val();
            var user_message    = $('textarea[name=message]').val();
            
            console.log(user_name,user_email,user_message);
            // Datadata to be sent to server
            var post_data = {'userName':user_name, 'userEmail':user_email, 'userMessage':user_message};
           
            // Ajax post data to server
            $.post('../assets/php/contact-me.php', post_data, function(response){  
               
                // Load json data from server and output message    
                if(response.type == 'error') {

                    var output = '<div class="error-message"><p>'+response.text+'</p></div>';
                    
                } else {
               
                    var output = '<div class="success-message"><p>'+response.text+'</p></div>';
                   
                    // After submission, all the fields are reseted
                    $('#contact-form .form-control').val('');
                    
                }
               
                $("#form-messages").hide().html(output).fadeIn();

            }, 'json');

        });
       
        // Reset and hide all messages on .keyup()
        $("#contact-form input, #contact-form textarea").keyup(function() {
            $("#answer").fadeOut();
        });

        /*=====================================
        End Contact Form
        =====================================*/




    });

})(jQuery);