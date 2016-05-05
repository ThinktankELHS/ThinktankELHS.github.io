$(document).ready(function(){
    $("#firstpage").addClass("ok");
    $("#firstpage").fadeIn(2000);
    

    
    //This is all for the navbar
            var navOffset= $("nav").offset().top;
            
            $("nav").wrap("<div class='nav-placeholder'></div>");
            $(".nav-placeholder").height($("nav").outerHeight);
    
    
            $(window).scroll(function(){
                
                var scrollpos = $(window).scrollTop();
                $(".status").text(scrollpos);
                
                if(scrollpos >= navOffset){
                    $("nav").addClass("navbar-fixed-top");
                }else{
                    
                    $("nav").removeClass("navbar-fixed-top");
                };
                             
                
                if(scrollpos >= navOffset){
                    $("nav").removeClass("navbar-inverse").addClass("navbar-default");
                }else{
                    
                    $("nav").removeClass("navbar-default").addClass("navbar-inverse");
                };
                
                
                if(scrollpos >=navOffset){
                    $("body").css("padding-top","70px");
                }else{
                    $("body").css("padding-top","0px");
                }
                
                
                
            });

/*--------------------------------------------------------------
----------------------------------------------------------------
JAVASCRIPTFOR BACK TO TOP BUTTON
----------------------------------------------------------------
--------------------------------------------------------------*/

	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 200,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 800,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
});
    